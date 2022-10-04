let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student); // convert object into string.
console.log(typeof json); // string

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup));
// {"title":"Conference","room":{"number":23,"participants":["john","ann"]}}

let room = { number: 23 };

meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup references room
};
room.occupiedBy = meetup; // room references meetup
console.log(JSON.stringify(meetup, ['title', 'participants']))
// {"title":"Conference","participants":[{},{}]}
// the property list is applied to the whole object structure
// so the object in `participants` are empty
// because `name` is not in the list.
console.log(JSON.stringify(meetup, ['title', 'participants', 'name']));
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
console.log('===');
// we can use a function instead of an array as the `replacer`.
JSON.stringify(meetup, (k, v) => {
    console.log(k, v);
    return k === 'occupiedBy' ? undefined : v;
})
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers); // convert into Array
console.log(typeof numbers);
console.log(numbers.length);


// 1. JSON cant use quote and backticks.
// 2. some JavaScript-specific object properties are skipped by `JSON.stringify`.
// 2.1 Function properties.
// 2.2 Symbolic keys and values.
// 2.3 Properties that store `undefined`.
// 3. nested object are supported and converted automatically.
// 4. there must be no circular references.
