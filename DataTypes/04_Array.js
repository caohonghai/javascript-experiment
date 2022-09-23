let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[-1]); // in JavaScript will be undefined, unless use `.at`
console.log(fruits.at(-1)); // Plum


// Array is an special object
let arr = fruits; // copy by reference (two variables reference the same array)
console.log(arr === fruits); // true
arr.push("Pear"); // modify the array by reference 
console.log(fruits); // [ 'Apple', 'Orange', 'Plum', 'Pear' ] — four items now

let _fruits = [];
_fruits[9999] = 5; // assign a property with the index far greater than its length
_fruits.age = 15; // create a property with an arbitrary name
console.log(_fruits); // [ <9999 empty items>, 5, age: 15 ]

// array iteration
for (let item of fruits) {
    console.log(item);
}
let array = ["Apple", "Orange", "Pear"];
for (let key in array) {
    console.log(array[key]); // Apple, Orange, Pear
}

// for...in is not suitable for looping array.

// Length of an array, which is the greatest numeric index plus one, and this property can be writable.
// For instance
let foo = [1, 2, 3, 4, 5];
console.log(foo, foo.length); // [ 1, 2, 3, 4, 5 ] 5
foo.length = 3;
console.log(foo, foo.length); // [ 1, 2, 3 ] 3
// truncate to 3 elements
foo.length = 5; // return length back, the element will be undefined.
console.log(foo, foo.length); // [ 1, 2, 3, <2 empty items> ] 5

// clear array
foo = [];
foo.length = 0;

// create new array
let bar = [];
let baz = new Array();

// toString
fruits = ["Apple", "Orange", "Plum"];
console.log(fruits.toString()); // Apple,Orange,Plum
console.log(new String(fruits)); // [String: 'Apple,Orange,Plum']
console.log(String(fruits)); // Apple,Orange,Plum
console.log([1, 2] + 1); // 1,21
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion,
// so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

console.log([] == []); // false, Compare with a reference to two arrays
console.log(0 == []); // true, after [] was converted to '', as '' becomes converted to number 0