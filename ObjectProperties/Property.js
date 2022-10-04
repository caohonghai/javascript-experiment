let user = {
    name: "John"
};
console.log(Object.getOwnPropertyDescriptor(user, 'name')); // {value: 'John', writable: true, enumerable: true, configurable: true}
Object.defineProperty(user, 'age', {
    value: 18
})
console.log(user); // {name: 'John', age: 18}
console.log(Object.getOwnPropertyDescriptor(user, 'age')); // {value: 18, writable: false, enumerable: false, configurable: false}
user.age = 10;
console.log(user); // {name: 'John', age: 18}
