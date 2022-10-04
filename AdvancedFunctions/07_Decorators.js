function slow(x) {
    return x;
}

// `cachingDecorator` is a decorator
function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) { // if there's such key in cache
            console.log('cache', x);
            return cache.get(x); // read the result from it
        }
        let res = func(x); // otherwise call func
        console.log(x);
        cache.set(x, res);
        return res;
    }
}
// The idea is that we can call `cachingDecorator` for any function
// and it will return the caching wrapper.
slow = cachingDecorator(slow);
slow(1);
slow(1);
slow(2);
slow(2);
// Warning: the result of `cachingDecorator()` is a 'wrapper'

// The caching decorator mentioned above is not suited to work with object methods.
let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log('this', this);
        // scary CPU-heavy task here
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};
console.log(worker.slow(1));
worker.slow = cachingDecorator(worker.slow);
// console.log(worker.slow(2)); // Uncaught TypeError: this.someMethod is not a function

// use `call`
worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        console.log('this', this);
        // scary CPU-heavy task here
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};
function cachingCallDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) { // if there's such key in cache
            console.log('cache', x);
            return cache.get(x); // read the result from it
        }
        let res = func.call(this, x); // otherwise call func
        console.log(x);
        cache.set(x, res);
        return res;
    }
}
worker.slow = cachingCallDecorator(worker.slow);
worker.slow(1);
worker.slow(1);

// Going multi-argument
work = {
    slow(min, max) {
        console.log(min + max);
        return min + max;
    }
};
function cacheDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(...arguments);
        if (cache.has(key)) {
            console.log('cache', cache.get(key), key);
            return cache.get(key);
        }
        let res = func.call(this, ...arguments);
        cache.set(key, res);
        return res;
    }
}
// more complex cases many require other hashing functions.
function hash() {
    // return Array.from(arguments).join();
    // return Array.prototype.slice.call(arguments).join();
    // return [].slice.call(arguments).join();
    // return [].join.call(arguments);
    return [...arguments].join();
}
work.slow = cacheDecorator(work.slow, hash);
work.slow(3, 5);
work.slow(3, 5);

// we can also use `apply` to achieve it.

/**
 * @Tasks 1
 */
function spy(func) {
    function wrapper() {
        wrapper.calls.push([...arguments]);
        return func.call(this, ...arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

function _work(a, b) {
    console.log(a + b);
}
work = spy(_work);
work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

/**
 * @Tasks 2
 */
function _f(x) {
    console.log(x);
}
function _delay(fun, times) {
    return function () {
        let _this = this;
        let args = [...arguments];
        setTimeout(function () {
            console.log(_this);
            fun.call(_this, ...args);
        }, times);
    }
}
let f1000 = _delay(_f, 1000);
let obj = {
    name: 'a',
    f1000
};
obj.f1000();