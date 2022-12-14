## 🚀 Проект Your talent

### 1. Описание проекта

Репозиторий: Фронт: https://github.com/GoWeb-Internship/gw-rh-front Бек:

**Основной стек:**

- Next.js
- Strapy
- Tailwind CSS
- React hook form

**Полезные ссылки для ознакомления:**

- Next.js [Документация](https://nextjs.org/docs/getting-started)

- Strapy
  [Документация](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html)

- Tailwind CSS

  [Подключение для Next](https://tailwindcss.com/docs/guides/nextjs)
  [Документация](https://tailwindcss.com/docs/y)

### 2. Core Concepts

**Названия веток:**

**Пример**: `PS_feat_form`,

- `PS` - ваши имя и фамилия (IV - Ivan Vasylyovich и т.д.)
- `_feat_` - обозначение того, что будет делаться в ветке
- `form` - имя функционала, секции, сервиса и т.д.

**Варианты**:

- `_feat_` - добавление нового функционала (feature);
- `_fix_` - исправление каких-то ошибок (для того, чтобы сделать мелкие фиксы,
  то не нужно создавать новую ветку, но если это какие-то исправления более
  глобальные и выходят в рамки целой задачи, тогда создаём ветку);
- `_ref_` - рефакторинг кода, который выходит на уровень отдельной задачи
- `_docs_` - добавление документации, комментариев и т.д.
- `_test_` - тестирование какого-то функционала, если необходимо.

**Описание коммитов:**

Отвечает на вопрос: что делает этот коммит?

Поскольку во время написания кода, в рамках работы с одной веткой, у вас может
быть много коммитов, их также хорошо разделять по их назначению

**Пример**

```powershell
git commit -m "feat: add callback form markup"
```

```powershell
git commit -m "fix: fix trouble with form validation. Value - name"
```

**Pull requests:**

Пулл реквесты делаем только в ветку `dev`. Сейчас она настроена как ветка по
умолчанию, поэтому с этим не должно быть проблем.

Описание пулл реквеста делаете немного более детальными чем коммиты. Если
считаете нужным обратить внимание на какой-то момент, укажите на это. Язык
используете удобный для вас.

### 3. Работа с Git в терминале

[Ссылка на инструкцию](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing)

### 4. Работа с проектом

1. **Клонируем себе репозиторий**

```powershell
git clone https://github.com/GoWeb-Internship/gw-rh-front.git
```

2. **Выполняем установку пакетов**

```powershell
npm i
```

если через Yarn

```powershell
yarn install
```

3. **Настраиваем переменные окружения (environment)**

Необходимо обратиться к ТЛ за получением ключей переменных окружения (env).

Создаём в корневой папке (на уровне с `.env.local`) 2 файла:

```
.env.local
```

- В файле `.env.example` указаны названия ключей.
- Копируем в созданные файлы и вставляем информацию, полученную у ТЛ.
- Оба файла должны быть идентичны.

4. **Запускаем локальный сервер, проверяем работу.**

```powershell
npm run dev
```

5. **Работаем с проектом по алгоритму, описанному в
   [инструкции по работе с Git в терминале](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing).**
   Даже если вы по какой-то причине ещё не используете терминал, то алгоритм
   чётко описан.

### Конфигурация Next.js

Для конфигурации в Next используется файл конфигурации `next.config.js` Также
для Tailwind - `tailwind.config.js` и `postcss.config`

### Маршрутизация Next.js

В папке `pages` есть следующая структура

```
|-- pages
    |-- _app.js
    |-- _document.js
    |-- index.js
    |-- [slug].js
    |-- projects
        |-- index.js
        |-- [slug].js
```

`_document.js` - необходим, чтобы в `html` динамически передавать `lang`
`index.js`- главная страница `[slug].js` - динамически генерирует страницы в
зависимости от навигации. Кроме индексной страницы и проектов. `projects` -
динамически создаются страницы проектов.

Страницы создаються с учётом локализации.

### ENV

SERVER_URL= LOCAL_SERVER_URL= NEXT_TOKEN= NEXT_CHAT_ID=

### Доки по работе с админ-панелью

https://docs.google.com/document/d/12DMBk70eWbpIqNhDe7tKyhl_R16qmFe09XYEGs30Qx8/edit?usp=sharing
