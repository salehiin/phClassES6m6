// class have property & method

class Vehicle{
    constructor(name, price){ // property or attribute
        this.name = name;
        this.price = price;
    }
    move(){  // function is method
        console.log('gari chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

}

class Truck extends Vehicle {
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }

}

