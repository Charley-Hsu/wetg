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

1. 使用`微信开发者工具`新建项目，本地开发选择`dist`目录。
2. `微信开发者工具`-->项目-->关闭ES6转ES5。<font style="color:red">重要：漏掉此项会运行报错。</font>
3. 项目根目录运行`wepy build --watch`，开启实时编译。

#### TG发现频道测试对此框架修改
1. 集成小程序版weui `sytle文件夹中`
2. 暂时去除eslint规范检测
3. 去除项目无关内容目录
4. 增加文件上传忽略文件内容
5. 目录树待更新~

### 特性：

* 类Vue开发风格
* 支持自定义组件开发
* 支持引入NPM包
* 支持Promise
* 支持ES2015+特性，如Async Functions
* 支持多种编译器，Less/Sass/Styus、Babel/Typescript、Pug
* 支持多种插件处理，文件压缩，图片压缩，内容替换等
* 支持 Sourcemap，ESLint等
* 小程序细节优化，如请求列队，事件优化等

### Links

[Documentation](https://wepyjs.github.io/wepy/)

[Changelog](https://wepyjs.github.io/wepy/#/CHANGELOG)

[Contributing](https://github.com/wepyjs/wepy/blob/master/CONTRIBUTING.md)

[License MIT](https://github.com/wepyjs/wepy/blob/master/LICENSE)

