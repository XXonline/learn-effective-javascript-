/**
 * 强制转换可能会导致隐形的类型错误。
 * +号运算符会根据它的参数类型来决定是做加法还是字符串的拼接。
 * Object通过它的toString方法被强制转换为字符串,通过它的valueOf方法被强制转换为数字。
 * 带有valueOf方法的Object应该实现一个toString方法,这个toString方法返回的字符串就是那个valueOf返回的数字的字符串表示形式。
 * 判断一个值是否是未定义的应该使用typeof或者比较的方法,而不是根据这个值表现是true或者false来判断。
 */

console.log(typeof (3 + true), 3 + true); // number 4
console.log(typeof (true + 3), true + 3); // number 4
console.log(typeof (3 + false), 3 + false); // number 3
console.log(typeof (false + 3), false + 3); // number 3


console.log(1 + 1); // 2
console.log('hello' + ' world'); // hello world


console.log(typeof (2 + '3'), 2 + '3'); // string 23
console.log(typeof ('2' + 3), '2' + 3); // string 23

console.log(typeof (1 + '2' + 3), 1 + '2' + 3); // string 123

console.log(typeof (2 * '3'), 2 * '3'); // number 6
console.log(typeof ('8' | '1'), '8' | '1'); // 9

var x = NaN;
console.log(x === x); // false
var a = {};
console.log(a === a); // true
var b = null;
console.log(b === null); // true


// 检测数值是否非法  true：非法  false： 合法
console.log(isNaN(NaN)); // true;

console.log(isNaN({})); // true
console.log(isNaN(undefined)); //true
console.log(isNaN('foo')); // true;
console.log(isNaN({valueOf: 'foo'})); // true

console.log(isNaN({valueOf: function(){return 1}})); // false

console.log('J' + {toString: function(){return 'S'}}); // JS
console.log(1 + { valueOf: function () { return 2 } }); // 3

var obj = {
  toString: function() {
      return 'obj';
  },
  valueOf: function() {
      return 1;
  }
};

console.log(1 + obj); // 2
console.log('1' + obj); // 11

// bad
function badPoint(x, y) {
  if(!x) {
      x = 1;
  }
  if(!y) {
      y = 1;
  }
  return {
      x: x,
      y: y
  }
}

// good
function point(x, y) {
  if(typeof x === undefined || y === undefined) {
      return {
          x: x || 1,
          y: y || 1
      }
  }
  return {
      x: x,
      y: y
  }
}

console.log(badPoint(0, 0)); // { x: 1, y: 1 }
console.log(point(0, 0)); // { x: 0, y: 0 }
console.log(point()); // { x: 1, y: 1 }