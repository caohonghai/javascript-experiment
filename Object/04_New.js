function User() {
  console.log(new.target);
  console.log(this);
}

new User();
console.log("------");
User();

// 这样可以强行在 User 的时候强行调用 new
// 省略了 new 使得很难观察到代码中正在发生什么
function Student(name) {
  if (!new.target) {
    return new Student(name);
  }
  this.name = name;
  console.log(this);
  // return 123; 
  // return;
  // return {}; // {}
}
console.log("------");
let stu = Student("zs");
console.log(stu);
console.log("------");

/**
 * @Summary
 * 构造函数就是一个特殊的常规函数，它只能通过 new 的关键字进行调用，首字母约定需要大写
 * 调用时候内部会先创建一个 this = {} 最后把这个 this 隐式返回出去，如果自己写了 return
 * 当 return 是对象时，返回 return 的对象，当 return 是原始数据类型时，返回this
 */