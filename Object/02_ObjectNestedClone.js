let data = {
    height: 182,
    width: 50
};

let user = {
    name: "John",
    sizes: data
};

let clone = Object.assign({}, user);
console.log(clone === user);
// false
console.log(clone.sizes === user.sizes);
// true

console.log(clone);
// { name: 'John', sizes: { height: 182, width: 50 } }
user.sizes.width = 55;
console.log(clone);
// { name: 'John', sizes: { height: 182, width: 55 } }


const deepClone = (obj) => {
    if (typeof obj === 'object') {
        let target = {};
        for (let key in obj) {
            target[key] = deepClone(obj[key]);
        }
        return target;
    } else {
        return obj;
    }
}

let clone2 = deepClone(user);
console.log(clone2 === user);
// false
console.log(clone2.sizes === user.sizes);
// false

