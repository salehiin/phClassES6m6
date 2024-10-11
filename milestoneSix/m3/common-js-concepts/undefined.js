/**
 * 8 ways to get udefined
 * 
 * 
 * n 
 * 3. 
 */

// 1. variable that is not initialised will give undefined
let first;
// console.log(first);

// 2. function with no retur
function second(a, b){
    const total = a + b;
}
const result = second();
// console.log(result);

// 3. when the peremeter isn't passed
function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5)

// 4. if return isn't defined 
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b;
}
const total = noNegative(-2, 5);
// console.log(total);

// 5. if any property isn't in an object
const fifth = {id: 2, name: 'ponchom', age: 50}
// console.log(fifth.age, fifth.salary);

// 6. which index isn't present in array
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[100]);
console.log(sixth)

// 7. if delete this method it will make a empty space which is udefined, insteade delete use splice
delete sixth[1]; // 09:40 - important
console.log(sixth)
console.log(sixth[1], sixth[5], sixth[100]);

// 8. set a value directly to undefined
const eighth = undefined;

// don't use above instead use null;
const ninth = null;

// if data isn't set it will define by null
const data = {results: [], updated: null}

console.log(typeof undefined);
console.log(typeof null);