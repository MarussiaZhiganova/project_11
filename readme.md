 - Учебный проект, посвященный сборке кода при помощи специальной программы - Webpack, а также разбиение кода на модули.
 - Демо-версия:
 https://github.com/MarussiaZhiganova/project_11.github.io
 - Версия: 0.0.1
 - Настройка Webpack:
 Настройте два режима сборки: development и production. Сделать это можно используя  **env**  _—_  _environment variables_  (от англ. «переменные окружения»). Они доступны из любой части программы и пригодятся нам в следующем задании. Для того, чтобы настроить их, нужно сделать следующее:
    -   если вы используете Windows, установите пакет из npm, для того чтобы использовать глобальные переменные:
`npm install --save-dev cross-env`
-   первое, что нужно сделать — это подключить и настроить плагин:
`// webpack.config.js
new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
})`
-   внутри файла  _package.json, добавьте_  NODE_ENV **в скрипты, вот так:
`// package.json
"scripts": {
        "build": "NODE_ENV=production rimraf dist && webpack --mode production",
        "dev": "NODE_ENV=development webpack-dev-server --mode development --open --watch",
        "deploy": "NODE_ENV=production gh-pages -d dist"
     }`
-   если пользуетесь Windows, то настройка немного отличается:
`// package.json
"scripts": {
        "build": "rimraf dist && cross-env NODE_ENV=production webpack --mode production",
        "dev": "cross-env NODE_ENV=development webpack-dev-server --mode development --open --watch",
        "deploy": "cross-env NODE_ENV=production gh-pages -d dist"
     }`

