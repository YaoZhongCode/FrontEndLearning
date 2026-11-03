// ==========================================
// 第 74 课练习题：流程控制结构
// ==========================================

// 练习题 1：多条件分流与三元运算符简化
// 1. 声明变量 userRole 赋值为字符串 "admin"。
// 2. 使用 if...else if...else 结构进行判断：
//    - 若 userRole 为 "admin"，输出 "管理员权限"；
//    - 若 userRole 为 "vip"，输出 "VIP会员权限"；
//    - 其他情况统一输出 "普通用户权限"。
// 3. 声明变量 isVip 赋值为布尔值 true。
// 4. 使用三元运算符判断 isVip：若为 true 则将字符串 "折扣已生效" 存入变量 discountStatus，否则存入 "无折扣"。
// 5. 使用 console.log 打印 discountStatus 的值。
let userRole = "admin";
if(userRole === "admin"){
    console.log("管理员权限");
}else if(userRole === "vip"){
    console.log("VIP会员权限");
}else{
    console.log("普通用户权限");
}
let isVip = true;
let discountStatus = isVip === true ? "折扣已生效" : "无折扣";
console.log(discountStatus);

// 练习题 2：switch 精确匹配与穿透防范
// 1. 声明变量 statusCode 赋值为数字 404。
// 2. 使用 switch...case 结构校验 statusCode：
//    - 匹配数字 200：输出 "请求成功"；
//    - 匹配数字 404：输出 "未找到资源"；
//    - 匹配数字 500：输出 "服务器错误"；
//    - default：输出 "未知状态码"。
// 3. 在 404 分支下方故意漏写 break，运行代码观察控制台输出，并将异常的输出结果以单行注释（//）形式标注在代码下方；
// 4. 观察完毕后，补全 break，恢复正确的跳出逻辑。
let statusCode = 404;
// let result = "";
// switch(statusCode){
    // case 200:
    //     result = "请求成功";
    //     break;
    // case 404:
    //     result = "未找到资源";
    //     break;
    // case 500:
    //     result = "服务器错误";
    //     break;
    // default:
    //     result = "未知状态码";
// }
// console.log(result);

switch(statusCode){
    case 200:
        console.log("请求成功");
        break;
    case 404:
        console.log("未找到资源");
        break;
    case 500:
        console.log("服务器错误");
        break;
    default:
        console.log("未知状态码");
}

//如果404不写break，会连着输出两个
//未找到资源
//服务器错误