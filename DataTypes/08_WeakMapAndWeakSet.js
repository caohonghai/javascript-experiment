/**
 * @Desc
 */
let john = { name: "John" };

let map = new Map();
map.set(john, "...");
console.log(map); // Map(1) { { name: 'John' } => '...' }
console.log(map.get(john)); // ...
john = null;
console.log(map); // Map(1) { { name: 'John' } => '...' }
console.log(map.get(john)); // undefined

john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

console.log(weakMap.get(john));

john = null; // overwrite the reference
console.log(weakMap);
console.log(weakMap.get(john));
// john is removed from memory!

// The most notable limitation of WeakMap and WeakSet is the absence of iterations, and the inability to get all current content. 