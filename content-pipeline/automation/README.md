# Автоматизация контент-пайплайна (Telegram-approval)

Каждый вечер в 18:00 по времени Mac пайплайн сам собирает новости,
пишет черновики, заливает их на Vercel-стейджинг и присылает в Telegram кнопки
**✅ Публикуем / ❌ Пропустить**. Нажатие ✅ публикует статью на xaid.ai в течение ~15 минут
(детерминированный скрипт: ledger → build → guard → deploy → commit; guard остаётся воротами).

## Разовая настройка (~5 минут)

### 1. Создать бота
1. В Telegram открой **@BotFather** → `/newbot` → имя, например `xAID Content` → username, например `xaid_content_bot`.
2. BotFather даст токен вида `1234567890:AAA...`. Добавь в `.env` в корне репо:
   ```
   TELEGRAM_BOT_TOKEN=1234567890:AAA...
   ```

### 2. Узнать свой chat_id
1. Напиши своему новому боту любое сообщение (например «привет»).
2. Запусти: `node content-pipeline/automation/get-chat-id.mjs`
3. Добавь в `.env`:
   ```
   TELEGRAM_CHAT_ID=<число из вывода>
   ```
Бот принимает решения **только** с этого chat_id.

### 3. Проверить связь
```bash
node content-pipeline/automation/notify-failure.mjs "Тест: бот подключён"
```
Должно прийти сообщение в Telegram.

### 4. Включить расписание (launchd)
```bash
cp content-pipeline/automation/launchd/*.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.xaid.content-evening.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.xaid.content-poller.plist
```
Выключить: `launchctl bootout gui/$(id -u)/com.xaid.content-evening` (и `...content-poller`).

## Как это работает

| Компонент | Что делает |
|---|---|
| `evening.sh` + `evening-prompt.md` | 19:00: headless Claude запускает пайплайн (Ingest→Score→Draft→Verify→QA), интегрирует черновики по 4-файловому контракту, деплоит стейджинг, пишет `state/pending.json`, шлёт дайджест. Прод-деплой и git запрещены ему через `claude-settings.json` (deny). |
| `notify.mjs` | Дайджест в TG: заголовок, факт-чек, judgment call, ссылка на стейджинг, кнопки. |
| `poller.mjs` | Каждые 15 мин читает нажатия кнопок (long-poll, сервер не нужен), проверяет chat_id. |
| `publish.mjs <slug>` | ✅: ledger approve → `bun run build` → `bun run guard` → `bun run deploy` → git commit. Без LLM. |
| `reject.mjs <slug>` | ❌: откатывает интеграцию (4 файла), пишет rejected в ledger. Черновик остаётся в `drafts/`. |
| `state/` | pending.json, offset, логи. В git не попадает (.gitignore). |

## Ограничения / заметки

- **Mac должен быть включён.** Если спал в 19:00 — launchd запустит прогон при пробуждении. Поллер тоже догонит нажатия.
- **Стоимость:** один вечерний прогон ≈ 700–800k токенов.
- **Часовой пояс:** в plist стоит 18:00 локального времени Mac (решение 2026-07-07: по её часам, не по CET). Если сменишь таймзону Mac — время сдвинется вместе с ней, править ничего не нужно.
- **Правки к статье** через бота не делаются (только ✅/❌) — правки как раньше, через Claude Code.
- **После публикации** бот напомнит про Request Indexing в Search Console (ручной шаг).
- Ручной запуск вечернего прогона: `zsh content-pipeline/automation/evening.sh`; поллера: `node content-pipeline/automation/poller.mjs`.
