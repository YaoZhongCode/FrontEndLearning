// ==========================================
// 第 79 课练习题：箭头函数语法与隐式返回
// ==========================================

// 练习题 1：基础箭头函数与隐式返回重构
// 1. 使用箭头函数语法声明一个常量 formatPrice。
//    - 接收一个形参 rawPrice（数字类型）；
//    - 使用单行隐式 return 语法，直接返回拼接后的字符串（格式为："¥" 拼接 rawPrice）；
//    - 要求省略形参括号与大括号。
// 2. 使用箭头函数语法声明一个常量 computeArea。
//    - 接收两个形参 width 与 height；
//    - 使用单行隐式 return 语法，直接返回两者的乘积。
// 3. 使用 console.log 分别打印 formatPrice(99) 与 computeArea(5, 8) 的执行结果。
const formatPrice = rawPrice => "￥" + rawPrice;
const computeArea = (width, height) => width * height;
console.log(formatPrice(99));
console.log(computeArea(5, 8));

// 练习题 2：箭头函数与高阶逻辑拦截
// 1. 使用箭头函数声明一个常量 validateScore。
//    - 接收一个形参 score（数字类型）；
//    - 函数体内部使用标准大括号语法（非隐式 return）：
//      a. 若 score 小于 0 或大于 100，使用 return 返回字符串 "无效分值"；
//      b. 若 score 大于等于 60，使用 return 返回字符串 "及格"；
//      c. 其余情况 return 字符串 "不及格"。
// 2. 声明一个常量 testScore = validateScore。
// 3. 使用 console.log 依次测试并打印 validateScore(-5)、validateScore(85) 与 validateScore(40) 的结果。
const validateScore = score =>{
    if(score < 0 || score > 100){
        return "无效分值";
    }
    if(score >= 60){
        return "及格";
    }
    return "不及格";
}

const testScore = validateScore;
// console.log(validateScore(-5));
// console.log(validateScore(85));
// console.log(validateScore(40));
console.log(testScore(-5));
console.log(testScore(85));
console.log(testScore(40));