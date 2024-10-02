
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000}
]

// map
const names = products.map(product => product.name)
console.log(names);
console.log(names[1]);

// forEach 
products.forEach(product => console.log(product.id))

// filter 
products.filter(product => console.log(product.price > 45000));
// to make an array it needs a variable name
const expensive = products.filter(product => product.price > 45000)
console.log(expensive)

// find 
const affordable = products.find(product => product.price < 50000);
console.log(affordable)

// reduce 
const total = products.reduce((accumulated, current) => accumulated + current.price, 0)
console.log(total)