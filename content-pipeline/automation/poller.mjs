// Approval poller: runs every 15 min via launchd. Reads Telegram button
// presses (long-poll getUpdates, no webhook/server needed), verifies the
// sender, and runs publish.mjs / reject.mjs accordingly.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv, tg, readPending, STATE_DIR } from './tg.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OFFSET_FILE = resolve(STATE_DIR, 'offset.txt');
const LOCK_FILE = resolve(STATE_DIR, 'poller.lock');

// Single-instance lock (stale after 30 min — a publish run can take ~10).
if (existsSync(LOCK_FILE)) {
  const age = Date.now() - Number(readFileSync(LOCK_FILE, 'utf8'));
  if (age < 30 * 60 * 1000) process.exit(0);
}
writeFileSync(LOCK_FILE, String(Date.now()));
process.on('exit', () => { try { unlinkSync(LOCK_FILE); } catch { /* ignore */ } });

const { token, chatId } = loadEnv();
if (!chatId) throw new Error('TELEGRAM_CHAT_ID missing from .env');

const offset = existsSync(OFFSET_FILE) ? Number(readFileSync(OFFSET_FILE, 'utf8')) : 0;
const updates = await tg(token, 'getUpdates', {
  offset, timeout: 0, allowed_updates: ['callback_query'],
});

let maxUpdateId = offset - 1;
for (const u of updates) {
  maxUpdateId = Math.max(maxUpdateId, u.update_id);
  const cb = u.callback_query;
  if (!cb) continue;

  // Hard gate: only the founder's chat may trigger anything.
  if (String(cb.from.id) !== String(chatId)) {
    await tg(token, 'answerCallbackQuery', { callback_query_id: cb.id, text: 'Not authorized.' });
    continue;
  }

  const [action, slug] = (cb.data || '').split(':');
  const entry = readPending().find((p) => p.slug === slug);

  if (!entry || entry.status !== 'pending') {
    await tg(token, 'answerCallbackQuery', {
      callback_query_id: cb.id,
      text: entry ? `Уже обработано: ${entry.status}` : 'Не найдено в pending.',
    });
    continue;
  }

  await tg(token, 'answerCallbackQuery', {
    callback_query_id: cb.id,
    text: action === 'pub' ? 'Публикую… (~10 мин: build + guard + deploy)' : 'Убираю…',
  });

  try {
    if (action === 'pub') {
      execSync(`node "${resolve(HERE, 'publish.mjs')}" ${slug}`, { stdio: 'inherit', timeout: 20 * 60 * 1000 });
      await tg(token, 'sendMessage', {
        chat_id: chatId,
        text: `✅ Опубликовано: https://xaid.ai/blog/${slug}/\n\nНе забудь Request Indexing в Search Console.`,
      });
    } else if (action === 'skip') {
      execSync(`node "${resolve(HERE, 'reject.mjs')}" ${slug}`, { stdio: 'inherit', timeout: 60 * 1000 });
      await tg(token, 'sendMessage', {
        chat_id: chatId,
        text: `❌ Пропущено: ${slug}. Черновик остаётся в drafts/, со стейджинга уйдёт при следующем вечернем прогоне.`,
      });
    }
    // Remove the buttons from the original message.
    if (entry.messageId) {
      await tg(token, 'editMessageReplyMarkup', {
        chat_id: chatId, message_id: entry.messageId, reply_markup: { inline_keyboard: [] },
      }).catch(() => {});
    }
  } catch (err) {
    await tg(token, 'sendMessage', {
      chat_id: chatId,
      text: `🚨 Ошибка при обработке «${slug}»: ${String(err).slice(0, 500)}\n\nСтатья НЕ опубликована. Разберись через Claude Code (логи: content-pipeline/automation/state/).`,
    });
  }
}

writeFileSync(OFFSET_FILE, String(maxUpdateId + 1));
