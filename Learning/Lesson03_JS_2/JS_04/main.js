// ==========================================
// 第 80 课练习题：对象属性操作与可选链运算符
// ==========================================

// 练习题 1：对象属性增删改与动态变量读取
// 1. 声明一个常量 player，赋值为一个对象，包含属性：
//    - nickname: "Shadow"
//    - level: 10
//    - "hero-class": "Warrior"
// 2. 将 player 的 level 属性修改更新为 11。
// 3. 为 player 新增一个属性 isOnline，赋值为 true。
// 4. 使用 delete 关键字删除 player 对象的 "hero-class" 属性。
// 5. 声明一个常量 keyTarget = "nickname"。使用方括号语法通过 keyTarget 变量读取 player 中的名字并用 console.log 输出。
// 6. 使用 console.log 打印修改后的整个 player 对象。
const player={
    nickname: "Shadow",
    level: 10,
    "hero-class": "Warrior"
}
player.level = 11;
player.isOnline = true;
delete player["hero-class"];
const keyTarget = "nickname";
console.log(player[keyTarget]);
console.log(player);

// 练习题 2：可选链运算符（?.）崩盘防护
// 1. 声明一个常量 userConfig 赋值为一个空对象 {}。
// 2. 尝试读取 userConfig 内部的 settings 对象的 theme 属性：
//    - 要求必须使用可选链运算符（?.）进行安全读取，并将读取结果存入变量 currentTheme；
//    - 使用 console.log 输出 currentTheme 的值（应输出 undefined 且无崩溃报错）。
// 3. 给 userConfig 对象动态添加 settings 属性，赋值为对象 { theme: "dark" }。
// 4. 再次使用可选链运算符（?.）安全读取 userConfig.settings 的 theme 属性，存入变量 newTheme。
// 5. 使用 console.log 打印变量 newTheme 的值（应输出 "dark"）。
const userConfig={}
let currentTheme = userConfig?.settings?.theme;
console.log(currentTheme);
userConfig.settings={theme: "dark"}
let newTheme = userConfig?.settings.theme;
console.log(newTheme);
