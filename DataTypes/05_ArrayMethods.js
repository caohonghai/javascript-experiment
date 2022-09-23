// due to array is special object, so we can use `delete` to remove an element
let arr = ['I', 'Go', 'Home'];
delete arr[1];
console.log(arr); // [ 'I', <1 empty item>, 'Home' ]
console.log(arr[1]); // undefined

// we can use `Array.splice` to insert, remove and replace elements.
arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element.
console.log(arr); // [ 'I', 'JavaScript' ]

arr = ["I", "study", "JavaScript"];
arr.splice(0, 0, ...['Hello', 'World']);
console.log(arr); // [ 'Hello', 'World', 'I', 'study', 'JavaScript' ]

let remove = arr.splice(0, 2);
console.log(remove); // [ 'Hello', 'World' ]
console.log(arr); // [ 'I', 'study', 'JavaScript' ]

// Negative indexes allowed
arr = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// `Array.slice` It’s similar to a string method `str.slice`
arr = [1, 2, 3, 4];
let arr2 = arr.slice(0, 4);
console.log(arr2); // [ 1, 2, 3, 4 ]
console.log(arr2 == arr); // false

arr = [1];
console.log(arr.concat([1, 2])); // [ 1, 1, 2 ]
console.log(arr.concat([1, 2], 3)); // [ 1, 1, 2, 3 ]

let arrayLike = {
    0: "something",
    length: 1
};
console.log(arr.concat(arrayLike)); // [ 1, { '0': 'something', length: 1 } ]

arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};
console.log(arr.concat(arrayLike)); // [ 1, 'something', 'else' ]

// indexOf/lastIndexOf
// `lastIndexOf` is the same of `indexOf`, but looks for from right to left
arr = [1, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

console.log(arr.includes(1)); // true

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (wrong, should be 0)
console.log(arr.includes(NaN));// true (correct)

// find/findIndex/findLastIndex
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];
console.log(users.find(item => item.id > 2)) // { id: 3, name: 'Mary' }
console.log(users.find(item => item.id > 3)) // undefined
console.log(users.findIndex(item => item.name === 'John')) // 0
// `findLastIndex` is only supported in version 18 of Node.js
// console.log(users.findLastIndex(item => item.name === 'John')) // 3

/**
 * The find method looks for a single (first) element that makes the function return true.
 * If there may be many, we can use `arr.filter(fn)`.
 */
console.log(users.filter(item => item.name === 'John'));
// [ { id: 1, name: 'John' }, { id: 4, name: 'John' } ]

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // [ 5, 7, 6 ]

arr = [1, 2, 15];
arr.sort();
// The items are sorted as strings by default.
console.log(arr); // [ 1, 15, 2 ]
arr.sort((a, b) => b - a);
console.log(arr); // [ 15, 2, 1 ]

arr = ['1', '2', '15'];
arr.sort();
console.log(arr); // [ '1', '15', '2' ]
arr.sort((a, b) => b - a);
console.log(arr); // [ '15', '2', '1' ]


// split/join
let names = 'Bilbo, Gandalf, Nazgul';
console.log(names.split(', ').join('|')); // Bilbo|Gandalf|Nazgul

let _name = 'Jack';
console.log(_name.split('')); // [ 'J', 'a', 'c', 'k' ]

let nums = [1, 2, 3, 4, 5];
console.log(nums.reduce((pre, cur) => pre + cur, 0));

Array.prototype._reduce = function (fn, init) {
    let arr = this.concat();
    if (init) {
        arr.unshift(init);
    }
    let idx;
    while (arr.length > 2) {
        idx = this.length - arr.length + 1;
        let newValue = fn.call(null, arr[0], arr[1], idx, this);
        arr.splice(0, 2);
        arr.unshift(newValue);
    }
    idx += 1;
    let res = fn.call(null, arr[0], arr[1], idx, this);
    return res;
}

console.log(nums._reduce((pre, cur) => pre + cur));

console.log(Array.isArray([]));
console.log(Array.isArray({}));

const camelize = (str) => {
    return str.split('-').map((item, idx) => {
        if (idx > 0) {
            return item[0].toUpperCase() + item.slice(1);
        } else return item;
    }).join('');
}

console.log(camelize("list-style-image"));


const filterRange = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b);
}
arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [ 3, 1 ]

console.log(arr); // [ 5, 3, 8, 1 ]

const filterRangeInPlace = (arr, a, b) => {
    arr = arr.filter(item => item > a && item < b);
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除 1 到 4 范围之外的值

console.log(arr); // [3, 1]