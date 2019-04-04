var s = new String('hello');
console.log(s); // [String: 'hello']

var str = s + ' world';
console.log(str); // hello world

console.log(str[4]); // o
console.log(str[5]); // ''

console.log(typeof 'hello'); // string
console.log(typeof s); // object

var s1 = new String('hello');
var s2 = new String('hello');

/**
 * 对象包装的原始类型和原始类型在比较相等的时候,它们具有不同的表现行为。
 */
console.log(s1 === s2); // false
console.log(s1 == s2); // false


/**
 * 在原始类型上获取或者设置属性相当于隐形的创建了一个对象包裹。
 */
// 下面的语句在严格模式下,会报错: Uncaught TypeError: Cannot create property 'someProperty' on string 'hello world'
str.someProperty = 'some'; // 当然我们也不建议这样做,这里只是用做例子来说明
console.log(str.someProperty); // undefined