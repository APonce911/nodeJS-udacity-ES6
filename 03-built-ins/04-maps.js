/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

let [key,value] = []
// let key = undefined
// let value = undefined

for (const member of members) {
  [key,value] = member
  console.log(key, value);
}
