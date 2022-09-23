let a = 0x3f;
let b = '123'
/**
 * 
function parseInt(string: string, radix?: number | undefined): number
Converts a string to an integer.
@param string — A string to convert into a number.
@param radix
A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
 */
console.log(parseInt(a)); // 63
console.log(parseInt(b)); // 123

console.log(parseInt('a1231231')); // NaN
console.log(Number('a1231231')); // NaN
console.log(+'a1231231'); // NaN

console.log(parseInt(' 1231231z')); // 1231231
console.log(Number(' 1231231z')); // NaN
console.log(+' 1231231z'); // NaN

console.log(parseInt(' 1231231  ')); // 1231231
console.log(Number(' 1231231  ')); // 1231231
console.log(+' 1231231  '); // 1231231

console.log(parseInt('')); // NaN
console.log(Number('')); // 0
console.log(+''); // 0

console.log(parseInt('123a123')); // 123
console.log(Number('123a123')); // NaN
console.log(+'123a123'); // NaN

// '+' is same of Number


let c = 255;
// number.toString(base)
// Converts a number to a string in the corresponding base
console.log(c.toString(16)); // ff
console.log(255..toString(16)); // ff
console.log(c.toString(2)); // 11111111

let d = 2.3
console.log(Math.ceil(d)); // 3
console.log(Math.floor(d)); // 2
console.log(d.toFixed()); // 2
console.log(typeof d.toFixed()); // string
console.log(+d.toFixed()); // 2 : string -> number

console.log('=========== question ===========');
console.log(0.1 + 0.2 == 0.3); // false why?
console.log(0.1 + 0.2); // 0.30000000000000004

console.log( NaN === NaN ); // false
console.log(0 === -0); //  true
// The value NaN is unique in that it does not equal anything, including itself:
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
// In all other cases, Object.is(a, b) is the same as a === b

let e = isNaN('123');
console.log(e); // false