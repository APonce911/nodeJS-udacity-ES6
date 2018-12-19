function* createSundae() {

    // console.log("enter the createSundae function");

    const toppings = [];
    // console.log("post toppings array definition")
    // console.log(toppings);
    // yield
    toppings.push(yield);
    // console.log(toppings);
    toppings.push(yield);
    toppings.push(yield);

    return toppings;
}

var it = createSundae();
console.log(it.next('hot fudge'));
console.log(it.next('sprinkles'));
console.log(it.next('whipped cream'));
console.log(it.next());
