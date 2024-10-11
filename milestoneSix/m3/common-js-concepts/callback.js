

function greetings(person){
    console.log(person);
}
const name = 'halim mama';
const numbers = [45, 54, 78];
const laptop = {price: 45000, brand: 'lenovo'};
greetings(name)
greetings(numbers)
greetings(laptop)

///////////////////////////////// - have to watch again
function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetMorning(name){
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name)
}


greeting(greetMorning, 'Tom Hanks')
greeting(greetMorning, 'Tom Brady')
greeting(greetEvening, 'Tom Solaiman')