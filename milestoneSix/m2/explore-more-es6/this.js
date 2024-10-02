

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
kodom.sleep();

const badam = new Person('Kacha badam', 23)
badam.sleep();

// bejal
const lazy = kodom.sleep;
lazy()

// explain this keyword in JS - chatGPT
// explain this keyword in JS class and other places - chatGPT