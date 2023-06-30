//Regular expressions
//let text = "I love JavaScript!";
//null  cos case sensitive
//console.log(text.match(/javascript/));

//case insensitive out i
//console.log(text.match(/javascript/i));

//Specifying multiple options for words
//let text = "I love JavaScript!";
//console.log(text.match(/javascript|nodejs|react/i));

//will return only 1 if 2
//to find everything dont use match us somethng else
//let text = "I love React and JavaScript!";
//console.log(text.match(/javascript|nodejs|react/i));

//Global look
//let text = "I love React and JavaScript!";
//console.log(text.match(/javascript|nodejs|react/gi));

//Character options
//let text = "d";
//console.log(text.match(/[abc]/));
//or
//console.log(text.match(/[abcd]/));

//look a-d
//let text = "d";
//console.log(text.match(/[a-d]/));

//lowercase
//let text = "t";
//console.log(text.match(/[a-zA-Z]/));

//numbers
//console.log(text.match(/[a-zA-Z0-9]/));

//special character
// let text = "äé!";
//console.log(text.match(/[a-zA-Z0-9]/));

//can match any character
//let text = "Just some text.";
// console.log(text.match(/./g));

//backslash
//let text = "Just some text.";
//console.log(text.match(/\./g));

//let text = "I'm 29 years old.";
//console.log(text.match(/\d/g));

//\s, which matches all whitespace characters
//let text = "Coding is a lot of fun!";
//console.log(text.match(/\s/g));

//\b, which matches text only when it's at the beginning of a word
//let text = "In the end or at the beginning?";
//console.log(text.match(/\bin/gi));


//error cos match works on strings not numbers
//let nr = 357;
//console.log(nr.match(/3/g));

//groups
//let text = "I love JavaScript!";
//console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

//difficult repeating'
// let text = "I love JavaScript!";
//console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));

//repeating
//let text = "You are doing great!";
// console.log(text.match(/n?g/gi));



//look for all 123
//let text = "123123123";
//console.log(text.match(/(123)+/));

///(123)*a/
// let text = "123123123a";
//console.log(text.match(/(123)+a/));


//repeating with min and max
//let text = "abcabcabc";
//console.log(text.match(/(abc){1,2}/));


//Practical regex

//Searching and replacing strings
//case-insensitive search
//let text = "That's not the case.";
//console.log(text.search(/Case/i));

//replace
//let text = "Coding is fun. Coding opens up a lot of opportunities.";
//console.log(text.replace("Coding", "JavaScript"));

//replace with global modifier
//let text = "Coding is fun. Coding opens up a lot of opportunities.";
//console.log(text.replace(/Coding/g, "JavaScript"));



//Practice exercise 12.1 under html

//Practice exercise 12.3
/*        let answer = searchArgs(3, 10, 15, 100, 300);
        console.log(answer);
        function searchArgs() {
            let lastOne ="";
            for (i = 0; i < arguments.length; i++) {
                lastOne = arguments[i];
            }
            return lastOne;
        }*/


//JavaScript hoisting
// x = 5;
// console.log(x);
//var x;
//let will give error cos uninitialised variable
//let x;

//Using strict mode
// always "use strict";

//"use strict";
//var still works in strict mode
//x = 5;
//console.log(x);
//var x;

//use strict will make it an error
//"use strict";
//x = 5;
//console.log(x);

//Debugging
//Breakpoints

//Practice exercise 12.4
/*let val = 5;
val += adder();
val += adder();
val += adder();
console.log(val);
function adder() {
    let counter = val;
    for (let i = 0; i < val; i++) {
        counter++;
    }
    return counter;
}*/

//Error handling
/*try {
    somethingVeryDangerous();
} catch (e) {
    if (e instanceof TypeError) {
        // deal with TypeError exceptions
    } else if (e instanceof RangeError) {
        // deal with RangeError exceptions
    } else if (e instanceof EvalError) {
        // deal with EvalError exceptions
    } else {
        //deal with all other exceptions
        throw e; //rethrow
    }
}*/

/*try {
    trySomething();
    } catch (e) {
    console.log("Oh oh");
    } finally {
    console.log("Error or no error, I will be logged!");
    }*/

/*function somethingVeryDangerous() {
    throw RangeError();
    }*/


//Practice exercise 12.5
/*numCheck(100);
numCheck("abc");

function numCheck(value) {
    try {
        if (!isNaN(value)) {
            console.log("Received a number");

        }
        else {
            throw "This is not a number";
        }
    } catch (e) {
        console.log(e);
    }
    finally{
        console.log(`value is ${value}`);
    }
}*/

