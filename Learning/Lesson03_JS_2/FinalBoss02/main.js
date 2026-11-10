// ==========================================
// 第 82 课：【模块二 Boss 挑战 2/3】员工绩效与薪酬分析系统
// ==========================================

// 业务背景：
// 你需要为 HR 系统开发一套员工薪酬分析引擎。
// 系统导出了包含在职状态、基本工资、绩效评级的原始员工数据，你需要过滤在职员工、计算绩效奖金、统计总薪酬支出，并生成系统核算报告。

// 原始数据（直接复制使用）：
const rawEmployees = [
  { id: 1, name: "Alice", baseSalary: 8000, rating: "A", active: true },
  { id: 2, name: "Bob", baseSalary: -2000, rating: "B", active: true },   // 异常数据：工资小于等于0
  { id: 3, name: "Charlie", baseSalary: 6000, rating: "C", active: false }, // 离职员工
  { id: 4, name: "David", baseSalary: 10000, rating: "A", active: true },
  { id: 5, name: "Eve", baseSalary: 7000, rating: "B", active: true }
];

// 需求规范：

// 1. 阶段一：在职与合法薪酬过滤（filter）
//    - 使用 filter 方法从 rawEmployees 中筛选出所有“active 为 true”且“baseSalary 大于 0”的员工。
//    - 注意：filter 回调函数内部必须直接返回布尔判断条件，严禁 return 对象本身！
//    - 将筛选出的数组存入常量 activeStaff。
const activeStaff = rawEmployees.filter(employee => employee.active && employee.baseSalary > 0);

// 2. 阶段二：包含绩效奖金的实发工资计算（map）
//    - 使用 map 方法遍历 activeStaff 数组，生成包含实发工资（finalSalary）的新对象数组：
//      - 评级 rating 为 "A" 的员工，实发工资 = baseSalary * 1.2（20% 绩效奖金）；
//      - 评级 rating 为 "B" 的员工，实发工资 = baseSalary * 1.1（10% 绩效奖金）；
//      - 其他评级实发工资等于 baseSalary；
//      - 映射返回的新对象结构要求：{ name: 员工姓名, rating: 评级, finalSalary: 计算后的实发工资 }。
//    - 将生成的新对象数组存入常量 payrollList。
const payrollList = activeStaff.map(employee => {
    let temp;
    switch(employee.rating){
        case "A":
            temp = employee.baseSalary * 1.2;
            break;
        case "B":
            temp = employee.baseSalary * 1.1;
            break;
        default:
            temp = employee.baseSalary;
    }
    return { name: employee.name, rating: employee.rating, finalSalary: temp}
});
// console.log(payrollList);


// 3. 阶段三：公司薪酬总支出归纳（reduce）
//    - 使用 reduce 方法计算 payrollList 中所有员工 finalSalary 的总和。
//    - 要求显式指定初始值为数字 0，并将总金额结果存入常量 totalPayout。
const totalPayout = payrollList.reduce((sum, employee) => sum + employee.finalSalary, 0);
// console.log(totalPayout);

// 4. 阶段四：薪酬引擎封装（闭包 + ?. + || 逻辑或默认值）
//    - 声明一个名为 createPayrollEngine 的函数。
//    - 函数内部声明一个配置对象 systemInfo = { meta: { env: "Production" } }。
//    - createPayrollEngine 返回一个匿名箭头函数：
//      - 接收形参 auditor（对象类型）；
//      - 使用可选链运算符（?.）与逻辑或运算符（||）一行代码安全读取 auditor.info.name，不存在时默认赋值为 "首席财务官"；
//      - 使用可选链运算符（?.）安全读取 systemInfo.meta.env，存入变量 envName；
//      - 最终 return 汇总报告对象：
//        {
//          auditorName: 读取到的审核员名字,
//          environment: envName,
//          totalCost: totalPayout,
//          staffCount: payrollList.length,
//          payrollDetails: payrollList
//        }
function createPayrollEngine(){
    const systemInfo = { meta: { env: "Production" } }
    return auditor => {
        let auditorName = auditor?.info?.name || "首席财务官";
        let envName = systemInfo?.meta?.env;
        return {
            auditorName: auditorName,
            enviroment: envName,
            totalCost: totalPayout,
            staffCount: payrollList.length,
            payrollDetails: payrollList
        }
    }
}
// 5. 阶段五：运行引擎与控制台输出
//    - 调用 createPayrollEngine()，将返回的闭包函数存入常量 runPayrollAnalysis。
//    - 第一次测试：调用 runPayrollAnalysis({ info: { name: "王审计" } })，存入 reportA 并用 console.log 打印。
//    - 第二次测试：调用 runPayrollAnalysis()（不传参数），存入 reportB 并用 console.log 打印。
const runPayrollAnalysis = createPayrollEngine();
const reportA = runPayrollAnalysis({info:{name: "王审计"}});
console.log(reportA);
const reportB = runPayrollAnalysis();
console.log(reportB);