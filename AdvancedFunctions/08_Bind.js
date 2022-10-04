let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 100); // Hello, undefined;
setTimeout(() => user.sayHi(), 100); // Hello, John!

// bind object on other function.
let bindSayHi = user.sayHi.bind(user);
setTimeout(bindSayHi, 100); // Hello, John!

// Partial functions
function mul(a, b) {
    return a * b;
}
let double = mul.bind(null, 2);
let doubles = (a) => {
    return mul(a, 2);
}
console.log(double(3)); // 6
console.log(double(4)); // 8
console.log(doubles(5)); // 10
console.log(double);

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(function (student) {
            console.log(this) // windows
            console.log(this.title + ': ' + student)
        });
    },
    showListArrow() {
        this.students.forEach((student) => {
            console.log(this) // group
            console.log(this.title + ': ' + student)
        });
    }
};

group.showList();
group.showListArrow();

// Arrow functions can’t run with new