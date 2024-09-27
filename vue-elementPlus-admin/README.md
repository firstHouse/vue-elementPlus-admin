# vue-elementPlus-admin

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## 目录结构 mddir 在directoryList.md文件中生成目录结构

```ts
    |-- .vscode
    |-- node_modules 存放项目的所有依赖包，由 npm 或 yarn 自动生成和管理。
    |-- public 静态文件目录，里面的文件不会被 Webpack 处理，最终会原样复制到打包目录下。
    |   |-- favicon.ico 网站的图标。
    |-- src 源代码目录，存放应用的主要代码。
        |-- assets 存放静态资源，如图像、字体等。这些文件会由 Webpack 处理，可以通过相对路径引用。
        |-- components 存放 Vue 组件，每个组件都是一个独立的 .vue 文件。
        |-- composables
        |-- router 存放路由配置文件。
            |-- index.ts 路由的配置文件，定义了应用的路由规则。
        |-- styles
        |-- views 存放视图组件，通常对应路由，每个视图都是一个独立的 .vue 文件。
        |-- App.vue 根组件，整个应用的入口组件。
        |-- main.ts 应用的入口文件，负责创建 Vue 实例并挂载到 DOM 上。
        |-- composables.d.ts
    |-- .gitignore Git 忽略文件列表，指定哪些文件和目录不被包含在版本控制中。
    |-- env.d.ts
    |-- index.html 应用的主 HTML 文件，Vue CLI 会在构建时自动注入生成的静态资源链接。
    |-- package-lock.json 锁定安装的依赖版本，确保项目依赖的一致性。
    |-- package.json 项目的依赖、脚本和其他元数据。
    |-- README.md 项目的说明文件，通常用于描述项目、如何安装和使用等信息。
    |-- tsconfig.app.json 定义项目中其他文件的ts编译规则
    |-- tsconfig.json 指定了用来编译这个项目的根文件和编译选项
    |-- tsconfig.node.json 配置vite.config.ts文件的编译规则
    |-- vite.config.ts Vite 项目的配置文件,配置构建选项和插件
```
