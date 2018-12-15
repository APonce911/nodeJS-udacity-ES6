
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

let iterator = {
  james: james,
  keys: Object.keys(james),
  count:0,

  next: function () {
    if (this.count < this.keys.length) {
      let result = {key: this.keys[this.count], value: this.james[this.keys[this.count]], done: false};
      this.count++;
      return result;
    } else {
      return {done:true};
    }
  }
};

console.log(iterator.next()); // 185
console.log(iterator.next()); // `5'10`
console.log(iterator.next()); // 185
console.log(iterator.next()); // 185
