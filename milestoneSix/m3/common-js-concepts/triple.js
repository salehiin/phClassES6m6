
// 1 == true - values are equal - type coercion/conversion/casting - like boolean value(0, 1)
// 1 === true - values are not equal
// 0 == false - values are equal - type coercion/conversion/casting - like boolean value(0, 1)
// 0 === false - values are not equal

const first = 2;
const second = '2';

if(first === second){
    console.log('Values are equal')
}
else{
    console.log('Values are not equal')
}

// equal comparison doesn't work for non-primitive data types
// check value for primitive data type
// check referrence for non primitive data type - not equal though they look same - 10:40 important
const fast = [];
const last = [];

// js compare two objects
// js compare two arrays

