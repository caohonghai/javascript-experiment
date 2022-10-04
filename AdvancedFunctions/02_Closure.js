// 1. a variable is declared inside a code block `{...}`, it's only inside that block
{
    let message = 'Hello';
    console.log(message);
}
// console.log(message); // ERROR

// 2. without separate blocks would be error, we use `let` with the existing variable name.


// nested function
function sayHiBye(firstName, lastName) {

    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hello, " + getFullName());
    console.log("Bye, " + getFullName());

}
sayHiBye('John', 'Smtish');

function makeCounter() {
    let count = 0
    return function () {
        return count++;
    }
}
let count = makeCounter();
console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2

// 3. Lexical Environment object consists of two parts
// 3.1 Environment Record, an object that stores all local variables as its properties.
// 3.2 A reference to the outer lexcial environment, the one associated with the outer code.

function sum(a) {
    return function (b) {
        return a + b;
    }
}
console.log(sum(1)(2));


let x = 1;

function func() {
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2;
}

func();

console.log(a);
var a = 1;

function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 10) {
        let j = i;
        let shooter = function () { // shooter function
            console.log(j); // should show its number
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...

/**
 * @Summary All functions are closure
 */
