let person1={
    name: 'Ron',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person2={
    name: 'Jenny',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person3={
    name: 'Jenna',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person4={
    name: 'Angie',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person5={
    name: 'Capone',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

class Person {
    constructor(name,city,age) {
        this.name=name;
        this.city=city;
        this.age=age;
    }

    greeting() {
        console.log(`Hey! My name is ${this.name}! I am ${this.age}, and I'm from ${this.city}.`)
    }
}

let p1= new Person('Ron','New York',48);
let p2= new Person('Jenny','Springfield',44);
let p3= new Person('Jenna','Miami',24);
let p4= new Person('Angie','St. Louis',47);
let p5= new Person('Capone','East Peoria',50);

p1.greeting();
p2.greeting();
p3.greeting();
p4.greeting();
p5.greeting();

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer=manufacturer;
        this.wheels=wheels;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels!`);
    }
} 

class Truck extends Vehicle {
    constructor(manufacturer,wheels,doors,bed) {
        super(manufacturer,wheels);
        this.doors=doors;
        this.bed=true;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels.  This vehicle has ${this.doors} doors and the bed for the truck is ${this.bed}.`)
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer,wheels,doors,size,mpg) {
        super(manufacturer,wheels);
        this.doors=doors;
        this.size=size;
        this.mpg=mpg;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels.  This vehicle has ${this.doors} doors and the mpg is ${this.mpg} for its size,${this.size}.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer,wheels,handleBars,noDoors) {
        super(manufacturer,wheels);
        this.noDoors=noDoors;
        this.handleBars=handleBars;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels.  This vehicle has ${this.noDoors} doors and has ${this.handleBars} handle bars.`)
    }
}

let v1= new Sedan('Honda',"4","4","normal","35")

v1.aboutVehicle();