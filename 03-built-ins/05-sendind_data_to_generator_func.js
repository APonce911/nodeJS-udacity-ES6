function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let xy = generatorIterator.next().value;

// pass data in *and* get the next xy
xy = generatorIterator.next(`${xy} is cool!`).value;

// pass data in *and* get the next xy
xy = generatorIterator.next(`${xy} is awesome!`).value;

// pass data in *and* get the next xy
xy = generatorIterator.next(`${xy} is stupendous!`).value;

// you get the idea
xy = generatorIterator.next(`${xy} is rad!`).value;
xy = generatorIterator.next(`${xy} is impressive!`).value;
xy = generatorIterator.next(`${xy} is stunning!`).value;
xy = generatorIterator.next(`${xy} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${xy} is magnificent!`).value;

// displays each xy with description on its own line
positions.join('\n');

console.log(positions)
