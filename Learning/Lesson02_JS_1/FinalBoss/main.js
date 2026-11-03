// ==========================================
// 第 76 课：【模块一 Boss 挑战】数据校验与累加引擎
// ==========================================

// 业务背景：
// 你需要编写一段简易的数据处理引擎，对输入的初始状态进行类型校验，
// 随后在一个限定范围内进行过滤累加计算，并根据最终结果生成状态报告。

// 需求规范：

// 1. 初始化校验：
//    - 声明一个常量 maxLimit 赋值为数字 100。
//    - 声明一个变量 rawData 赋值为字符串 "50"。
//    - 使用 typeof 检测 rawData 的数据类型。
//    - 使用严格相等（===）校验：如果 rawData 的类型不是 "number"，
//      则在控制台打印 "数据类型异常：必须为数字"，并将变量 statusFlag 标记为 false；
//      如果是 "number"，则打印 "数据类型校验通过"，并将 statusFlag 标记为 true。
//    （注：当前 rawData 为字符串 "50"，故应触发类型异常逻辑）。
const maxLimit = 100;
let rawData = "50";
let statusFlag;
//let typeResult = typeof rawData;
if(typeof(rawData) !== "number"){
    console.log("数据类型异常，必须为数字");
    statusFlag = false;
}else{
    console.log("数据类型验证通过");
    statusFlag = true;
}

// 2. 数据修正与条件循环累加：
//    - 将 rawData 的值手动重构为数字 10（直接重新赋值即可）。
//    - 再次校验 rawData 是否为数字类型，校验通过后开启累加计算。
//    - 声明累加器变量 totalSum 初始化为数字 0。
//    - 使用 for 循环遍历数字 1 到 20（包含 20）：
//      a. 若当前数字是 4 的倍数（使用 % 运算符判断），使用 continue 跳过本次累加；
//      b. 将其余数字累加进 totalSum 中；
//      c. 在每次累加后检查：若 totalSum 超过 maxLimit（100），
//         立即输出 "达到上限，中途终止"，并使用 break 彻底跳出循环。
rawData = 10;
let totalSum = 0;
if(typeof(rawData) === "number"){
    console.log("数据类型验证通过");
    statusFlag = true;
}else{
    console.log("数据类型异常，必须为数字");
    statusFlag = false;
}
if(statusFlag){
    for(let i = 1; i <= 20; i++){
        if(i % 4 === 0){
            continue;
        }
        totalSum += i;
        if(totalSum > maxLimit){
            console.log("达到上限，中途终止");
            break;
        }
    }
}


// 3. 结果评价与分支判断：
//    - 循环结束后，使用三元运算符判断 totalSum 是否大于等于 50：
//      若成立，将字符串 "PASS" 存入变量 evaluation；若不成立，存入 "FAIL"。
//    - 使用 switch...case 结构匹配 evaluation 的值：
//      - 匹配 "PASS"：控制台输出 "最终结果：达标，总计为: " 拼接 totalSum 的值；
//      - 匹配 "FAIL"：控制台输出 "最终结果：未达标，总计为: " 拼接 totalSum 的值；
//      - default：控制台输出 "未知评估状态"。
let evaluation = totalSum >= 50 ? "PASS" : "FAIL";
let outPut = "最终结果：";
switch(evaluation){
    case "PASS":
        outPut += "达标";
        break;
    case "FAIL":
        outPut += "未达标";
        break;
    default:
        outPut = "未知评估状态";
}
console.log(outPut + "，总计为： " + totalSum);