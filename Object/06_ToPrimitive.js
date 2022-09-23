let user = {
    name: "John",
    [Symbol.toPrimitive](hint) {
        return this.name + ' ' + hint + ' ';
    },
    toString() {
        return this.name + "ovo ";
    },
    valueOf() {
        return this.name + 'valueOvO ';
    }
};
let user2 = {
    name: "foo",
    [Symbol.toPrimitive](hint) {
        return this.name + ' ' + hint;
    },
    toString() {
        return this.name + ' ' + hint + ' ' + "qaq";
    },
    valueOf() {
        return this.name + ' ' + hint + ' ' + 'valueQAQ';
    }
};
console.log(Number(user)); // NaN
console.log(user.valueOf()); // [object Object]
console.log(user.valueOf() === user); // true
// call [Symbol.toPrimitive](hint)
console.log(user + user2); // Johnfoo
// call toString()
console.log(user + user2); // Johnovofooqaz
// call valueOf()
console.log(user + user2); //

// priority: [Symbol.toPrimitive](hint) > valueOf > toString
