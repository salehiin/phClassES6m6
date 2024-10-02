const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 123, 
    isCleaned: true
};
console.log(glass);

// all property name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]
console.log(keys)

// all property values
const values = Object.values(glass);
// [ 'glass', 'golden', 123, true ]
console.log(values);

const entries = Object.entries(glass);
// Array of Array or two dimentional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 123 ],
//     [ 'isCleaned', true ]
// ]
console.log(entries);

delete glass.isCleaned;  // delete any proporty from an Object
console.log(glass)

const {name, isCleaned, ...shortGlass} = glass; // to make a new array without (name, isCleaned)
console.log(shortGlass);

// freeze
// Object.freeze(glass); // stop any modify
glass.source = 'Bangladesh';
glass.price = 50;
delete glass.color;
console.log(glass);

// sealed
Object.seal(glass); // can modify existing property but can't add or remove new property
glass.source = 'Bangladesh';
glass.price = 50;
delete glass.color;
console.log(glass);

// 30.9
