/*
truthy:

falsy: 
*/

// Truthy --------------------------------------------------------
// 1. true

// 2. Any number(+ve. -ve) is truthy except 0
const u = -4;
const y = 0;

// 3. any string except empty string
const z = 's';
const w = '0';
const v = 'false';

// 4. any blank string
const b = ' ';

// 5. empty obje4ct
let s = {};
let t = {a:5, b:56};

// 6. empty array
let r = [];

// Falsy ----------------------------------------------------------
// 1. false

// 2. 0
const a = 0;

// 3 empty string
const b = '';

// 4 value of m undefined & undefined falsy
let m;
console.log(m);
if(m){
    console.log('value of m is truthy');
}
else{
    console.log('value of m is falsy');
}

// 5 null falsy
let n = null;

// -------------------------------------------------------------------------------------------

const x = false;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// optional

// check falsy - if value is falsy, then do something
const q = '';
if (!q){
    console.log('Value of q is falsy')
}
// check truthy - if value is truthy, then do something
const p = '';
if(!!p){
    console.log('Value of p is truthy');
}
