// Shared helpers for the Telegram approval flow. Plain Node 18+, no deps.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const STATE_DIR = resolve(ROOT, 'content-pipeline/automation/state');
export const PENDING = resolve(STATE_DIR, 'pending.json');

// launchd starts with a bare PATH — make bun/vercel/node resolvable for child processes.
const HOME = process.env.HOME || '/Users/anastasia';
process.env.PATH = [
  '/opt/homebrew/bin',
  `${HOME}/.bun/bin`,
  `${HOME}/.local/bin`,
  dirname(process.execPath), // whichever node is running us
  process.env.PATH || '/usr/bin:/bin',
].join(':');

export function loadEnv() {
  const env = {};
  const raw = readFileSync(resolve(ROOT, '.env'), 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  const token = env.TELEGRAM_BOT_TOKEN;
  if (!token) throw new Error('TELEGRAM_BOT_TOKEN missing from .env');
  return { token, chatId: env.TELEGRAM_CHAT_ID };
}

export async function tg(token, method, payload) {
  const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram ${method} failed: ${JSON.stringify(data)}`);
  return data.result;
}

export function readPending() {
  if (!existsSync(PENDING)) return [];
  return JSON.parse(readFileSync(PENDING, 'utf8'));
}

export function writePending(list) {
  writeFileSync(PENDING, JSON.stringify(list, null, 2) + '\n');
}
