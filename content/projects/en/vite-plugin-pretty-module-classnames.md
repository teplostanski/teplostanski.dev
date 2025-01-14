---
name: 'vite-plugin-pretty-module-classnames'
description: 'A Vite plugin that removes the -module suffix from filenames when generating CSS module class names, ensuring cleaner and more predictable build output.'
---

Pretty Module Classnames is a Vite plugin that addresses CSS module naming issues. By default, Vite generates class names in the `__classname_hash` format, omitting the component name, which makes debugging more challenging. When trying to add the component name via `generateScopedName: '[name]__[local]_[hash:base64:5]'` configuration, you run into issues: React projects get an unwanted `-module` suffix, while Vue applications may break entirely with this configuration. This plugin solves these problems by ensuring consistent and clean class naming in the `ComponentName__classname_hash` format, regardless of your framework choice.

- [Github](https://github.com/teplostanski/vite-plugin-pretty-module-classnames)
- [Npmjs.com](https://www.npmjs.com/package/vite-plugin-pretty-module-classnames)