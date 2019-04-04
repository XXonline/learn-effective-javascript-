/**
 * 位运算符把数字当做32位的有符号整数来处理。 
 * 异或（^）：同出0，异出1
 * 与（&）：全1出1，其余出0
 * 或（|）：全0出0，其余出1
 * 非（~）：对数字求负，然后减 1
 * 
 * 
 * JavaScript的数字都是双精度的浮点数。
 * JavaScript中的整数只是双精度浮点数的一个子集,而不是一个单独的数据类型。
 */

console.log(typeof 36); // number
console.log(typeof 36.66); // number
console.log(typeof -36.66); // number

console.log(0.1 * 3.6); // 0.36000000000000004
console.log(1 * 36); // 36
console.log(1 - 36); // -35
console.log(1 - .4); // 0.6
console.log(25 / 5); // 5
console.log(2.5 / 5); // 0.5
console.log(25 % 4); // 1
console.log(25 % 0.4); // 0.19999999999999862
console.log(8 | 1); // 9
console.log(8 & 1); // 0
console.log(8 ^ 1); // 9  

console.log((10).toString(2)); // 1010
console.log(parseInt('1010', 2)); // 10

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + (0.2 + 0.3)); // 0.6
console.log((0.1 + 0.2) + 0.3); // 0.6000000000000001
console.log(.3 + .3); // 0.6

console.log(10 + (20 + 30)); // 60
console.log((10 + 20) + 30); // 60
