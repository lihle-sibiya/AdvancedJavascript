//Built-In JavaScript Methods

/*let s = "Hello";
console.log(
s.concat(" there!")
.toUpperCase()
.replace("THERE", "you")
.concat(" You're amazing!")
);*/

//Global methods
/*let x = 7;
console.log(Number.isNaN(x));
//You can also write:
console.log(isNaN(x));*/

//decodeUri() and encodeUri()
/*let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);*/

//decodeUriComponent() and encodeUriComponent()
/*let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURIComponent(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURIComponent(encoded_uri);
console.log("Decoded:", decoded_uri);*/

//Practice exercise 8.1
/*let encodedString = "How's%20it%20going%3F";
let decodeString = decodeURIComponent(encodedString);
console.log(decodeString);
let encodedStringAgain = encodeURIComponent(decodeString);
console.log(encodedStringAgain);
let string = "http://www.basescripts.com?=Hello World";
let encodedString2 = encodeURIComponent(string);
console.log(encodedString2);*/





/*let arr = ["Maria", "Sean", "Sam", "Nicholas"];
function (checkLength (e)){
return(e.length > 5);
}
let arr2 = arr.filter(checkLength);
console.log(arr2)*/
//Practice OWN filter
/*let names = ["Thembelihle", 100, "Owe", 40, "Pearlygirl", "Matt"];
function findNames(array) {
    return (array.length <6);
}

let otherNames = names.filter(findNames);
console.log(otherNames)*/

//every method 
/*let arr = ["Maria", "Sean", 50, "Nicholas"];
function checkString (e){
return typeof e === "string";
}
let areAllString = arr.every(checkString);
console.log(areAllString)*/

//Replacing part of an array with another part of the array
/*arr = ["grapefruit", 4, "hello", 5.6, true];
//take index 3 and end before index 4
arr.copyWithin(0, 3, 4); 
console.log(arr);*/

//Copy 5.6 and true
/*arr = ["grapefruit", 4, "hello", 5.6, true];
//take index 3 and end before index 4
arr.copyWithin(0, 3); 
console.log(arr);*/


//didn't cut to end, just copied
/*let arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
console.log(arr);*/


//Mapping the values of an array
//**Arrow funciton => dont have to use return
/*let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);*/

/*let animals = ["lions", "birds", "tigers"];
let awesomeAnimals = animals.map(e=> "awesome "+e);
console.log(awesomeAnimals);*/


/*let shopping = ["food", "cosmetics", "clothes"];
let okShopping = shopping.map(e=> "nice "+e);
console.log(okShopping);*/


/*let shopping = ["food", "cosmetics", "clothes"];
let okShopping = shopping.map(function (e)){
return " nice" + e;
} 
console.log(okShopping);*/

//Practice exercise 8.2
/*let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"];
let uniquenames = names.filter(function (element, index, array){

console.log(index, element);
return index === array.indexOf(element);
})
console.log(uniquenames);*/

//Practice exercise 8.3
//arrow method =>
/*let array1 = [ 60, 5, 100, 8, 90];
let newArray = array1.map( x=> x * 2);
console.log(newArray);*/

//anonymous method
/*let array1 = [ 60, 5, 100, 8, 90];
let newArray = array1.map(function (x){
    return x * 2
 } 
)
console.log(newArray)*/

//Converting a string to an array
/*let result = "Hello Javascript";
let arr_result = result.split(" ");
console.log(arr_result);*/

/*let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);*/

/*let favoriteFruits = "strawberry#watermelon#grapefruit";
let arr_fruits = favoriteFruits.split("#");
console.log(arr_fruits);*/

//Converting an array to a string
/*let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);*/

//put space
/*let letters = ["a", "b", "c"];
let x = letters.join(" ");
console.log(x);*/

/*let letters = ["a", "b", "c"];
let x = letters.join('-');
console.log(x);*/

//put words
/*let letters = ["3", "2", "1"];
let x = letters.join(" is bigger than ");
console.log(x);*/


//Working with index and positions
//search method
/*let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

//not found = -1
//will retunr -1
let notFound = searchStr.search("JavaScript");
console.log(notFound);*/

// -1 not found
/*let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("Javascript");
console.log(pos);*/

/*let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);*/

//last indexOf
/*let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);*/

//Creating substrings
/*let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);*/

//Replacing parts of the string
/*let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);*/

//replace first hello
/*let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);*/

//lowercase
/*let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);*/


//toUpperCase
/*let caps = "hi how are you?";
let fixed_caps = caps.toLocaleUpperCase();
console.log(fixed_caps);*/

//The start and end of a string
/*let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);*/

/*let encouragement = "You are doing great, keep up the good work!";
let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);*/

/*let encouragement = "You are doing great, keep up the good work!";
let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);*/

/*let encouragement = "You are doing great, keep up the good work!";
let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);*/

//Practice exercise 8.4
/*let string = "thIs ToO ShAll paSs aGAiN";

console.log(stringValue(string));

function stringValue(str) {
    str = str.toLowerCase();
    let array = str.split(" ");
    let array2 = [];
    array.forEach(element => {
        let word = element.slice(0, 1).toUpperCase() + element.slice(1);
        array2.push(word);
    })

    return array2.join(" ");
}*/

//Practice exercise 8.5
//For loop
/*let letters = "I love JavaScript";
let vowels = ["a", "e", "i", "o", "u"];
letters = letters.toLowerCase();

for( i = 0; i<vowels.length; i++){
letters = letters.replaceAll(vowels[i], i);
}
console.log(letters);*/

//forEach loop
/*let letters = "I love JavaScript";
let vowels = ["a", "e", "i", "o", "u"];
letters = letters.toLowerCase();

vowels.forEach((element, index) => {
    letters = letters.replaceAll(element, index);
})

console.log(letters);*/


//Number methods

//Checking if something is (not) a number
/*let x = 34;
console.log(isNaN(x));
console.log(!isNaN(x));
let str = "hi";
console.log(isNaN(str));*/

//Checking if something is finite
/*let x = 3;
let str = "finite";
console.log(isFinite(x));
console.log(isFinite(str));
console.log(isFinite(Infinity));
console.log(isFinite(10 / 0));*/


//Checking if something is an integer
/*let x = 3;
let str = "integer";
console.log(Number.isInteger(x));
console.log(Number.isInteger(str));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(2.4));*/

//Specifying a number of decimals
/*let x = 1.23456;
let newX = x.toFixed(2);
console.log(x, newX);*/

//3 rou d off
/*let x = 1.23456;
let newX = x.toFixed(3);
console.log(x, newX);*/


//Specifying precision
/*let x = 1.23456;
let newX = x.toPrecision(2);
console.log(newX);*/

//This will log 1.235.
/*let x = 1.23456;
let newX = x.toPrecision(4);
console.log(newX);*/

//1331 not decimals, takes the first 4 numbers
/*let x = 1331.23456;
let newX = x.toPrecision(4);
console.log(newX);*/

//Math methods
//Finding the highest and lowest number
//highest
/*let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);*/

//lowest
/*let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);*/

/*let highestOfWords = Math.max("hi", 3, "bye");
console.log(highestOfWords);*/


//Square root and raising to the power of
//square root
/*let result = Math.sqrt(64);
console.log(result);*/

//power of 
//let result2 = Math.pow(5, 3);
//console.log(result2);

//Turning decimals into integers
/*let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));*/

//ceil
/*let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));*/

//negative
/*let negativeX = -x;
let negativeY = -y;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));*/

/*let x = -6.78;
let y = -5.34;
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));*/

//Practice exercise 8.6
/*let mathematics =Math.PI;
console.log(mathematics);

let value = 5.7;
console.log(value, Math.ceil(value));
console.log(value, Math.floor(value));
console.log(value, Math.round(value));

console.log(Math.random()*10);*/

/*let maxValue = 10;
let minValue = 0;
let randomMax = Math.floor(Math.random() * (maxValue - minValue) + minValue );
console.log(randomMax);

let maxValue1 = 10;
let minValue1 = 1;
let randomMax1 = Math.floor(Math.random() *(maxValue1 - minValue1) + minValue1 );
console.log(randomMax1);

let maxValue2 = 100;
let minValue2 = 1;
let randomMax2 = Math.floor(Math.random() *(maxValue2 - minValue2) + minValue2 );
console.log(randomMax2);*/

/*let maxValue = 10;
let minValue = 0;
let randomMax = Math.floor(Math.random(maxValue - minValue) + minValue );
console.log(randomMax);*/


/*for( i=0; i<100; i++){
    console.log(maximumNumber(1, 100));
}

function maximumNumber(minValue, maxValue){
return Math.floor(Math.random()* (maxValue - minValue) +minValue); 
 
}*/

//Date methods

//Creating dates
//using constructor
/*let currentDateTime = new Date();
console.log(currentDateTime);

//using built in method
let now2 = Date.now();
console.log(now2);

//1,000 milliseconds
let milliDate = new Date(1000);
console.log(milliDate);

//JS can convert to string
let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

//can also use a constructor
let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);*/

//Methods to get and set the elements of a date
/*let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

//setTime
d.setTime(1622889770682);
console.log(d);*/

//Parsing dates
/*let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);

//Converting a date to a string
console.log(d.toDateString());
//another method
console.log(d.toLocaleDateString());*/

//Practice exercise 8.7
let pastDate = new Date("December 15 2010");
console.log(pastDate)

//2
let months = ["January", "February", "March", "April", "May",
"June", "July", "August", "September","October", "November" ,"December"];

let day = pastDate.getDate();
let month = pastDate.getMonth();
let year = pastDate.getFullYear();

console.log(`${day} ${months[month]} ${year}` );