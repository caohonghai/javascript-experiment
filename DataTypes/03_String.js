let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
// use backticks 
console.log(guestList);

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str1 === str2); // true

let str = 'Hello, World!';
let str_ = 'Hello, World！';

console.log(str.length); // 13
console.log(str_.length); // 13
// Chinese character also represent one length

// use square brackets [pos] or call the method str.charAt(pos) can access character at position
console.log(str[2]); // l
console.log(str.charAt(2)); // l

console.log(str[1000]); // undefined
console.log(str.charAt(1000)); // ''

for (let ch of str) {
    console.log(ch);
}

console.log('===== String are immutable =====');
let str3 = 'Hello';
str3[2] = 'O';
console.log(str3[2], str3); // l Hello
str3 = 'h' + str3.slice(1);
console.log(str3); // hello

console.log('===== Searching for a substring =====');
let str4 = 'Widget with id';

console.log(str4.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str4.indexOf('widget')); // -1, not found, the search is case-sensitive

console.log(str4.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
/**
 * @param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
console.log(str4.indexOf("id", 2)); // 12

if (str4.indexOf('Widget')) {
    console.log('wowo'); // doesn't work!, because the indexOf('Widget') return zero, that represent falsly in `if`
}
// use `~` operation, for 32-bit integers ~ equals -(n + 1), so ~n is zero only if `n == 1`
if (~str4.indexOf('Widget')) {
    console.log('wowo~');
}
// ~4294967295 = 0

console.log("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

let str5 = "stringify";
console.log(str5.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str5.slice(2)); // 'ringify', from the 2nd position till the end

let str6 = "stringify";

// these are same for substring
console.log(str6.substring(2, 6)); // "ring"
console.log(str6.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str6.slice(2, 6)); // "ring" (the same)
console.log(str6.slice(6, 2)); // "" (an empty string)
