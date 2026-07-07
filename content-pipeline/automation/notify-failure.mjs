// Minimal failure ping: node notify-failure.mjs "<message>"
import { loadEnv, tg } from './tg.mjs';
const { token, chatId } = loadEnv();
if (chatId) await tg(token, 'sendMessage', { chat_id: chatId, text: `🚨 ${process.argv[2] || 'Automation failure'}` });
