// Sends the evening digest to Telegram: one message per pending draft with
// inline [Публикуем]/[Пропустить] buttons. Run after the evening pipeline
// has integrated drafts and deployed staging.
import { loadEnv, tg, readPending, writePending } from './tg.mjs';

const { token, chatId } = loadEnv();
if (!chatId) throw new Error('TELEGRAM_CHAT_ID missing from .env');

const pending = readPending();
const fresh = pending.filter((p) => p.status === 'pending' && !p.messageId);
const stale = pending.filter((p) => p.status === 'pending' && p.messageId);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

if (fresh.length === 0) {
  let text = '📭 Сегодня подходящих новостей для статей нет.';
  if (stale.length) text += `\n\n⏳ Ждут решения с прошлых дней: ${stale.length} шт. (кнопки в сообщениях выше).`;
  await tg(token, 'sendMessage', { chat_id: chatId, text });
  process.exit(0);
}

await tg(token, 'sendMessage', {
  chat_id: chatId,
  text: `🌙 Вечерняя подборка xAID: ${fresh.length} ${fresh.length === 1 ? 'черновик' : 'черновика'} на одобрение.${stale.length ? `\n⏳ Плюс ${stale.length} ждут решения с прошлых дней.` : ''}`,
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
    reply_markup: {
      inline_keyboard: [[
        { text: '✅ Публикуем', callback_data: `pub:${p.slug}` },
        { text: '❌ Пропустить', callback_data: `skip:${p.slug}` },
      ]],
    },
  });
  p.messageId = msg.message_id;
}

writePending(pending);
console.log(`digest sent: ${fresh.length} drafts`);
