---
name: 'vite-plugin-pretty-module-classnames'
description: 'Плагин для Vite, который удаляет суффикс -module из имен файлов при генерации имен классов в CSS модулях, обеспечивая более чистый и предсказуемый результат сборки.'
---

Pretty Module Classnames — это плагин для Vite, который исправляет проблемы с именованием классов в CSS модулях. По умолчанию Vite генерирует имена в формате `__classname_hash`, опуская имя компонента, что усложняет отладку. При попытке добавить имя компонента через настройку `generateScopedName: '[name]__[local]_[hash:base64:5]'` возникают проблемы: в React добавляется нежелательный суффикс `-module`, а в Vue-приложениях такая конфигурация и вовсе может сломать сборку. Плагин решает эти проблемы, обеспечивая предсказуемое и чистое именование классов в формате `ComponentName__classname_hash` независимо от типа приложения.

- [Github](https://github.com/teplostanski/vite-plugin-pretty-module-classnames)
- [Npmjs.com](https://www.npmjs.com/package/vite-plugin-pretty-module-classnames)