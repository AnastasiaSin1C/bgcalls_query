# Лендинг query.bgcalls.ru

Рекламная страница курса «Инструменты 1С для аналитика». Запись, программа и тарифы — на Тильде: https://bgcalls.ru/tools

- «Записаться» → https://bgcalls.ru/tools
- «Смотреть программу и тарифы» → https://bgcalls.ru/tools#rec713897254
- Счёт юрлицу: `info@bgcalls.ru` или Telegram [@SAnastasia](https://t.me/sAnastasia)

Счётчик Метрики **94870906** (тот же, что на Тильде). Цель клика по программе: идентификатор `query_to_tools`.

## Опубликовать (GitHub Pages + DNS)

Тильду и `bgcalls.ru` не трогать. Нужен только поддомен `query`.

### 1. Репозиторий на GitHub

1. Войдите в [github.com](https://github.com) (ваш аккаунт).
2. [Создайте репозиторий](https://github.com/new): имя `query.bgcalls.ru`, **без** галок README / .gitignore / license (файлы уже есть в папке). Можно публичный.

### 2. Залить файлы через GitHub Desktop

Папка: `C:\Users\Анастасия\YandexDisk\Вайбкодинг\query.bgcalls.ru`

1. Откройте [GitHub Desktop](https://desktop.github.com).
2. File → Add local repository → выберите эту папку. Если пишет, что это не репозиторий — **create a repository**.
3. Publish repository: тот же аккаунт, имя `query.bgcalls.ru`, без «Keep this code private», если страница должна открываться без логина.
4. Если репозиторий уже создан на сайте: Repository → Repository settings → Remote, укажите URL `https://github.com/ВАШ_ЛОГИН/query.bgcalls.ru.git` и Publish / Push.

После правок лендинга: в Desktop появится список файлов → Summary → Commit to main → Push origin.

### 3. Включить GitHub Pages

В репозитории на github.com: **Settings → Pages**

- Source: **Deploy from a branch**
- Branch: `main`, папка `/ (root)`
- Save

Через 1–2 минуты страница откроется как `https://ВАШ_ЛОГИН.github.io/query.bgcalls.ru/`.

В том же Pages в поле **Custom domain** введите `query.bgcalls.ru` и сохраните. Файл `CNAME` в папке уже с этим именем. Дождитесь галочки HTTPS (часто 5–30 минут **после** DNS).

### 4. DNS — одна запись

Апекс `bgcalls.ru` и www оставляете на Тильде.

У регистратора домена (или в Тильде → Домен, если NS тильдовские) добавьте:

| Тип | Хост / имя | Значение |
|-----|------------|----------|
| CNAME | `query` | `ВАШ_ЛОГИН.github.io` |

Подставьте логин GitHub. Не A-запись на IP Тильды. Не меняйте записи самого `bgcalls.ru`.

Проверка: в браузере `https://query.bgcalls.ru` — этот лендинг, замок HTTPS.

### 5. Метрика (после того как сайт открылся)

1. [Метрика](https://metrika.yandex.ru) → счётчик **94870906** → Настройки → Счётчик → в адреса добавьте `query.bgcalls.ru`.
2. Цели → Добавить цель → тип **JavaScript-событие** → идентификатор `query_to_tools` → сохранить.
3. Проверка: откройте `https://query.bgcalls.ru/?yclid=test`, нажмите «Смотреть программу и тарифы». В отчёте «Конверсии» цель должна появиться через 1–2 минуты.

### 6. Директ

Ссылка в объявлении: `https://query.bgcalls.ru/`

В кампании подключите счётчик 94870906. В конверсии Директа — **отправка формы на /tools**, не цель `query_to_tools` (клик по кнопке слишком «дешёвый» для оптимизации).
