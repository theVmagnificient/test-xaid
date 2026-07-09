// Failure ping that's actually readable in Telegram — no need to open a console.
//   node notify-failure.mjs "<short message>" [<logPath>] [--retry|--gaveup]
// Reads the tail of the log, recognises common causes (e.g. Claude session
// limit), and sends both a plain-language explanation and the raw tail.
// Flags: --retry  = a post-reset auto-retry is scheduled;
//        --gaveup = the post-reset retry also failed, nothing more today.
import { readFileSync, existsSync } from 'node:fs';
import { loadEnv, tg } from './tg.mjs';

const { token, chatId } = loadEnv();
if (!chatId) process.exit(0); // best-effort — nothing to do without a chat

const rawArgs = process.argv.slice(2);
const flags = new Set(rawArgs.filter((a) => a.startsWith('--')));
const positional = rawArgs.filter((a) => !a.startsWith('--'));
const headline = positional[0] || 'Automation failure';
const logPath = positional[1];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let tail = '';
if (logPath && existsSync(logPath)) {
  const lines = readFileSync(logPath, 'utf8').split('\n').filter(Boolean);
  tail = lines.slice(-15).join('\n');
}

// Recognise known causes so the message says what to actually do.
let diagnosis = '';
if (/session limit|usage limit|hit your (session|usage) limit/i.test(tail)) {
  const resets = tail.match(/resets\s+([^\n·]+)/i);
  const resetNote = resets ? `Сбрасывается: ${esc(resets[1].trim())}. ` : '';
  if (flags.has('--retry')) {
    diagnosis =
      `⏳ <b>Исчерпан лимит Claude — прогон не запустился.</b>\n` +
      resetNote +
      `Перезапущу автоматически после сброса (≈23:00). Если получится — подборка придёт ночью, делать ничего не нужно.`;
  } else if (flags.has('--gaveup')) {
    diagnosis =
      `⏳ <b>И после сброса лимита прогон не прошёл.</b>\n` +
      resetNote +
      `Сегодня подборки не будет — вернусь завтра вечером.`;
  } else {
    diagnosis =
      `⏳ <b>Прогон не запустился — исчерпан лимит Claude.</b>\n` +
      resetNote +
      `Черновиков нет, делать ничего не нужно — следующий автоматический прогон завтра.`;
  }
} else if (/has not been trusted/i.test(tail)) {
  diagnosis = `🔒 Воркспейс не «доверенный» — часть настроек проигнорирована. Возможно, прогон прошёл частично; проверь превью, если черновики пришли.`;
}

const parts = [`🚨 <b>${esc(headline)}</b>`];
if (diagnosis) parts.push('', diagnosis);
if (tail) parts.push('', 'Хвост лога:', `<pre>${esc(tail)}</pre>`);
if (logPath) parts.push('', `📄 Полный лог: <code>${esc(logPath)}</code>`);

await tg(token, 'sendMessage', {
  chat_id: chatId,
  text: parts.join('\n'),
  parse_mode: 'HTML',
  link_preview_options: { is_disabled: true },
});
