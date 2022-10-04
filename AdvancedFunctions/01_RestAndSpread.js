const sum = (...args) => {
    return args.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
}
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
// we can use Rest parameters to get excessive arguments
// Rest parameter gathers the remaining parameters into an array
// Attention: the Rest parameters must be at the end

function showName() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
showName('John', 'Smtish');
// 1. using `arguments` to get all arguments of the function.
// 2. although `arguments` is both array-like and iterable
// but it's not a array, so we can't use array methods.
// 3. arrow functions don't have `arguments`.
// if we want to access `arguments` in arrow functions
// we must take them from the outer normal function

// the Spread syntax looks like the Rest parameters, but does quite the opposite.
console.log(Math.max(3, 5, 1)); // 5
console.log(Math.max(...[3, 5, 1, 9])); // 9
function showString() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
showString(..."HelloWorld!");
// using iterators to gather element, the same way as `for...of` does.
// The spread syntax works only with iterables.