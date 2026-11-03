// ==========================================
// 第 75 課練習題：循環結構與控制
// ==========================================

// 練習題 1：for 循環與 continue 過濾
// 1. 使用 for 循環遍歷數字 1 到 10（包含 10）。
// 2. 在循環內部判斷：若當前數字為 5，使用 continue 跳過本次列印。
// 3. 對於非 5 的數字，使用 console.log 輸出當前數字。
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}



// 练习题 2：while 循環累加與 break 熔斷
// 1. 聲明變數 sum 初始化為數字 0。
// 2. 聲明變數 current 初始化為數字 1。
// 3. 使用 while 循環在 current 小於等於 100 時進行累加（將 current 加到 sum 中，並自增 current）。
// 4. 在累加過程中加入條件判斷：一旦累加和 sum 大於 50，立即使用 break 中途跳出循環。
// 5. 在循環外部使用 console.log 分別輸出跳出循環時的 sum 值與 current 值。
let sum = 0;
let current = 1;
while(current <= 100){
    sum += current;
    if(sum > 50){
        break;
    }
    current++;
}
console.log("sum:" + sum); // sum:55
console.log("current:" + current); // current:10
