module.exports = {
  'extends': ['taro/react'],
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'for-direction': 'error', // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
    'no-await-in-loop': 'off',// 禁止将 await 写在循环里
    'no-compare-neg-zero': 'error',// 禁止与负零进行比较
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空的字符集 []
    'no-extra-parens': ['error', 'functions'], // 禁止函数表达式中出现多余的括号
    'no-extra-semi': 'error', // 禁止出现多余的分号
    'no-func-assign': 'error', // 禁止将一个函数声明重新赋值
    'no-inner-declarations': ['error', 'both'],// 禁止在 if 代码块内出现函数声明
    'no-regex-spaces': 'error', // 禁止在正则表达式中出现连续的空格
    'no-sparse-arrays': 'error',// 禁止在数组中出现连续的逗号
    'no-unreachable': 'error', // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-template-curly-in-string': 'error',// 禁止出现难以理解的多行表达式
    'use-isnan': 'error',// 必须使用 isNaN(foo)
    'dot-location': ['error', 'property'], // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    'no-alert': 'error',//禁止使用alert
    'no-extend-native': 'error', // 禁止修改原生对象
    'no-global-assign': 'error',// 禁止对全局变量赋值
    'no-return-assign': [
      'error',
      'always'
    ],// 禁止在 return 语句里赋值
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],// 关键字前后必须有空格

    'key-spacing': [0, {
      'beforeColon': false,
      'afterColon': true
    }],//对象字面量中冒号的前后空格
    'max-depth': [
      'error',
      5
    ], // 代码块嵌套的深度禁止超过 5 层
    'max-params': [
      'error',
      6
    ],  // 函数的参数禁止超过 6 个
    'newline-per-chained-call': 'error',//链式调用必须换行
    'no-multiple-empty-lines': ['error', {
      'max': 3,
      'maxEOF': 1,
      'maxBOF': 1
    }],// 禁止出现超过三行的连续空行
    'no-whitespace-before-property': 'error', // 禁止属性前有空格
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        'overrides': {
          'while': 'below'
        }
      }
    ],// 禁止 if 后面不加大括号而写两行代码
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
        'consistent': true
      }
    ],// 大括号内的首尾必须有换行
    // 'object-property-newline': 'error', // 对象字面量内的属性每行必须只有一个

    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': ['ConditionalExpression']
      }
    ],
    'quotes': [2, 'single'], // 单引号
    'no-debugger': 0, // 不禁用debugger
    'no-var': 0, // 对var警告
    'semi': 0, // 不强制使用分号
    'no-irregular-whitespace': 0, // 不规则的空白不允许
    'no-trailing-spaces': 2, // 一行结束后面有空格就发出警告
    'eol-last': 0, // 文件以单一的换行符结束
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'after-used'
    }], // 不能有声明后未被使用的变量或参数
    'camelcase': 0, // 强制驼峰法命名
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2], // 验证JSX中的props缩进
  }
};
