#!/usr/bin/env node
// Resolve a Chrome/Chromium binary for react-snap, then exec it.
// Precedence: PUPPETEER_EXECUTABLE_PATH env -> known platform paths -> $PATH lookup.

import { existsSync } from 'node:fs';
import { execSync, spawn } from 'node:child_process';
import { platform } from 'node:os';

const CANDIDATES = {
  darwin: [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ],
  linux: [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ],
  win32: [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  ],
};

function findFromPath() {
  const names = platform() === 'win32'
    ? ['chrome.exe']
    : ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser'];
  for (const name of names) {
    try {
      const path = execSync(`command -v ${name}`, { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString().trim();
      if (path) return path;
    } catch { /* not found, keep trying */ }
  }
  return null;
}

function resolveChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    if (existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
      return process.env.PUPPETEER_EXECUTABLE_PATH;
    }
    console.error(
      `[snap] PUPPETEER_EXECUTABLE_PATH is set but does not exist: ${process.env.PUPPETEER_EXECUTABLE_PATH}`,
    );
    process.exit(1);
  }
  for (const p of CANDIDATES[platform()] ?? []) {
    if (existsSync(p)) return p;
  }
  const fromPath = findFromPath();
  if (fromPath) return fromPath;
  return null;
}

const chrome = resolveChrome();
if (!chrome) {
  console.error(
    '[snap] No Chrome/Chromium binary found. Install Chrome, or set PUPPETEER_EXECUTABLE_PATH to the binary path.',
  );
  process.exit(1);
}

console.log(`[snap] using Chrome: ${chrome}`);

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['react-snap'],
  {
    stdio: 'inherit',
    env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: chrome },
  },
);

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});
