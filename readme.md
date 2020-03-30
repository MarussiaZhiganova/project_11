 1. Учебный проект, посвященный сборке кода при помощи специальной программы - Webpack, а также разбиение кода на модули.
 2. Демо-версия:
 https://github.com/MarussiaZhiganova/project_11.github.io
 3. Версия: 0.0.1
 4.  Краткая информация о проекте.
ПО для выполнения работы:  
<li>   Git   <li>   Webpack   <li>   NPM-пакеты:

  сборка develop:  
@babel/cli @babel/core @babel/preset-env autoprefixer babel-loader cross-env css-loader cssnano file-loader gh-pages html-loader html-webpack-plugin@3.2.0 image-webpack-loader lodash mini-css-extract-plugin postcss-loader resolve-url resolve-url-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-md5-hash
сборка build: 

babel-polyfill core-js optimize-css-assets-webpack-plugin resolve-cwd

 Инструкция по сборке:  
<li>  
точка входа: index.js  
<li>  
команда npm run build запускает сборку build и собирает проект в папке dist  
<li>  
команда npm run dev запускает сборку develop и открывает проект на локальном сервере по адресу localhost:8080  
<li>  
команда npm run deploy развёртывает проект на сервере gh-pages
