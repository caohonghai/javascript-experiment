let user = {
    name: 'foo',
    age: 30
};

let clone = {};

for (let key in user) {
    console.log(key);
    clone[key] = user[key];
}

console.log(clone === user); // false


let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
let user2 = {
    name: 'bar'
}

Object.assign(user, permissions1, permissions2);
console.log(user);
// { name: 'foo', age: 30, canView: true, canEdit: true }

Object.assign(user, user2);
console.log(user);
// { name: 'bar', age: 30, canView: true, canEdit: true }

let clone2 = Object.assign({}, user);
console.log(clone2);
// { name: 'bar', age: 30, canView: true, canEdit: true }
console.log(clone2 === user);
// false

let clone3 = {
    ...user
};
console.log(clone3);
// { name: 'bar', age: 30, canView: true, canEdit: true }
console.log(clone3 === user);
// false

