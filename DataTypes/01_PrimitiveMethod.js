console.log(typeof 0); // number

console.log(0); // 0

console.log(new Number(0)); // Number {0}

console.log(typeof new Number(0)); // object

// Objects are always truthy in if

// transform String to Number
console.log(Number('123')); // 123

console.log(typeof Number('123')); // number

let str = 'Hello';
console.log(str.toUpperCase());
/**
 * @Summary
 * 为什么 primitive 可以调用方法，这是因为在使用 primitive 时候会生成一个 special object
 * 这个对象知道 primitive 的 value，并且可以调用响应的方法，这就是为什么这里可以调用 toUpperCase 的原因
 * 调用之后，这个 special object 会被销毁
 * 其他的 primitive 也可以调用其对应的 methods，null 和 undefined 除外。
 */