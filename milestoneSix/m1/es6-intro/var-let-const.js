// var : no reason to use
// let : allow it to reassaign
// const : do not allow it to reassaign

const money = 25;
// money = 50; - not allowed
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;  // allowed
console.log(count)

const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7]; - not allowed
numbers[1] = 55;  // to change value inside the array
numbers.push(8, 9, 65) // to add value inside the array
console.log(numbers);

const student = {
    name: 'moyna pakhi',
    class: 12
}
// student = {name: 'kokil konthi'} - not allowed
student.name = 'moyur konthi' // to change value inside the object
console.log(student);

//loop
let sum = 0; // if use Const it will show error
for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + num; // OR 12:40 important to listem again
    // sum = sum + i;
}
console.log(sum);