//Variables - basic: Declaring variables with let, var and const
// let firstname = "Maria";
// firstname = "Jacky";

// let nr1 = 12;
// var nr2 = 8;
// const pi = 3.14159;

// throws a TypeError
// const someConstant = 3;
// someConstant = 4;


//Data types - String
// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

//String and types
//Escape characters (\)***backslash can be used to ensure your interpreter doesn't see the 
//***single or double quote marks and end either string too early:

// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

//New line
// let str3 = "New \nline."
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

//Number variables
// let intNr = 1;
// let decNr = 1.5;
// let expNr = 1.4e15;

//BigInt
// let bigNr = 90071992547409920n;

// typeError
// let result = bigNr + intNr;

//Boolean and comparison
// let bool1 = false;
// let bool2 = true;
// console.log(typeof bool1)

//Symbol ===
//Symbol can be used when it is important that variables are not equal, ***
//***even though their value and type are the same
// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);

//Undefined
// let unassigned;
// console.log(unassigned);

// let terribleThingToDo = undefined;
// let lastname;
// console.log("Same undefined:", lastname === terribleThingToDo);

//null
//null is a special value for saying that a variable is empty or has an unknown value.
// let betterOption = null;
// console.log("Same null:", lastname === betterOption);

// let empty = null;

//Working out the type of a variable
// testVariable = 1;
// variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);


// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

//Converting data types
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let nullToNr = null;
// nullToNr = Number(nullToNr);
// console.log("null", nullToNr, typeof nullToNr);

// let strToNr = "";
// strToNr = Number(strToNr);
// console.log("empty string", strToNr, typeof strToNr);

// let strToNr2 = "hello";
// strToNr2 = Number(strToNr2);
// console.log(strToNr2, typeof strToNr2);

// let strToBool = "";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let strToBool2 = "false";
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + Number(nr2));

//Practice exercise 2.1
// let str1 = 'Laurence'; 
// let str2 = "Svekis"; 
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;


// console.log(typeof(str1));
// console.log(typeof(str2));
// console.log(typeof(val1));
// console.log(typeof(val2));
// console.log(typeof(myNum));

//Arithmetic operators
//Addition
// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2;

// let str1 = "Hello ";
// let str2 = "addition";
// let result2 = str1 + str2;

//Practice exercise 2.2
// const myName = "Maaike";
// const myAge = 29;
// const coder = true;
// const message = "Hello, my name is " + myName + ", I am " + myAge+" years old and I can code JavaScript: " + coder + "."; 
// console.log(message);


//Subtraction
// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

//Multiplication
// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

//Division
// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

//Exponentiation
// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

//Modulus
//Modulus is the operation in which you determine how much is left after dividing **
//***a number by another number in its entirety
//output is
//10 % 3 = 1
// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);


//Unary operators: 
//increment
// let nr1 = 4;
// nr1++;
// console.log(nr1);

//decrement
// let nr2 = 4;
// nr2--;
// console.log(nr2);

//Practice exercise 2.3
// let a = window.prompt("Value 1?");
// let b = window.prompt("Value 2?");
// a = Number(a);
// b = Number(b);
// let hypotenuseVal = ((a * a) + (b * b))**0.5;
// console.log(hypotenuseVal);


//Practice exercise 2.4
// let a = 4;
// let b = 11;
// let c = 21;
// a = a + b;
// a = a / c;
// c = c % b;
// console.log(a, b, c);


