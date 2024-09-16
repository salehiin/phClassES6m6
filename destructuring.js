// 30.7

const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01711111',
    money: 123456789
}
// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
// OR

const {phone, age: boyos, money} = actor  // both side should the same data type like; object = object


console.log(phone)
// console.log(name)
// console.log(age)
console.log(boyos)
console.log(money)


// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
// const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return[a*2, b*2]
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)


// 13:10 can skip a data by coma

// 30.8