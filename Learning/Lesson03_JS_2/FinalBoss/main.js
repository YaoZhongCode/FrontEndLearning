// ==========================================
// 第 82 课：【模块二 Boss 挑战】数据清洗与统计分析引擎
// ==========================================

// 业务背景：
// 你收到了系统导出的一份原始订单列表数据，其中包含有效订单、异常订单（如价格小于等于 0）以及未支付订单。
// 你需要编写一套数据处理引擎，过滤出有效已完成订单，统计财务总额，生成格式化报表，并封装为一个安全可调用的系统分析报告。

// 原始数据（直接复制使用）：
const rawOrders = [
  { id: 101, title: "机械键盘", price: 300, status: "completed" },
  { id: 102, title: "无线鼠标", price: -50, status: "completed" }, // 异常数据：价格小于等于0
  { id: 103, title: "显示器", price: 1200, status: "pending" },   // 未完成订单
  { id: 104, title: "游戏耳机", price: 250, status: "completed" },
  { id: 105, title: "鼠标垫", price: 0, status: "completed" }     // 异常数据：价格小于等于0
];

// 需求规范：

// 1. 阶段一：数据清洗（filter）
//    - 使用 filter 方法从 rawOrders 中筛选出所有“状态为 completed”且“价格大于 0”的合法订单。
//    - 将筛选出的新数组存入常量 validOrders。
const validOrders = rawOrders.filter(item => item.status === "completed" && item.price > 0);

// 2. 阶段二：数据格式化映射（map）
//    - 使用 map 方法遍历 validOrders 数组。
//    - 将每一个订单对象转化为格式化字符串（格式要求："订单#ID: 名称 (¥价格)"，例如: "订单#101: 机械键盘 (¥300)"）。
//    - 将生成的新字符串数组存入常量 orderReports。
const orderReports = validOrders.map(item => `订单#${item.id}：${item.title}(￥${item.price})`);

// 3. 阶段三：财务归纳统计（reduce）
//    - 使用 reduce 方法计算 validOrders 中所有合法订单 price 的总和。
//    - 要求指定初始值为数字 0，并将总金额结果存入常量 totalRevenue。
const totalRevenue = validOrders.reduce((sum, item) => sum + item.price, 0);

// 4. 阶段四：分析报告封装与可选链防爆（闭包 + 对象 + ?.）
//    - 声明一个名为 createReportEngine 的函数。
//    - 在函数内部声明一个系统配置对象 config，结构为：
//      { system: { meta: { version: "v2.1" } } }
//    - createReportEngine 函数 return 一个匿名箭头函数：
//      - 匿名箭头函数接收一个形参 targetUser（对象类型）；
//      - 使用可选链运算符（?.）安全读取 targetUser 内部的 profile 对象的 name 属性：
//        - 若 name 存在，存入变量 reporterName；若不存在（或 targetUser 为 undefined），使用逻辑或/默认值设为 "匿名管理员"；
//      - 使用可选链运算符（?.）安全读取 config 对象的 system.meta.version 属性，存入变量 sysVersion；
//      - 最终 return 一个包含以下属性的分析汇总对象：
//        {
//          operator: reporterName,
//          version: sysVersion,
//          revenue: totalRevenue,
//          validCount: validOrders.length,
//          details: orderReports
//        }
function createReportEngine(){
    const config = { system: { meta: { version: "v2.1" } } };
    return (targetUser) => {
        // let reporterName;
        // if(targetUser?.profile?.name != undefined){
        //     reporterName = targetUser.profile.name;
        // }else{
        //     reporterName = "匿名管理员";
        // }
        let reporterName = targetUser?.profile?.name || "匿名管理员";
        let sysVersion = config?.system?.meta?.version;
        return {
            operator: reporterName,
            version: sysVersion,
            revenue: totalRevenue,
            validCount: validOrders.length,
            details: orderReports
        }
    }
}

// 5. 阶段五：运行引擎与控制台输出
//    - 调用 createReportEngine()，将返回的闭包函数存入常量 generateReport。
//    - 第一次测试：调用 generateReport({ profile: { name: "张经理" } })，将生成的报告对象存入常量 report1，并使用 console.log 打印 report1。
//    - 第二次测试：调用 generateReport()（不传任何参数），将生成的报告对象存入常量 report2，并使用 console.log 打印 report2。
const generateReport = createReportEngine();
const report1 = generateReport({profile: {name: "张经理"}});
console.log(report1);

const report2 = generateReport();
console.log(report2);