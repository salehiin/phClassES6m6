const numbers = [4, 5, 2, 8, 10];

const doubled = [];
for(const number of numbers){
    const double = number * 2;
    doubled.push(double)
}
console.log(doubled)

// OR

// map ==> loops through each element of the arrayand do the operation that you passed in the call back function and hold the result from each operation in array and finally returns you the array
const nums = [4, 5, 2, 8, 10];

function doubleIt(num){
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n*2;

const result = nums.map(doubleIt)
// console.log(result)

// OR 

const output = nums.map(double2)
// console.log(output);
const output2 = nums.map(n => n*2)