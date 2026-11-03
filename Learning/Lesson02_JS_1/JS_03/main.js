// ==========================================
// 第 73 课练习题：运算符与严格相等
// ==========================================

// 练习题 1：隐式转换与字符串拼接验证
// 1. 声明一个变量 strNum，赋值为字符串 "100"。
// 2. 声明一个变量 realNum，赋值为数字 50。
// 3. 使用 + 运算符将 strNum 与 realNum 相加，并将结果存在变量 resultAdd 中。
// 4. 使用 - 运算符将 strNum 与 realNum 相减，并将结果存在变量 resultSub 中。
// 5. 使用 console.log 分别输出 resultAdd 和 resultSub 的值及其各自的 typeof 类型。
let strNum = "100";
let realNum = 50;
let resultAdd = strNum + realNum;
let resultSub = strNum - realNum;
console.log(resultAdd); //10050
console.log(resultSub); //50
console.log(typeof resultAdd); //string
console.log(typeof resultSub); //number

// 练习题 2：严格相等 (===) 校验拦截
// 1. 声明变量 inputAge 赋值为字符串 "18"。
// 2. 声明变量 targetAge 赋值为数字 18。
// 3. 使用 console.log 分别打印 inputAge == targetAge 与 inputAge === targetAge 的比较结果。
// 4. 在最下方用单行注释（//）说明：为什么实际开发中必须用 === 而不能用 ==。
let inputAge = "18";
let targetAge = 18;
console.log(inputAge == targetAge); //会输出true， 弱判断会将两边隐式转换成一样的类型进行比较（这里转化成了number类型）
console.log(inputAge === targetAge); //会输出false，类型不一致直接返回false

//开发中必须使用强判断（完全相等）进行判断，为了避免出现超出预期的结果