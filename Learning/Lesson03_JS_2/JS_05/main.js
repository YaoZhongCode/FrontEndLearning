// ==========================================
// 第 81 课练习题：数组迭代四大方法实战（共 4 题）
// ==========================================

// 练习题 1：map 加工 - 商品数据提取与格式化
// 1. 声明一个常量 rawPrices 赋值为数组 [100, 200, 300]。
// 2. 使用 map 方法遍历 rawPrices，将每一个数字加工为带有货币符号的字符串（例如：数字 100 加工为 "¥100"）。
// 3. 将 map 生成的新数组存入常量 formattedPrices。
// 4. 使用 console.log 打印 formattedPrices 的值。
const rawPrices = [100, 200, 300];
const formattedPrices = rawPrices.map(item => {
    return "￥" + item;
});
console.log("价格一览");
formattedPrices.forEach(item => {
    console.log(item);
});


// 练习题 2：filter 筛选 - 剔除不合格数据
// 1. 声明一个常量 scores 赋值为数组 [55, 88, 42, 95, 60, 73]。
// 2. 使用 filter 方法筛选出 scores 数组中大于等于 60 的所有不及格以上成绩。
// 3. 将筛选出的新数组存入常量 passedScores。
// 4. 使用 console.log 打印 passedScores 的值。
const scores = [55, 88, 42, 95, 60, 73];
const passedScores = scores.filter(item => {
    return item >= 60;
});
console.log("通过的分数");
passedScores.forEach(item => {
    console.log(item);
});

// 练习题 3：forEach 遍历 - 条件拼接输出
// 1. 声明一个常量 users 赋值为一个包含对象的数组：
//    [
//      { name: "张三", active: true },
//      { name: "李四", active: false },
//      { name: "王五", active: true }
//    ]
// 2. 使用 forEach 方法遍历 users 数组。
// 3. 在回调函数内部进行判断：如果当前用户的 active 属性值为 true，使用 console.log 输出字符串："在线用户: " 拼接该用户的 name。
const users = [
    {name: "张三", active: true},
    {name: "李四", active: false},
    {name: "王五", active: true}
]
users.forEach(item => {
    if(item.active){
        console.log(`在线用户：${item.name}` );
    }
}); 


// 练习题 4：reduce 归纳 - 购物车商品总价计算
// 1. 声明一个常量 cartItems 赋值为一个包含商品信息的数组：
//    [
//      { name: "鼠标", price: 50 },
//      { name: "键盘", price: 150 },
//      { name: "耳机", price: 100 }
//    ]
// 2. 使用 reduce 方法计算 cartItems 数组中所有商品的 price 总和。
// 3. 要求：给 reduce 显式指定初始值为数字 0，并将计算出的总和结果存入常量 totalPrice。
// 4. 使用 console.log 打印 totalPrice 的值。
const cartItems = [
    {name: "鼠标", price: 50},
    {name: "键盘", price: 150},
    {name: "耳机", price: 100}
]
const totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.price;
}, 0);
console.log(totalPrice);