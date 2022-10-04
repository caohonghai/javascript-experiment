// Date

// create date from timestamp
console.log(new Date()); // shows current date/time
console.log(new Date(0)); // 0 means 01.01.1970 UTC+0
console.log(new Date(24 * 60 * 60 * 1000)); // now add 24 hours, get 02.01.1970 UTC+0

// get timestamp from date
console.log(new Date().getTime()); // shows current timestamp
// we can get before 1970s using negtive timestamps, for instance
console.log(new Date(-24 * 60 * 60 * 1000)); // 1969-12-31T00:00:00.000Z

// parsed automatically
console.log(new Date("2017-01-26")); // 2017-01-26T00:00:00.000Z

// create date from parameters.
console.log(new Date(2011, 0, 1)); // 1 Jan 2011, 00:00:00

console.log(new Date().getHours()); // get the hours in current time zone
console.log(new Date().getTimezoneOffset()); // get the difference between UTC and the local time zone

console.log(new Date().setHours(0));

// Date parse
// the string format must be `YYYY-MM-DDTHH:mm:ss.sssZ`
console.log(new Date(Date.parse('2021-09-25T14:32:18.406+08:00')));

