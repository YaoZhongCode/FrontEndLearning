// 练习题 1：各种基础类型的检测与打印
// 在 main.js 中声明 4 个变量：
// 第一个变量存储你的年龄（数字类型）。
// 第二个变量存储你的姓名（字符串类型）。
// 第三个变量存储是否为学生（布尔值类型）。
// 第四个变量仅声明，不赋予任何初始值。
// 使用 console.log 和 typeof 运算符分别检测这 4 个变量的数据类型并输出结果。

let age = 19;
let myName = "ayi";
let isStudent = true;
let variable;
console.log(age);
console.log(myName);
console.log(isStudent);
console.log(variable);

console.log(typeof age);
console.log(typeof myName);
console.log(typeof isStudent);
console.log(typeof variable);


// 练习题 2：null 陷阱与返回值二次检测
// 声明一个名为 targetData 的变量，并将其显式赋值为 null。
// 使用 typeof 检测 targetData 的类型，并将检测结果保存在一个新的变量 typeResult 中。
// 使用 console.log 输出 typeResult 的值。
// 使用 console.log 输出 typeof typeResult 的检测结果。
// 在代码最下方以单行注释（//）的形式解答：为什么第 3 步和第 4 步的输出结果会不一样？
let targetData = null;
let typeResult = typeof targetData;
console.log(typeResult);
console.log(typeof typeResult);

//第三部输出 object 是因为 targetData 的类型是 object（其实是基础数据类型，null的历史遗留问题）
//第四部输出 string 是因为 typeof的返回值是 字符串类型
