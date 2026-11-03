// ==========================================
// 第 77 课练习题：函数声明、表达式与返回值机制
// ==========================================

// 练习题 1：函数声明与基础计算返回值
// 1. 使用函数声明语法定义一个名为 multiply 的函数。
// 2. 该函数接收两个形参 num1 与 num2。
// 3. 函数内部计算这两个数字的乘积，并使用 return 关键字将乘积结果返回。
// 4. 在函数外部调用 multiply，传入数字 6 和 7，将返回值存入变量 product 中。
// 5. 使用 console.log 打印变量 product 的值。
function multiply(num1, num2){
    return num1 * num2;
}
let product = multiply(6, 7);
console.log(product);

// 练习题 2：函数表达式、默认参数与 return 提前拦截
// 1. 使用函数表达式语法定义一个常量函数 formatUserAccount。
// 2. 该函数接收两个形参：username（字符串类型）和 balance（数字类型，默认值为 0）。
// 3. 在函数内部进行逻辑校验：
//    - 若 balance 的值小于 0，立即 return 字符串 "账户余额异常"；
//    - 若 balance 大于等于 0，则拼接并 return 格式化字符串（例如: "用户: 张三, 余额: 100"）。
// 4. 分别进行两次调用测试：
//    a. 第一次调用：仅传入用户名字符串 "Alice"（使用默认余额），并将返回值存入变量 res1；
//    b. 第二次调用：传入用户名 "Bob" 与余额 -50，并将返回值存入变量 res2；
// 5. 使用 console.log 分别输出 res1 与 res2 的值。
const formatUserAccount = function(username, balance = 0){
    if(balance < 0){
        return "账户余额异常";
    }
    return "用户：" + username + "，余额：" + balance;
}
let res1 = formatUserAccount("Alice");
let res2 = formatUserAccount("Bob", -50);
console.log(res1);
console.log(res2);