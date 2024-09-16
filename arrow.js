

// function declaration
// function add(a, b){
//     const result = a + b;
//     return result;
// }
function add(a, b){
    // const result = a + b;
    return a + b;
}

// function expression
const add2 = function(a, b){
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;

const sum1 = add(3, 90);
console.log(sum1);
const sum2 = add2(4, 90);
console.log(sum2);
const sum3 = add3(5, 90);
console.log(sum3);
const multi = add4(1, 2, 3, 4);
console.log(multi);


// 30.5
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age; // object - as one parameter
const student = { name: 'ananta jalil', age: 40 };
const age = getAge(student);
console.log(age);

const speaker = { brand: 'JBL', price: 49, color: 'blue', size: 'small' }
const getPrice = (product) => product.price;
const price = getPrice(speaker);
console.log(price);
const getBrand = (product) => product.brand;
const brand = getBrand(speaker);
console.log(brand)
const getColor = (product) => product.color;
const color = getColor(speaker)
console.log(color);
const getSize = (product) => product.size;
const size = getSize(speaker);
console.log(size);

const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13]);
console.log(third);

const doubleIt = num => num * 2;  //single parameter - bracket not mandatory

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// Large arrow function. return keyword mandatory.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mullt = x * y * z;
    const result = sum + mult;
    return result;
}