// Post-publish reminder: sends the live xaid.ai article URLs to Telegram so the
// founder remembers to Request Indexing in Search Console. Plain links, no
// buttons (decision 2026-07-08). Run after publishing approved articles to prod.
//   node notify-indexing.mjs <slug> [<slug> ...]
import { loadEnv, tg } from './tg.mjs';

const { token, chatId } = loadEnv();
if (!chatId) process.exit(0);

const slugs = process.argv.slice(2);
if (!slugs.length) throw new Error('usage: node notify-indexing.mjs <slug> [<slug> ...]');

const urls = slugs.map((s) => `https://xaid.ai/blog/${s}/`);
const text = [
  '🔎 Опубликовано на xaid.ai — не забудь Request Indexing в Search Console:',
  '',
  ...urls,
].join('\n');

await tg(token, 'sendMessage', { chat_id: chatId, text, link_preview_options: { is_disabled: true } });
console.log(`indexing reminder sent: ${slugs.length} url(s)`);
