

function sum(a, b, c){              // parameters
    console.log(arguments);         // [Arguments] { '0': 1, '1': 2, '2': 3 } - array like object                    
    console.log(arguments[2]);         // [Arguments] { '0': 1, '1': 2, '2': 3 } - can't use push                 
    console.log(typeof arguments);         // [Arguments] { '0': 1, '1': 2, '2': 3 } - array like object                    
    const args = [...arguments];         // [Arguments] { '0': 1, '1': 2, '2': 3 } - array like object                    
    console.log(args);         // [Arguments] { '0': 1, '1': 2, '2': 3 } - array like object                    
    const result = a + b + c;
    return result;
}

const total = sum(1, 2, 3, 4, 5);         // arguments
// console.log(total)
// console.log(typeof sum)
console.log(sum.length) // lenth means how many paremeters declared 