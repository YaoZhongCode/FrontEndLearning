// ==========================================
// 第 82 课：【模块二 Boss 挑战 3/3】电商商品库存与优惠券核算引擎
// ==========================================

// 业务背景：
// 你需要为电商平台编写一套后台商品核算系统。
// 系统导出了包含商品库存、分类、原价以及下架标记的原始数据，你需要过滤在售有效商品、按分类计算折后价、统计总库存货值，并封装为一个带权限校验的分析引擎。

// 原始数据（直接复制使用）：
const rawProducts = [
  { id: 201, name: "笔记本电脑", price: 6000, category: "electronics", stock: 5, isDeleted: false },
  { id: 202, name: "蓝牙音箱", price: 300, category: "electronics", stock: 0, isDeleted: false },    // 零库存
  { id: 203, name: "运动外套", price: 400, category: "clothing", stock: 12, isDeleted: false },
  { id: 204, name: "纯棉T恤", price: -100, category: "clothing", stock: 20, isDeleted: false },    // 异常价格
  { id: 205, name: "办公椅", price: 800, category: "furniture", stock: 3, isDeleted: true }        // 已下架删除
];

// 需求规范：

// 1. 阶段一：在售与有效库存过滤（filter）
//    - 使用 filter 方法筛选出“isDeleted 为 false”、“stock 大于 0”且“price 大于 0”的有效商品。
//    - 要求：直接返回布尔表达式。
//    - 将筛选出的数组存入常量 validProducts。
const validProducts = rawProducts.filter(item => !item.isDeleted && item.stock > 0 && item.price > 0);


// 2. 阶段二：分类折扣计算（map）
//    - 使用 map 方法遍历 validProducts 数组，生成包含折后单价（discountPrice）的新对象数组：
//      - 分类 category 为 "electronics" 的商品打 9 折（price * 0.9）；
//      - 分类 category 为 "clothing" 的商品打 8 折（price * 0.8）；
//      - 其他分类保持原价；
//      - 映射返回的新对象结构要求：{ id: 商品ID, name: 商品名称, finalPrice: 计算后的折后单价, stock: 库存数 }。
//    - 将生成的新对象数组存入常量 discountedList。
const discountedList = validProducts.map(item => {
    let newPrice;
    switch(item.category){
        case "electronics":
            newPrice = item.price * 0.9;
            break;
        case "clothing":
            newPrice = item.price * 0.8;
            break;
        default:
            newPrice = item.price;
    }
    return {
        id: item.id,
        name: item.name,
        finalPrice: newPrice,
        stock: item.stock
    }
});
//  console.log(discountedList);

// 3. 阶段三：总库存货值归纳（reduce）
//    - 使用 reduce 方法计算 discountedList 中所有商品的“总货值”（单个商品货值 = finalPrice * stock）。
//    - 要求显式指定初始值为数字 0，并将计算出的总货值存入常量 totalInventoryValue。
const totalInventoryValue = discountedList.reduce((sum, item) => sum + item.finalPrice * item.stock, 0);

// const totalInventoryValue = discountedList.reduce((sum, item) => {
//     let price = item.finalPrice * item.stock;
//     return sum + price;
// }, 0);


// 4. 阶段四：分析引擎封装（闭包 + ?. + ?? 或 || 空值兜底）
//    - 声明一个名为 createInventoryEngine 的函数。
//    - 函数内部声明系统配置常量 storeConfig = { storeName: "官方旗舰店", meta: { version: "v3.0" } }。
//    - createInventoryEngine 返回一个匿名箭头函数：
//      - 接收形参 userClient（对象类型）；
//      - 使用可选链（?.）与默认值语法（?? 或 ||）安全读取 userClient.profile.role，若不存在默认赋值为 "Guest"；
//      - 使用可选链（?.）安全读取 storeConfig.storeName，存入变量 storeName；
//      - 最终 return 汇总对象：
//        {
//          userRole: 读取到的角色,
//          store: storeName,
//          totalValue: totalInventoryValue,
//          itemTypesCount: discountedList.length,
//          inventoryDetails: discountedList
//        }
function createInventoryEngine(){
    const storeConfig = { storeName: "官方旗舰店", meta: { version: "v3.0" } }
    return (userClient) => {
        let role = userClient?.profile?.role ?? "Guest";
        let storeName = storeConfig?.storeName;
        return {
            userRole: role,
            store: storeName,
            totalValue: totalInventoryValue,
            itemTypesCount: discountedList.length,
            inventoryDetails: discountedList
        }
    }
}


// 5. 阶段五：运行引擎与控制台输出
//    - 调用 createInventoryEngine()，将返回的闭包函数存入常量 runInventoryAnalysis。
//    - 第一次测试：调用 runInventoryAnalysis({ profile: { role: "StoreAdmin" } })，存入 report1 并用 console.log 打印。
//    - 第二次测试：调用 runInventoryAnalysis()（不传参数），存入 report2 并用 console.log 打印。
const runInventoryAnalysis = createInventoryEngine();
const report1 = runInventoryAnalysis({ profile: { role: "StoreAdmin" } });
console.log(report1);
const report2 = runInventoryAnalysis();
console.log(report2);
