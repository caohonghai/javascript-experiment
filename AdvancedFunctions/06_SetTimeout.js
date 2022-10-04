// 1. `setTimeout` and `setInterval` methods are 'scheduling a call'.
function sayHi(phrase, who) {
    console.log(phrase, who);
}
setTimeout(sayHi, 100, 'Hello', 'John'); // Hello John
setTimeout((a, b) => {
    console.log(a + b); // 3
}, 100, 1, 2);

// a call to `setTimeout` returns a 'timer identifier' `timeId` that we can use to cancel the execution.
let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log('timerId', timerId); // timer identifier

clearTimeout(timerId);
console.log('timerId', timerId);

// 2. The `setInterval` method has the same syntax as `setTimeout`
// repeat with the interval of each second
timerId = setInterval(() => console.log('tick'), 1000);
// after 5 seconds stop
setTimeout(() => {
    clearInterval(timerId);
    console.log('stop');
}, 2000);


// 3. nested setTimeout
timerId = setTimeout(function tick() {
    console.log('tick!');
    timerId = setTimeout(tick, 1000);
}, 1000);


/**
 * @Summary
 * 1. `setTimeout` and `setInterval`
 * 2. `clearTimeout` and `clearInterval`
 * 3. Nested setTimeout calls are a more flexible alternative to setInterval
 */

function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}
printNumbers(2, 5);

function printNumbers2(from, to) {
    let current = from;
    setTimeout(function print() {
        console.log(current++);
        if (current <= to) {
            setTimeout(print, 1000);
        }
    }, 1000);
}
printNumbers2(2, 5);