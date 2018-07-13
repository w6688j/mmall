# 后台管理系统安装和启动方式

## 环境依赖:
```
安装 nodejs v8.11.3版本
安装 yarn1.7.0
```

## 项目初始化方式:
```
安装依赖包： yarn init
yarn add webpack@3.10.0 --dev
项目内局部运行（win）.\node_modules\.bin\webpack

html处理插件
yarn add html-webpack-plugin@2.30.1 --dev

ES6解释插件
yarn add babel-core@6.26.0 babel-preset-env@1.6.1 babel-loader@7.1.2 --dev

React处理插件
yarn add babel-preset-react@6.24.1 --dev
yarn add react@16.2.0 react-dom@16.2.0 

CSS处理插件
yarn add style-loader@0.19.1 css-loader@0.28.8 --dev

分离CSS文件插件
yarn add extract-text-webpack-plugin@3.0.2 --dev

Sass插件
yarn add node-sass@4.7.2 --dev
yarn add sass-loader@6.0.6 --dev

图片处理插件
yarn add file-loader@1.1.6 url-loader@0.6.2 --dev

安装webpack-dev-server
yarn add webpack-dev-server@2.9.7 --dev

安装react-router
yarn add react-router-dom@4.2.2

安装分页插件
yarn add rc-pagination@1.15.1

```

## 开发模式运行:
```

package中添加
"scripts": {
    "dev": "node_modules/.bin/webpack-dev-server",
    "dev_win": "set WEBPACK_ENV=dev && node_modules/.bin/webpack-dev-server",
    "dist": "WEBPACK_ENV=online node_modules/.bin/webpack -p",
    "dist_win": "set WEBPACK_ENV=online && node_modules/.bin/webpack -p"
}

yarn run dev_win
```

## 线上打包:
Mac / Linux系统：
```
yarn run dist
```
Windows系统：
```
yarn run dist_win
```
