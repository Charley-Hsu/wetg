### 安装使用

#### 安装（更新） wepy 命令行工具。

```
npm install wepy-cli -g
```

#### 生成开发目录(已创建discover目录)

```
wepy new myproject
```
#### 安装开发依赖(开发目录内)

```
npm install
```
#### 开发实时编译(开发目录内)

```
wepy build --watch
```

#### 开发者工具使用

1. 使用[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=1496743667)新建项目，本地开发选择`dist`目录
2. `微信开发者工具`-->项目-->关闭ES6转ES5，开启开发环境不校验请求域名、TSL版本以及HTTPS证书

#### TG发现频道
1. 集成小程序版weui `sytle文件夹中`
2. 暂时去除eslint规范检测
3. 去除项目无关内容目录
4. 增加文件上传忽略文件内容
5. 默认进入demo页,启动页可在app.wpy中修改
6. master分支暂时为基础结构版本，修改请详细注明
7. 开发请重新申请分支

### 项目目录树(开发目录起)
```
    dist               
    node_modules
    src
        components
            demo.wpy
        pages
            demo.wpy
        images
        style
        app.wpy
    package.json
    wepy.config.js
```
### Links

[Documentation](https://wepyjs.github.io/wepy/)  [Changelog](https://wepyjs.github.io/wepy/#/CHANGELOG)  [Contributing](https://github.com/wepyjs/wepy/blob/master/CONTRIBUTING.md)  [License MIT](https://github.com/wepyjs/wepy/blob/master/LICENSE)

