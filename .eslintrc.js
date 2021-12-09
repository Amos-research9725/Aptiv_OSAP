module.exports = {
    root: true, //指定配置文件根目录：表示当前文件为eslint的根配置文件，逐层查找时无需往更上一级的文件目录中进行搜索

    parser: 'vue-eslint-parser', //指定eslint解析器：babel-eslint是围绕Babel解析器的包装器使其与ESLint兼容；可能值espree、esprima

    parserOptions: { //eslint解析器配置项

        sourceType: "module", //指定js的导入方式，module是指通过模块导入，默认值为script(表示通过script标签引入)

    },

    env: { //运行环境极其局全局变量

        browser: true, //浏览器环境
        node: true,
        es6: true

    },

    /* 自定义规则

     * 单条规则语法："规则名称":[规则值，规则配置] 或者 "规则名称":值

     * 基本规则值：off/0:关闭规则(不满足规则也不会提醒或者抛出异常)； warn/1:开启警告规则(若不满足规则不会影响代码)；                                   error/2:开启错误规则(若不满足规则会退出代码)

    */

    rule: {
        'no-console': 'off',
        'comma-dangle': [2, 'nerver'] //禁止使用拖尾逗号

    }

}