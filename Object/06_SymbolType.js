// 只有 string 类型和 symbol 类型可以做为 keys
// 并且 其他类型做 keys 时候会自动转 string

let id = Symbol();
console.log(id); // Symbol();
id = '123';
console.log(id); // 123

let id2 = Symbol('123');
let id3 = Symbol('123');
// alert(id2); // Error alert 会将 id2 转换成 string 非法的。
// alert(id2.toString()); // Symbol(123)
// alert(id2.description); // 123
console.log(id3 === id2);


// Symbol
let user = {
    name: 'ls'
}

let id4 = Symbol('1');
let id5 = Symbol('1');
user[id4] = '123';
user[id5] = '345';
console.log(user); // {name: 'ls', Symbol(1): '123', Symbol(1): '345'}

let sex = Symbol('sex');
let stu = {
    name: 'zs',
    [sex]: '123',
    age: 18
}

for (let key in stu) {
    console.log(key);
    // name
    // age
}
// object literal can't access Symbol property
console.log(stu[sex]);

// Symbor.for can access the same of Symbol
// 从全局注册表中读取
let _id = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 symbol
console.log( _id === idAgain ); // true

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name，全局 symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined，非全局

console.log( localSymbol.description ); // name

console.log(Object.getOwnPropertySymbols(stu)); // [Symbol(sex)]