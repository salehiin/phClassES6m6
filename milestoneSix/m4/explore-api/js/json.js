// JavaScript Object Notation(JSON)
// JSON.parse
// JSON.stringify - property-value all placed between double quotation except number & boolean

// JSON.stringify - JS array or object convert to JSON 
// JSON.parse - Json string convert to Js Object

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochukhet ',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 4500,
    isOpen: true,
    isNew: false
};
console.log(typeof shop, shop);  // an object

const shopJSON = JSON.stringify(shop);
console.log(typeof shopJSON, shopJSON); // a string
// OR
console.log(JSON.stringify(shop));

const shopObj = JSON.parse(shopJSON);
console.log(typeof shopObj, shopObj); // an object
// OR
console.log(JSON.parse(shopJSON));
