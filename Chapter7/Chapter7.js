// Classes and Objects

/*class Dog {
    constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
    }
    }
    let dog1 = new Dog("JavaScript", 2.4, "brown", "chihuahua");
    let dog2= new Dog("Spoti", 3, "black", "bhova");
    console.log(dog1.dogName, dog1.weight, dog1.color, dog1.breed);
    console.log(dog2.dogName, dog2.weight, dog2.color, dog2.breed);*/

//Constructors
/*class Person{
    constructor(firstname , lastname = "Doe") {
        this.firstname = firstname;
        this.lastname = lastname;
    } 
    }
    let p = new Person("Maaike", "van Putten");
    alert("Hi " + p.firstname + p.lastname);

    let p2 = new Person("Lihle", "Sibiya");
    alert("Hi " + p2.firstname + p.lastname);*/

//Practice exercise 7.1
//Same as above
/*class Person{
    constructor(firstname , lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    } 
    }
    let p = new Person("Maaike", "van Putten");
    alert("Hi " + p.firstname + p.lastname);
 
    let p2 = new Person("Lihle", "Sibiya");
    alert("Hi " + p2.firstname + p.lastname);*/

//Methods
class Person{
    firstname;
    lastname
    constructor(firstname , lastname = "Doe") {
        this.firstname = firstname;
        this.lastname = lastname;
    } 
    greet() {
        console.log("Hi there! I'm", this.firstname);
        }
    }
    let p = new Person("Maaike", "van Putten");
    alert("Hi " + p.firstname);
    p.greet();
 
    let p2 = new Person("Lihle", "Sibiya");
    alert("Hi " + p2.firstname)
    p2.greet();



//Getters and Setters
/*class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    get firstname() {
        return this.#firstname;
    }
    set firstname(firstname) {
        this.#firstname = firstname;
    }
    get lastname() {
        return this.#lastname;
    }
    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
let p = new Person("Lihle", "Sibiya");
console.log(p.firstname + " " + p.lastname);*/


//Inheritance
/*class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}*/
//Motorcyle class inheritance
/*class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
motor.accelerate(100);
motor.move();
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};*/

Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
    };

Person.prototype.favoriteColor = "green";
p = new Person ("Elizabeth" , "Dlamini");
console.log(p.favoriteColor);
p.introduce();

class Animal{
    constructor(sound){
        this.sound = sound;
    }
}
let a = new Animal("Grrr");
console.log(a.sound);
Animal.prototype.cry = function () {
    console.log("Ewww", this.sound);
    };