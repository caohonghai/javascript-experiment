function sayHi() {
  console.log(this);
}
sayHi();

let user = { name: "John" };
let admin = { name: "Admin" };

user.s = sayHi;
user.s();

// 它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。