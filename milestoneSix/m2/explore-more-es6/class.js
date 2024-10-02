// class is a template or blueprint help to make more object

const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000}
]


// class has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`) // function keyword shouldn't write in function same for variable not use var/let/const
    }
}
const lenovo = new Product('le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapan Sir', 'Physics')
console.log(tapan);

const rashid = new Teacher('Rashid', 'English')
console.log(rashid)