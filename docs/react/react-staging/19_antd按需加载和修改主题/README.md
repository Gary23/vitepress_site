# antd按需加载和修改主题

1. antd基本使用
   - 安装：npm i antd@4
   - import { Button } from antd
   - import 'antd/dist/antd.css'，会引入所有组件的样式，可以优化为按需加载


2. css优化按需引入：

   - 需要安装npm包：@craco/craco 脚手架配置、babel-plugin-import 按需引入css
   - 安装了craco后，需要修改package.json的启动命令，scripts里的命令start、build、test react-scripts 改为 craco
    ```json
    "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "react-scripts eject"
    },
    ```
   - 根目录增加配置文件craco.config.js，配置脚手架具体的修改规则
    ```js
    module.exports = {
      babel: {
        plugins: [
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              style: 'css'  //设置为true即是less 这里用的是css
            }
          ]
        ]
      },
    };
    ```

3. 自定义主题：
   - 安装 craco-less
   - craco.config.js 修改
    ```js
    const CracoLessPlugin = require('craco-less');

    module.exports = {
      babel: {//支持装饰器
        plugins: [
          [
            "import",
            {
              libraryName: "antd",
              libraryDirectory: "es",
              style: true  //设置为true即是less 这里用的是css
            }
          ]
        ]
      },
      plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
              },
            },
          },
        },
      ],
    };
    ```

