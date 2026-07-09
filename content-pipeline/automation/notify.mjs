// Sends the evening PREVIEW digest to Telegram: one message per pending draft
// with a staging preview link. NO approve/reject buttons — the founder reviews
// the previews and approves via the Claude Code console, not the bot
// (decision 2026-07-08). Run after the evening pipeline has integrated drafts
// and deployed staging.
import { loadEnv, tg, readPending, writePending } from './tg.mjs';

const { token, chatId } = loadEnv();
if (!chatId) throw new Error('TELEGRAM_CHAT_ID missing from .env');

const pending = readPending();
const fresh = pending.filter((p) => p.status === 'pending' && !p.messageId);
const awaiting = pending.filter((p) => p.status === 'pending' && p.messageId);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

if (fresh.length === 0) {
  let text = '📭 Сегодня подходящих новостей для статей нет.';
  if (awaiting.length) text += `\n\n⏳ Ещё ждут твоего решения: ${awaiting.length} (превью в сообщениях выше).`;
  await tg(token, 'sendMessage', { chat_id: chatId, text, link_preview_options: { is_disabled: true } });
  process.exit(0);
}

await tg(token, 'sendMessage', {
  chat_id: chatId,
  link_preview_options: { is_disabled: true },
  text: `🌙 Вечерняя подборка xAID: ${fresh.length} на ревью. Глянь превью ниже и скажи в Claude Code, какие публиковать.${awaiting.length ? `\n⏳ Плюс ${awaiting.length} ждут решения с прошлых дней.` : ''}`,
});

for (const p of fresh) {
  const lines = [
    `<b>${esc(p.title)}</b>`,
    '',
    `${p.factcheck === 'pass' ? '✅ Факт-чек пройден' : '⚠️ Факт-чек: ' + esc(p.factcheck)} · gate: ${p.gate === 'ready' ? 'ready' : '⚠️ ' + p.gate}`,
  ];
  if (p.note) lines.push('', `❗️ <i>${esc(p.note)}</i>`);
  lines.push('', `👀 Превью: ${p.stagingUrl}`);
  const msg = await tg(token, 'sendMessage', {
    chat_id: chatId,
    text: lines.join('\n'),
    parse_mode: 'HTML',
    link_preview_options: { is_disabled: true },
  });
  p.messageId = msg.message_id;
}

writePending(pending);
console.log(`preview digest sent: ${fresh.length} drafts`);
