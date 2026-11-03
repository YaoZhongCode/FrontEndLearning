// ==========================================
// 第 78 课练习题：作用域链与闭包基础
// ==========================================

// 练习题 1：作用域链单向隔离与报错拦截
// 1. 在全局作用域声明一个变量 globalName 赋值为 "Global"。
// 2. 声明一个函数 testScope：
//    - 在 testScope 内部使用 let 声明变量 localName 赋值为 "Local"。
//    - 在 testScope 内部使用 console.log 打印 globalName。
// 3. 在 testScope 外部（全局作用域）依次进行：
//    a. 调用 testScope 函数；
//    b. 尝试使用 console.log 打印 localName；
// 4. 运行代码，将控制台针对 localName 的英文报错信息整行用单行注释（//）粘贴在打印语句下方。
let globalName = "Global";
function testScope(){
    let localName = "Local";
    console.log(globalName);
}
testScope();
//console.log(localName);
//Uncaught ReferenceError: localName is not defined at main.js:20:13

// 练习题 2：使用闭包实现私有金库（存储与消费）
// 1. 使用函数声明语法定义一个名为 createVault 的函数。
// 2. 在 createVault 内部声明一个局部变量 balance 初始化为数字 500。
// 3. 在 createVault 内部 return 一个匿名函数：
//    - 该匿名函数接收一个形参 spendAmount（数字类型）；
//    - 检查 balance - spendAmount 是否小于 0：
//      - 若小于 0， return 字符串 "余额不足"；
//      - 若大于等于 0，让 balance 减去 spendAmount，并 return 剩余的 balance 数字。
// 4. 在外部调用 createVault()，并将返回的函数存在常量 myVault 中。
// 5. 使用 console.log 依次测试：
//    a. 第一次调用 myVault(200)，输出返回值；
//    b. 第二次调用 myVault(400)，输出返回值。
function createVault(){
    let balance = 500;
    return function(spendAmount){
        if(balance - spendAmount < 0){
            return "余额不足";
        }
        balance -= spendAmount;
        return balance;
    }
}
const myVault = createVault();
console.log(myVault(200)); // 输出 300
console.log(myVault(400)); // 输出 余额不足