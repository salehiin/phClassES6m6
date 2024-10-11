

function kitchen(){
    let roast = 0;
    return function(){
        roast++;        // if a child function return, it can access the variable of parent function
        return roast;
    }
}

const firstServer = kitchen();

const secondServer = kitchen();

console.log(firstServer());
console.log(firstServer());
console.log(secondServer());
console.log(firstServer());


console.log(secondServer());
console.log(secondServer());
console.log(firstServer());
console.log(secondServer());
// if made more copies of parent function, every copy has the individual instance
// so the result will be: 1 2 1 3 2 3 4 4 i.e it will start from where it stopped



