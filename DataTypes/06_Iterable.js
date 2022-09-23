let range = {
    from: 1,
    to: 5
};

// 1. call to `for..of` initially calls this
range[Symbol.iterator] = function () {
    // return iterator object:
    // 2. Onward, `for..of` works only with the iterator object below, asking it for next values
    return {
        cur: this.from,
        target: this.to,
        // 3. `next()` is called on each iteration by the for..of loop
        next() {
            let outputObj = {};
            if (this.cur <= this.target) {
                // 4. it should return the value as an object {done:.., value :...}
                // Iteration completion, when the property of done is true
                outputObj.value = this.cur * this.cur;
                outputObj.done = false;
            } else {
                outputObj.done = true;
            }
            this.cur++;
            return outputObj;
        }
    }
}

for (let n of range) {
    console.log(n);
}
// 1
// 4
// 9
// 16
// 25

let _range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};


for (let n of _range) {
    console.log(n);
}

// `Iterables` are objects that implement the `Symbol.iterator` method
// `Array-likes` are objects that have indexes and `length`
// But an `iterable` may be not `array-like`,and vice versa an array-like may be not iterable.

// the range in the example above is iterable, but not array-like, because it does not have indexed properties and length.

let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};

// Error (no Symbol.iterator)
// for (let item of arrayLike) {
//     console.log(item)
// }


// takes an iterable or array-like value and makes a "real" Array from `Array.from`.
let arr = Array.from(arrayLike); // (*)
let arr2 = Array.from(range);
console.log(arr); // [ 'Hello', 'World' ]
console.log(arr2); // [ 1, 4, 9, 16, 25 ]
console.log(arr.pop()); // World (method works)

// `Array.from` at the line (*) takes the object,
// examines it for being an iterable or array-like,
// then makes a new array and copies all items to it.

arr2 = Array.from(range, v => v * v);
console.log(arr2); // [ 1, 16, 81, 256, 625 ]
