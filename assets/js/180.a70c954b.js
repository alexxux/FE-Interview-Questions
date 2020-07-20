(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{672:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[n("code",[t._v("webpack")]),t._v("是一个打包模块化 "),n("code",[t._v("JavaScript")]),t._v(" 的工具，在 "),n("code",[t._v("webpack")]),t._v("里一切文件皆模块，通过 "),n("code",[t._v("Loader")]),t._v(" 转换文件，通过 "),n("code",[t._v("Plugin")]),t._v(" 注入钩子，最后输出由多个模块组合成的文件。"),n("code",[t._v("webpack")]),t._v("专注于构建模块化项目。")])]),t._v(" "),n("h3",{attrs:{id:"简单版打包模型步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单版打包模型步骤"}},[t._v("#")]),t._v(" 简单版打包模型步骤")]),t._v(" "),n("blockquote",[n("p",[t._v("我们先从简单的入手看，当 webpack 的配置只有一个出口时，不考虑分包的情况，其实我们只得到了一个bundle.js的文件，这个文件里包含了我们所有用到的js模块，可以直接被加载执行。那么，我可以分析一下它的打包思路，大概有以下4步：")])]),t._v(" "),n("ul",[n("li",[t._v("利用"),n("code",[t._v("babel")]),t._v("完成代码转换及解析,并生成单个文件的依赖模块"),n("code",[t._v("Map")])]),t._v(" "),n("li",[t._v("从入口开始递归分析，并生成整个项目的依赖图谱")]),t._v(" "),n("li",[t._v("将各个引用模块打包为一个立即执行函数")]),t._v(" "),n("li",[t._v("将最终的"),n("code",[t._v("bundle")]),t._v("文件写入"),n("code",[t._v("bundle.js")]),t._v("中")])]),t._v(" "),n("h3",{attrs:{id:"单个文件的依赖模块map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单个文件的依赖模块map"}},[t._v("#")]),t._v(" 单个文件的依赖模块Map")]),t._v(" "),n("ul",[n("li",[t._v("我们会可以使用这几个包：\n"),n("ul",[n("li",[n("code",[t._v("@babel/parser")]),t._v("：负责将代码解析为抽象语法树")]),t._v(" "),n("li",[n("code",[t._v("@babel/traverse")]),t._v("：遍历抽象语法树的工具，我们可以在语法树中解析特定的节点，然后做一些操作，如"),n("code",[t._v("ImportDeclaratio")]),t._v("n获取通过"),n("code",[t._v("import")]),t._v("引入的模块,"),n("code",[t._v("FunctionDeclaration")]),t._v("获取函数")]),t._v(" "),n("li",[n("code",[t._v("@babel/core")]),t._v("：代码转换，如ES6的代码转为ES5的模式")])])])]),t._v(" "),n("blockquote",[n("p",[t._v("由这几个模块的作用，其实已经可以推断出应该怎样获取单个文件的依赖模块了，转为"),n("code",[t._v("Ast")]),t._v("->遍历"),n("code",[t._v("Ast")]),t._v("->调用"),n("code",[t._v("ImportDeclaration")]),t._v("。代码如下")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exportDependencies.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parser "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" traverse "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/traverse'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" babel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exportDependencies")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转为Ast")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ast "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parser"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sourceType "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//babel官方规定必须加这个参数，不然无法识别ES Module")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dependencies "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历AST抽象语法树")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用ImportDeclaration获取通过import引入的模块")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ImportDeclaration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dirname "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newFile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存所依赖的模块")]),t._v("\n            dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newFile\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过@babel/core和@babel/preset-env进行代码的转换")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" babel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformFromAst")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        presets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-env"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该文件名")]),t._v("\n        dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该文件所依赖的模块集合(键值对存储)")]),t._v("\n        code"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//转换后的代码")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exportDependencies\n")])])]),n("p",[t._v("可以跑一个例子:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//info.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" a\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" info "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.js'")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//testExport.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exportDependencies "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exportDependencies'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportDependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("单个文件的依赖模块Map")])]),t._v(" "),n("blockquote",[n("p",[t._v("有了获取单个文件依赖的基础，我们就可以在这基础上，进一步得出整个项目的模块依赖图谱了。首先，从入口开始计算，得到"),n("code",[t._v("entryMap")]),t._v("，然后遍历"),n("code",[t._v("entryMap.dependencies")]),t._v(",取出其"),n("code",[t._v("value")]),t._v("(即依赖的模块的路径)，然后再获取这个依赖模块的依赖图谱，以此类推递归下去即可，代码如下：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exportDependencies "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exportDependencies'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//entry为入口文件路径")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exportGraph")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" entryModule "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportDependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graphArray "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("entryModule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" graphArray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" item "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graphArray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拿到文件所依赖的模块集合,dependencies的值参考exportDependencies")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" dependencies "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            graphArray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportDependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关键代码，目的是将入口模块及其所有相关的模块放入数组")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//接下来生成图谱")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graph "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    graphArray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以看出，graph其实是 文件路径名：文件内容 的集合")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" graph\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exportGraph\n")])])]),n("h3",{attrs:{id:"输出立即执行函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#输出立即执行函数"}},[t._v("#")]),t._v(" 输出立即执行函数")]),t._v(" "),n("blockquote",[n("p",[t._v("首先，我们的代码被加载到页面中的时候，是需要立即执行的。所以输出的"),n("code",[t._v("bundle.js")]),t._v("实质上要是一个立即执行函数。我们主要注意以下几点：")])]),t._v(" "),n("ul",[n("li",[t._v("我们写模块的时候，用的是 "),n("code",[t._v("import/export")]),t._v(".经转换后,变成了"),n("code",[t._v("require/exports")])]),t._v(" "),n("li",[t._v("我们要让"),n("code",[t._v("require/exports")]),t._v("能正常运行，那么我们得定义这两个东西，并加到"),n("code",[t._v("bundle.js")]),t._v("里")]),t._v(" "),n("li",[t._v("在依赖图谱里，代码都成了字符串。要执行，可以使用"),n("code",[t._v("eval")])])]),t._v(" "),n("blockquote",[n("p",[t._v("因此，我们要做这些工作：")])]),t._v(" "),n("ul",[n("li",[t._v("定义一个"),n("code",[t._v("require")]),t._v("函数，"),n("code",[t._v("require")]),t._v("函数的本质是执行一个模块的代码，然后将相应变量挂载到"),n("code",[t._v("exports")]),t._v("对象上")]),t._v(" "),n("li",[t._v("获取整个项目的依赖图谱，从入口开始，调用"),n("code",[t._v("require")]),t._v("方法。完整代码如下：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exportGraph "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exportGraph'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写入文件，可以用fs.writeFileSync等方法，写入到output.path中")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exportBundle "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exportBundle'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exportCode")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" graph "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportGraph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportBundle")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n        (function(graph) {\n            //require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上\n            function require(module) {\n                //localRequire的本质是拿到依赖包的exports变量\n                function localRequire(relativePath) {\n                    return require(graph[module].dependencies[relativePath]);\n                }\n                var exports = {};\n                (function(require, exports, code) {\n                    eval(code);\n                })(localRequire, exports, graph[module].code);\n                return exports;\n                //函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁\n            }\n            require('")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("')\n        })(")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("graph"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" exportCode\n")])])]),n("blockquote",[n("p",[t._v("至此，简单打包完成。贴一下我跑的demo的结果。"),n("code",[t._v("bundle.js")]),t._v("的文件内容为：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("graph")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("module")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//localRequire的本质是拿到依赖包的exports变量")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("localRequire")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("relativePath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("returnrequire")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dependencies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("relativePath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localRequire"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//函数返回指向局部变量，形成闭包，exports变量在函数执行后不会被摧毁")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./info.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/info.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"use strict\\";\\n\\nvar _info = _interopRequireDefault(require(\\"./info.js\\"));\\n\\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \\"default\\": obj }; }\\n\\nconsole.log(_info[\\"default\\"]);"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/info.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./name.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/name.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"use strict\\";\\n\\nObject.defineProperty(exports, \\"__esModule\\", {\\n  value: true\\n});\\nexports[\\"default\\"] = void 0;\\n\\nvar _name = require(\\"./name.js\\");\\n\\nvar info = \\"\\".concat(_name.name, \\" is beautiful\\");\\nvar _default = info;\\nexports[\\"default\\"] = _default;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/name.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"use strict\\";\\n\\nObject.defineProperty(exports, \\"__esModule\\", {\\n  value: true\\n});\\nexports.name = void 0;\\nvar name = \'winty\';\\nexports.name = name;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"webpack打包流程概括"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包流程概括"}},[t._v("#")]),t._v(" webpack打包流程概括")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("webpack")]),t._v("的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("初始化参")])]),t._v(" "),n("li",[n("strong",[t._v("开始编译")]),t._v(" 用上一步得到的参数初始Compiler对象，加载所有配置的插件，通 过执行对象的run方法开始执行编译")]),t._v(" "),n("li",[n("strong",[t._v("确定入口")]),t._v(" 根据配置中的 Entry 找出所有入口文件")]),t._v(" "),n("li",[n("strong",[t._v("编译模块")]),t._v(" 从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理")]),t._v(" "),n("li",[n("strong",[t._v("完成模块编译")]),t._v(" 在经过第4步使用 Loader 翻译完所有模块后， 得到了每个模块被编译后的最终内容及它们之间的依赖关系")]),t._v(" "),n("li",[n("strong",[t._v("输出资源")]),t._v(" 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk,再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会")]),t._v(" "),n("li",[n("strong",[t._v("输出完成")]),t._v(" 在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。")])]),t._v(" "),n("blockquote",[n("p",[t._v("在以上过程中， "),n("code",[t._v("Webpack")]),t._v(" 会在特定的时间点广播特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，井且插件可以调用 "),n("code",[t._v("Webpack")]),t._v(" 提供的 "),n("code",[t._v("API")]),t._v(" 改变 "),n("code",[t._v("Webpack")]),t._v(" 的运行结果。其实以上7个步骤，可以简单归纳为初始化、编译、输出，三个过程，而这个过程其实就是前面说的基本模型的扩展。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);