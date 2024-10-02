
// this module is about default value(parameter), if any value will not provided

function add(num1, num2=0 ){    // num=0 - is default value
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}
const sum = add(5, 7);
// const sum = add(5);
// const sum = add();

function fullName(first, last=''){
    const full = first + ' ' + last;
    return full;
}

function friends(numbs = []){

}
function person(human = {}){

}

// 30.3