// primitive - pass by value - 13:40
let num1 = 5;
let num2 = 7;
function multiply(a, b){
    a = 27;                 // pass by value
    const result = a * b;
    return result;
}
console.log(num1)
const output = multiply(num1, num2);
console.log(output);

// non primitive - object and array are pass by reference - 13:40
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple1.partner = 'mim';
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);