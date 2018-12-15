
/*
 * Programming Quiz: Make An Iterable Object
 *
 * Turn the `james` object into an iterable object.
 *
 * Each call to iterator.next should log out an object with the following info:
 *   - key: the key from the `james` object
 *   - value: the value of the key from the `james` object
 *   - done: true or false if there are more keys/values
 *
 * For clarification, look at the example console.logs at the bottom of the code.
 *
 * Hints:
 *   - Use `Object.keys()` to store the object's properties in an array.
 *   - Each call to `iterator.next()` should use this array to know which property to return.
 *   - You can access the original object using `this`.
 *   - To access the values of the original object, use `this` and the key from the `Object.keys()` array.
 */

const james = {
    name: 'James',
    height: `5'10"`,
    weight: 185
};
// console.log(typeof james)

// console.log(jamesKeys);

// james[Symbol.iterator] = function* () {
//     var key;
//     for (key in this) {
//         yield this[key];
//     }
// };
// console.log(typeof james[Symbol.iterator])



// console.log([Symbol.iterator]);
// console.log(iterator);
// const iterator = james[Symbol.iterator]();

let iterator = {
  james: {
      name: 'James',
      height: `5'10"`,
      weight: 185
  },
  keys: Object.keys(james),
  count:0,

  next: function () {
    var key;
     if (true) {
        return {key:"teste", value: this.james["name"], done: false};
     } else {
        return {done:true};
     }
 }
};
// console.log(james.count);
// const jamesKeys = Object.keys(iterator.james);
console.log(iterator.keys); // 'James'
console.log(iterator.next()); // 185
console.log(iterator.next()); // `5'10`
console.log(iterator.next()); // 185
console.log(iterator.next()); // 185
  // jamesKeys: this.james.keys,
