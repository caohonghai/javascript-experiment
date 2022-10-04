function bar() {
    console.log('Hello');
}

console.log(bar.name); // bar

function baz(name, age, ...other) {
}
console.log(baz.length); // 2

function foo(params) {
    foo.count++;
}
foo.count = 0;
foo();
foo();
console.dir(foo); // f foo(params)
console.log(foo.count); // 2

// Function properties can replace closure sometimes.
function makeCounter() {
    // instead of
    // let count = 0;
    function counter() {
        return counter.count++;
    }
    counter.count = 0;
    return counter;
}
let count = makeCounter();
console.dir(count);
console.log(count()); // 0
console.log(count()); // 1
count.count++;
// the main difference is that if the value of `count` lives in an outer variable
// then external code is unable to access it.
// Only nested functions may modify it.
console.log(count()); // 3

// an ordinary Function Expression
let sayHi = function (who) {
    console.log(`Hello, ${who}`);
}
// add a name to it
sayHi = function func(who) {
    console.log(`Hello, fun ${who}`);
}
// we can also through `sayHi` to call it.
sayHi("John"); // Hello, fun John
// 1. it allows the function of reference itself internally.
// 2. it's not visible outside of the function.
// For instance:
sayHi = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest");
    }
}
sayHi(); // Hello, Guest
sayHi('John'); // Hello, John

sayHi = function (who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        sayHi("Guest"); // Error: sayHi is not a function
    }
}
sayHi(); // Hello, Guest
sayHi('John'); // Hello, John
// it looks like normal, but code is that `sayHi` may change in the outer code. 
let welcome = sayHi;
sayHi = null;
// welcome(); // Error, the nested sayHi call doesn't work any more!

/**
 * @Summary
 * 1. Functions are object
 * 2. `name`: return function name
 * 3. `length`: return function parameters
 * 4. we can define functions properties
 * 5. NFE: named function expression
 */