// 练习题 1：变量声明与值更替
// 创建 index.html，并在 <body> 最底部通过 <script> 标签引入外部文件 main.js。
// 在 main.js 中，使用 let 关键字声明一个名为 score 的变量，初始赋值为数字 50。
// 使用 console.log 输出 score 的值。
// 将 score 的值修改为数字 80。
// 再次使用 console.log 输出修改后的 score 值。

let score = 50;
console.log(score);
score = 80;
console.log(score);


// 练习题 2：常量绑定与报错捕捉
// 在 main.js 中，使用 const 关键字声明一个名为 siteName 的常量，初始赋值为字符串 "我的学习博客"。
// 使用 console.log 输出 siteName 的值。
// 在下一行尝试将 siteName 重新赋值为字符串 "新博客名称"。
// 在浏览器中运行页面，打开控制台（Console），将控制台抛出的英文报错信息完整复制下来，以单行注释（//）的形式粘贴在试图重新赋值的那行代码下方。

const siteName = "我的学习博客";
console.log(siteName);
//siteName = "新博客名称"; 
//main.js:22 Uncaught TypeError: Assignment to constant variable. at main.js:22:10
//（匿名） @ main.js:22