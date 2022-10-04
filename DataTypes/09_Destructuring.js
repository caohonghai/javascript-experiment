// Array Destructuring
let arr = ['John', 'Smith'];

let [firstName, lastName] = arr;
console.log(firstName, lastName); // John Smith
[firstName, lastName] = [];
console.log(firstName, lastName); // undefined undefined
[firstName = 'defalutFirstName', lastName = 'defaultLastName'] = [, 'Man'];
console.log(firstName, lastName); // defalutFirstName Man
// It’s just a shorter way to write:
// let firstName = arr[0];
// let lastName = arr[1];

// second element is not needed
let [firstNames, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); // Consul

// obj
let user = {
    name: "John",
    age: 30
};
for (let [k, v] of Object.entries(user)) {
    console.log(k, v);
}

// swap
let guest = "Jane";
let admin = "Pete";
// swap the values: make guest = Pete, admin = Jane
[guest, admin] = [admin, guest];
console.log(guest, admin);


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest is array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
// the value of rest is array of the remaining array elements.

// object destructuring
let options = {
    titles: 'Menu',
    width: 300,
    height: 400
};
let { titles, width: w, height: h } = options;
console.log(titles, w, h); // Menu 300 400
// if we dont use `let` keyword to destructuring, which will make error.
// `{}` in JavaScript represent code block.


// 1. we can set the variable name using a colon, so that assign a property to a variable with another name.
// 2. default values can be any expressions or even function callbacks.
// 3. any objects or arrays can be nested destructuring
// 4. object destructuring in function parameters can automatically get the fields of the response
function foo({ titles: title = 'Untitled', width, height }) {
    console.log(title, width, height);
}
foo({}); // Untitled undefined undefined
foo(options); // Menu 300 400

// Tasks
const topSalary = (salaries) => {
    let name = null, _max = 0;
    for (let [k, v] of Object.entries(salaries)) {
        if (v >= _max) name = k, _max = v;
    }
    return name;
}