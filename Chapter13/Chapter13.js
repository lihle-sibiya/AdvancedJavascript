//concurrency
//Callbacks
/*function doSomething(callback) {
    callback();
}
function sayHi() {
    console.log("Hi!");
}
doSomething(sayHi);*/

/*function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
}
function getGrade(score, callback) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            console.log(score);
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    callback(grade);
}
getGrade(85, judge);*/

/*setInterval(encourage, 500);
function encourage() {
    console.log("You're doing great, keep going!");
}*/

//Practice exercise 13.1
/*let fullName = "Lihle Sibiya";
greeting(fullName,greet);

function greet(fullName){
console.log(`How are you doing ${fullName[0]} ${fullName[1]}`);
}

function greeting(fullName, callback){
    let nameArray = fullName.split(" ");
    callback (nameArray);
}*/

//Promises
/*let promise = new Promise(function (resolve, reject){
    let x = 5;
    if (x >10){
        resolve(x);
    } else {
        reject("Too low");
    }
});

promise.then(
    value=>console.log("Sucess:", value), error=>console.log("Error:", error)
);*/

//chain promise
//success : resolve
/*let promise = new Promise((resolve, reject) => {
    resolve("success!");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })*/


//reject : error: will only bring reject statement
/*let promise = new Promise((resolve, reject) => {
    reject("error!");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })*/

//Practice exercise 13.2
/*let promise = new Promise(function (resolve, reject) {
    resolve("Start Counting");
})
    .then(value => {
        console.log(value);
        return "One";
    })
    .then(value => {
        console.log(value);
        return "Two";
    })
    .then(value => {
        console.log(value);
        return "Two";
    })
    .then(value => {
        console.log(value);
    })*/

//async and await
/*function saySomething(x){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve(`something ${x}` );
        }, 2000);
    });
}
async function talk (x){
let words = await saySomething(x);
console.log(words);
}
talk(2);
talk(4);
talk(8);*/

//Practice exercise 13.3
//let counter = 1;
//function


/*let counter = 0;
function outputTime(value) {
return new Promise(resolve => {
setTimeout(() => {
counter++;
resolve(`x value ${value} counter:${counter}`);
}, 200);
});
}
async function aCall(value) {
console.log(`ready ${value} counter:${counter}`);
let res = await outputTime(value);
console.log(res);
}
for (let x = 1; x < 4; x++) {
aCall(x);
}*/

//Event loop
//Call stack and callback queue
/*console.log("Hi there");
add(4, 5);
function add(x, y) {
    return x + y;
}*/

/*console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
console.log(add(4, 5));
function add(x, y) {
    return x + y;
}*/

//timeout 0: still done last
/*console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 0);
console.log(add(4, 5));
function add(x, y) {
    return x + y;
}*/

//Quiz
//1. Fix the error in the following code to use the callback function:
//ANSWER: remove brackets when you call function addOne
/*function addOne(val) {
    return val + 1;
}
function total(a, b, callback) {
    const sum = a + b;
    return callback(sum);
}
console.log(total(4, 5, addOne));*/

//2
/*function checker(val) {
    return new Promise((resolve, reject) => {
        if (val > 5) {
            resolve("Ready");
        } else {
            reject(new Error("Oh no"));
        }
    });
}
checker(5)
    .then((data) => { console.log(data); })
    .catch((err) => { console.error(err); });*/

//3
//Add a function that returns a Promise. Using resolve and reject, return a
//JavaScript object with the Boolean of true or false to indicate the password
//validity status.

//ANSWER: FINALLY

//4. Update the below code to make the function return
// a Promise:
/*function myFun() {
    return "Hello";
}
myFun().then(
    function (val) { console.log(val); },
    function (err) { conole.log(err); }
);*/

//ANSWER
function myFun() {
    return new Promise(res=>res ("Hello"));
}
myFun().then(
    function (val) { console.log(val); },
    function (err) { conole.log(err); }
);

