

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