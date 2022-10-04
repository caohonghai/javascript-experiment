// 1. syntax
let sum = new Function('a', 'b', 'return a + b;');
console.log(sum(1, 2)); // 3
console.log(sum.name); // anonymous

// 2. we can receive the code from a server dynamically
let func = new Function('');

// 3. closure
// we use `new Function` to create function
// it's `[[Environment]]` is set to reference not the current Lexical Environment
// but the global one.
function getFunc() {
    let value = 'test';
    let func = new Function('console.log(value);');
    return func;
}
// getFunc()(); // Uncaught ReferenceError: value is not defined