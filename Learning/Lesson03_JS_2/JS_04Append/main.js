// ==========================================
// 第 80 课追加练习：深层嵌套与动态对象组合
// ==========================================

// 练习题 1：动态组合嵌套对象与深层属性修改
// 1. 声明一个常量 hero 赋值为一个对象，初始包含：
//    - name: "Arthur"
//    - hp: 100
// 2. 声明一个独立的常量 weapon 赋值为一个对象，包含：
//    - type: "Sword"
//    - attack: 50
// 3. 将 weapon 对象直接挂载到 hero 的 equipment 属性上（使 hero.equipment 成为一个嵌套对象）。
// 4. 通过 hero 对象，将武器的 attack 攻击力属性从 50 修改更新为 70。
// 5. 使用 console.log 打印 hero.equipment.attack 的值。
// 6. 使用 console.log 打印整个 hero 对象。
const hero = {
    name: "Arthur",
    hp: 100
}
const weapon = {
    type: "Sword",
    attack: 50
}
hero.equipment = weapon;
hero.equipment.attack = 70;
console.log(hero?.equipment?.attack);
console.log(hero);

// 练习题 2：多层嵌套读取与可选链崩盘防护
// 1. 声明一个常量 company 赋值为一个包含多层结构的嵌套对象：
//    - name: "TechCorp"
//    - department: {
//        dev: {
//          leader: "Alice"
//        }
//      }
// 2. 使用可选链运算符（?.）安全读取开发部门领导者的名字（company.department.dev.leader），存入变量 leaderName，并用 console.log 打印。
// 3. 使用可选链运算符（?.）尝试读取不存在的测试部门领导者（company.department.test?.leader），存入变量 testLeader，并用 console.log 打印（验证输出 undefined 且不崩盘）。
// 4. 为 company.department 动态新增一个 test 属性，赋值为对象 { leader: "Bob" }。
// 5. 再次使用可选链运算符（?.）读取 company.department.test.leader 的值，存入变量 newTestLeader 并用 console.log 打印。
const company = {
    name: "TechCorp",
    department: {
        dev: {
            leader: "Alice"
        }
    }
}
let leaderName = company?.department?.dev?.leader;
console.log(leaderName);
let testLeader = company?.department?.test?.leader;
console.log(testLeader);
company.department.test = {leader: "Bob"}
let newTestLeader = company?.department?.test?.leader;
console.log(newTestLeader);
console.log(company); //自己加的，不做考核计分，就看看结构是如何的