// 1. In a browser it is named window, for Node.js it is global, for other environments it may have another name.

// 2. In a browser, `global functions` and `variables` declared with `var`
var gVar = 5;
console.log(window.gVar); // 5

// 3. If we used let instead, such thing wouldn’t happen
let gLet = 5;
console.log(window.gLet); // undefined;

// 4. If a value is so important that you’d like to make it available globally
window.current = {
    name: 'bar',
    age: 19
}
console.log(current.name); // bar