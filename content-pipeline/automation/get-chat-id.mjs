// One-time helper: message your new bot in Telegram, then run
//   node content-pipeline/automation/get-chat-id.mjs
// and copy the printed chat id into .env as TELEGRAM_CHAT_ID.
import { loadEnv, tg } from './tg.mjs';

const { token } = loadEnv();
const updates = await tg(token, 'getUpdates', { timeout: 0 });
if (!updates.length) {
  console.log('Нет сообщений. Напиши боту любое сообщение в Telegram и запусти снова.');
} else {
  const seen = new Set();
  for (const u of updates) {
    const chat = u.message?.chat || u.callback_query?.message?.chat;
    if (chat && !seen.has(chat.id)) {
      seen.add(chat.id);
      console.log(`chat_id: ${chat.id}  (${chat.first_name || ''} ${chat.username ? '@' + chat.username : ''})`);
    }
  }
  console.log('\nДобавь в .env строку: TELEGRAM_CHAT_ID=<нужный chat_id>');
}
