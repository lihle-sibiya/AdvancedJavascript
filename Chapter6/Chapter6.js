// function sayHello() {
//     let you = prompt("What's your name? ");
//     alert("Hello " + you + "!");
//     }
//     sayHello();

//Practice exercise 6.1

// let answerFirst = prompt("Give your firstNumber");
// let answerLast = prompt("Give your lastName");
// myName(answerFirst, answerLast);

// function myName(firstName, lastName) {

//     alert("Hi " + answerFirst + " " + answerLast);
// }

//Practice exercise 6.2

// let words1 = ["interesting", "kind", "beautiful"];
// userName();

// function userName(){
//     let name = prompt("Enter your name");
//     let words1Random = words1[Math.floor(Math.random() * words1.length)];
//     alert("Hello " + name + "! " + "You are very "  + words1Random + "!");
// }

//SPREAD OPERATOR
// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
//     }
//     let arr = [5, 9];
//     let arr2 = [6, 7];
//     addFourNumbers(...arr, ...arr2);

//Rest Parameter
/*function someFunction(param1, ...param2) {
    console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");*/

//Returning function values
/*let favoriteSubject = prompt("What is your favorite subject?");
console.log(favoriteSubject);*/

//Spread operator
/*function addTwoNumbers(x, y) {
    return x + y;
    }

    let resultsArr = [];
    for(let i = 0; i < 10; i ++){
    let result = addTwoNumbers(i, 5*i);
    resultsArr.push(result);
    }
    console.log(resultsArr);*/


//Practice exercise 6.4
/*function addTwoNumbers(x, y) {
    return x + y;
    }

    let resultsArr = [];
    for(let i = 0; i < 10; i ++){
    let result = addTwoNumbers(i*5, i*i);
    resultsArr.push(result);
    }
    console.log(resultsArr);*/


//Returning with arrow functions
//Will return 27
/*let addTwoNumbers = (x, y) => x + y;

let result = addTwoNumbers(12, 15);
console.log(result);*/

//Return if is multiple function
/*let addTwoNumbers = (x, y) => {
    console.log("Adding...");
    return x + y;
    }*/


//Local variables in functions
//x is undefined
/*function testAvailability(x) {
    console.log("Available here:", x);
    }
    testAvailability("Hi!");
    console.log("Not available here:", x);*/


//y is not defined
/*function testAvailability() {
    let y = "Local variable!";
    console.log("Available here:", y);
    }
    testAvailability();
    console.log("Not available here:", y);*/

//let versus var variables
//with var ::will print local
/*function doingStuff() {
    if (true) {
        var x = "local";
    }
    console.log(x);
}
doingStuff();*/

// with let: x undefinded
/*function doingStuff() {
    if (true) {
        let x = "local";
    }
    console.log(x);
}
doingStuff();*/

// use let: x not referenced. Used before declared
/*function doingStuff() {
    if (true) {
    console.log(x);
    let x = "local";
    }
    }
    doingStuff();*/


//use var : x not referenced: undefinded
/* function doingStuff() {
     if (true) {
     console.log(x);
     var x = "local";
     }
     }
     doingStuff();*/

//Global variable
/*let x = "global";
function doingStuff() {
    let x = "local";
    console.log(x);
}
doingStuff();
console.log(x);*/

//did not put let or var
/*function confuseReader() {
    x = "Guess my scope...";
    console.log("Inside the function:", x);
    }
    confuseReader();
    console.log("Outside of function:", x);*/

//Immediately invoked function expression
/*(function (num1, num2) {
    console.log(num1 + num2);
})(100,500);*/


//OWN practice
/*(function (digit1, digit2){
    console.log(digit1 * digit2);
})(6,5)*/

//Practice exercise 6.5
//1
/*let res = 1000;
(function (){

    let res = 2000;
    console.log(res);
})()

//2
//3. => arrow function
let result = (function (){

    let result = 2000;
    return result;
})()
console.log(result);

//4
(function(result){
console.log("My" + res )
})*/

//Recursive functions - getRecursive
/*function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }

}
getRecursive(3);*/

//logRecursive
/*function logRecursive(nr) {
    console.log(" Started function", nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("done with recursion");
    }
    console.log("Ended function:", nr);
}
logRecursive(3);*/

//Practice exercise 6.6
/*function calFactorial(nr) {
    if (nr > 0) {
        factorial += nr;
    }
    if (nr > 0) {
        calFactorial(--nr);
    }
}
let factorial = 1;
calFactorial(Number(prompt("Give me a number to calculate a factorial!")));
alert(`The factorial is ${factorial}`);*/


//Practice exercise 6.7
/*function countDown(count){
console.log(count);
if (count> 0)
{
    return countDown(--count);
}
}
countDown(10);*/


//Anonymous functions
//Practice exercise 6.8
/*let mathematics = function(num1){
    console.log("I love " + num1);
}
mathematics(6);*/

//Anonymous function CONT
/*let functionVariable = function () {
    console.log("Not so secret though.");
    };*/

    //Function callbacks
    // function doFlexibleStuff(executeStuff) {
    //     executeStuff();
    //     console.log("Inside doFlexibleStuffFunction.");
    //     }
    //     doFlexibleStuff(practice);

/*let practice = function(cal1, cal2){
    console.log(cal1 / cal2);
}

function doFlexibleStuff(executeStuff) {
    executeStuff(58,3);
    console.log("Inside doFlexibleStuffFunction.");
    }
    doFlexibleStuff(practice);*/


//setTimeout() function
/* let youGotThis = function () {
     console.log("You're doing really well, keep coding!");
     };
     //setTimeout(youGotThis, 1000);
//setInterval
     setInterval(youGotThis, 1000);*/
