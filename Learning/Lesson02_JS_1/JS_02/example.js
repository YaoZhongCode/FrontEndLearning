// 1. 基本数据类型声明
let count = 42;               // Number
let username = "張三";         // String
let isLogged = true;          // Boolean
let unassigned;               // Undefined (只声明，未赋值)
let emptyValue = null;        // Null

// 2. 使用 typeof 查看检测结果
console.log(typeof count);      // 输出: "number"
console.log(typeof username);   // 输出: "string"
console.log(typeof isLogged);   // 输出: "boolean"
console.log(typeof unassigned); // 输出: "undefined"

// 3. 特殊情况：null 的 typeof 检测结果
console.log(typeof emptyValue); // 输出: "object" （注意：这是历史 Bug，实际上 null 是基本数据类型）

// 4. typeof 返回值本身是一个字符串
let result = typeof count; 
console.log(result);            // 输出: "number"
console.log(typeof result);     // 输出: "string" (因为 "number" 本身是个字符串)