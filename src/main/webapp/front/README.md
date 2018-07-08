# webpack环境配置
npm install webpack@1.15.0 -g

npm init -y

npm install webpack@1.15.0 --save-dev

npm install css-loader style-loader --save-dev

npm install extract-text-webpack-plugin@1.0.1 --save-dev

npm install html-webpack-plugin --save-dev

npm install html-loader --save-dev

npm install url-loader --save-dev

npm install file-loader --save-dev

npm install webpack-dev-server@1.6.5 -g

npm install webpack-dev-server@1.6.5 --save-dev

启动

webpack-dev-server --inline --port 8088

如若报错重新执行

npm install webpack-dev-server@1.6.5

不自动刷新

把IDEA的System Settings中的Synchronization下的Use "safe write"取消即可

改进启动，利用package.json

"scripts": {
    "dev": "WEBPACK_ENV=dev webpack-dev-server --inline --port 8088",
    "dev_win": "set WEBPACK_ENV=dev && webpack-dev-server --inline --port 8088",
    "dist": "WEBPACK_ENV=online webpack -p",
    "dist_win": "set WEBPACK_ENV=online && webpack -p"
  },

npm run dev_win