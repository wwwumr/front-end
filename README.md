# web

1.学习历程
2.语法笔记

##学习历程##

我首先选定react来学习，而学习的先导是NODE.JS及npm的使用

*******************************

当我在菜鸟教程上打开NODEJS的文章后，发现**版本号**相差很多，四点多的文档版本而最新版已有八点多。

此时我才意识到前端学习的困难所在，不是灵活的语法，繁复的框架，而是各种工具的更新速度。

之前老师提到的困难我终于亲身经历了。

**解决方法**：看nodejs及npm的官方文档。

*****************************

**经过查阅资料**，发现：

**v8引擎**：

>V8使用C++开发，并在谷歌浏览器中使用。在运行JavaScript之前，相比其它的JavaScript的引擎
转换成字节码或解释执行，V8将其编译成原生机器码（IA-32, x86-64, ARM, or MIPS CPUs），
并且使用了如内联缓存（inline caching）等方法来提高性能。有了这些功能，JavaScript程序在
V8引擎下的运行速度媲美二进制程序。

**nodejs**：

>Node.js是一个Javascript运行环境(runtime environment)，发布于2009年5月，由Ryan Dahl开发，
实质是对Chrome V8引擎进行了封装。Node.js 是一个让 JavaScript 运行在服务端的开发平台。
>
>Node.js对一些特殊用例进行优化，提供替代的API，使得V8在非浏览器环境下运行得更好。

因此发现nodejs对我目前的前端学习用处不很大，先闲置一旁。先来研究npm。

**npm**:

>用 npm 可以 . . .
>
>1.Adapt packages to your apps, or incorporate them as they are.
>
>2.Download standalone tools you can use right away.
>
>3.Run packages without downloading using npx.
>
>4.Share code with any npm user, any where.
>
>5.Restrict code to specific developers.
>
>6.Form virtual teams (orgs).
>
>7.Manage multiple versions of code and code dependencies.
>
>8.Update applications easily when underlying code is updated.
>
>9.Discover multiple ways to solve the same puzzle.
>
>10.Find other developers who are working on similar problems.
>
>......

鉴于npm的强大功能，随即我注册了npm账号，并在“popular library”下发现了react

之后我寻找npm的使用方法，在用“npm install -g react”安装了react后我没有在*/npm/node_modules中发现react的文件，却有很多杂乱的文件，与教程不符，我查阅了一段时间，没有得到很好的解释，于是转而继续研究react。

在搞了半天nodejs与npm后，我又回到了起点。

******************************************************

**网上有关于react特点的介绍**：

优点：

>1、React速度很快：它并不直接对DOM进行操作，引入了一个叫做虚拟DOM的概念，安插在javascript逻辑和实际的DOM之间，性能好。
>
>2、跨浏览器兼容：虚拟DOM帮助我们解决了跨浏览器问题，它为我们提供了标准化的API，甚至在IE8中都是没问题的。
>
>3、一切都是component：代码更加模块化，重用代码更容易，可维护性高。
>
>4、单向数据流：Flux是一个用于在JavaScript应用中创建单向数据层的架构，它随着React视图库的开发而被Facebook概念化。
>
>5、同构、纯粹的javascript：因为搜索引擎的爬虫程序依赖的是服务端响应而不是JavaScript的执行，预渲染你的应用有助于搜索引擎优化。
>
>6、兼容性好：比如使用RequireJS来加载和打包，而Browserify和Webpack适用于构建大型应用。它们使得那些艰难的任务不再让人望而生畏。

缺点:

>1、React并不是一个完整的框架，所以如果是大型项目想要一套完整的框架的话，基本都需要加上ReactRouter和Flux才能写大型应用。
>
>2、大概就是现在还太新了很难说将来有没有大的API变化，目前在大的稳定的项目上采用React的，我也就只知道有Yahoo的Email。
所以现在很少有批评React的声音，也许不是他真的就没有坑，而是那些坑还没有被踩出来而已。


******************************************************

**vue.js的特点**

优点：

>1.vue 是响应式的，在变更数据的同时就可以改变输出结果。
>
>2.vue 是一个轻巧、高性能、可组件化的MVVM库，同时拥有非常容易上手的API。
>
>3.vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。

缺点：

>1.生态不完整，按照需求去找库，大多都是react的。
>
>2.IDE支持不足。

*****************************************************

**Vue和React比较**：

**Vue**：

1.模版和渲染函数的弹性选择

2.简单的语法及项目创建

3.更快的选软速度和更小的体积

**React**:  

1.更适用于大型应用和更好的可测试性

2.同时适用web端和原生App

3.更大的生态圈带来更多的支持和工具