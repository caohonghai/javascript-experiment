/**
 * @Desc Map
 */

// Object: Property keys must be strings or symbols (usually strings). <string|symbol, object>
// Map: like an Object, but the main difference is that `Map` allows keys of any type. <object, object>

let map = new Map();
console.log(map); // Map(0) {}
map.set(1, 'foo');
map.set('1', 'bar');
map.set(true, 'baz');
console.log(map); // Map(3) { 1 => 'foo', '1' => 'bar', true => 'baz' }

// Object would convert keys to string.
// Map will keep all the type
console.log(map.get(1)); // foo
console.log(map.get('1')); // bar

// object as key

let john = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123
let obj = john;
console.log(visitsCountMap.get(obj)); // 123

// object will convert to string "[object Object]"

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // [ 'cucumber', 500 ] (and so on)
}

// The iteration goes in the same order as the values were inserted.
// The order of parameters during map iteration in JavaScript is different from that in other languages.
recipeMap.forEach((v, k) => {
    console.log(k, v); // cucumber 500  (and so on)
})

/**
 * @Desc Created Map
 */
// use array
let arr = [
    [1, 'a'],
    ['1', 2],
    [true, false]
];
map = new Map(arr);
console.log(map); // Map(3) { 1 => 'a', '1' => 2, true => false }

// use object.
obj = {
    name: 'zs',
    age: 18,
    sex: true
};
map = new Map(Object.entries(obj));
console.log(map); // Map(3) { 'name' => 'zs', 'age' => 18, 'sex' => true }
// use `Object.entries` can convert obj to two-dimensional array,
// In fact, it still called above methods to create map.

console.log(Object.entries(obj)); // [ [ 'name', 'zs' ], [ 'age', 18 ], [ 'sex', true ] ]
console.log(Object.fromEntries(arr)); // { '1': 2, true: false }

// We can use `Object.fromEntries` to get a plain object from Map.
console.log(Object.fromEntries(map.entries())); // { name: 'zs', age: 18, sex: true }
console.log(Object.fromEntries(map)); // { name: 'zs', age: 18, sex: true }

/**
 * @Desc Set
 */
let set = new Set();
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(pete);
set.add(mary);
set.add(pete);
console.log(set); // Set(2) { { name: 'Pete' }, { name: 'Mary' } }
set.add({ name: 'Pete' });
console.log(set); // Set(3) { { name: 'Pete' }, { name: 'Mary' }, { name: 'Pete' } }
// there are two special objects, `pete` is difference with `{ name: 'Pete' }`, because there have difference memory address.

set.forEach(val => {
    console.log(val);
})

for(let val of set) {
    console.log(val);
}

// `Set` has many methods is similar to `Map`, which exists for compatibility with `Map`.
// such as: set.keys(), set.value(), set.entries().