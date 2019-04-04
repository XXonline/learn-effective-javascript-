/**
 * 在严格模式下,在函数中重复声明arguments会报错:
 */

'use strict'
function say() { 
  var arguments = []; // SyntaxError: Unexpected eval or arguments in strict mode
}


/**
 * 在非严格模式下,在函数中重复声明arguments不会报错:
 */

function sayWithNoStrict() {
  var arguments = [];
}


//  如果上面两种模式放在一起同时执行（上严格模式下非严格模式），则在第7行就会报错，不会向下继续执行了；且整个js文件都是严格模式了；
