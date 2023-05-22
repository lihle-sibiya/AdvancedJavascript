//Break and continue
/*let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "black",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];*/

//Break
// for (let i = 0; i < 10; i++) {
//      console.log(i);
//    if (i === 4) {
//    break;
//   }
// }

// for (let i = 0; i<cars.length; i++){
//     if (cars[i].year >=2020){
//         if (cars[i].color === "black"){
//             console.log("I have found my new car:", cars[i]);
//            // break;
//         }
//     }
// }

//Continue
// for (let car of cars){
//     if(car.color !== "black"){

//     continue;
//     }
//     if (car.year >= 2020) {
//     console.log("we could get this one:", car);
//     }
//     }

//CONTINUE: i++ after continue. [i] will remain 1
// let i = 1;
// while (i < 50) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
//     i++;
// }

//CONTINUE - i++ before continue
// let i = 1;
// while (i < 50) {
// i++;
// if ((i-1) % 2 === 0){
// continue;
// }
// console.log(i-1);
// }


// //Practice exercise 5.8
// let skipNumber = Number(prompt("Skip a number between 0 and 10"));
// let answer = " ";
// for (let i= 0; i<11; i++){
// if (i === skipNumber){
// continue;
// }
// answer += i;
// }

// console.log(answer);


//break, continue, and nested loops
let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
    ];

    // for (let i = 0; i < groups.length; i++) {
    //     let matches = 0;
    //     for (let j = 0; j < groups[i].length; j++) {
    //     if(groups[i][j].startsWith("M")){
    //     matches++;
    //     } else {
    //     continue;
    //     }
    //     if (matches === 2){
    //     console.log("Found a group with two names starting with an M:");
    //     console.log(groups[i]);
    //     break;
    //     }
    //     }
    //     }

//     for (let group of groups){
//         for (let member of group){
//         if (member.startsWith("M")){
//         console.log("found one starting with M:", member);
//         break;
// }
// }
// }

//break and continue and labeled blocks
// outer:
// for (let group of groups) {
// inner:
// for (let member of group) {
// if (member.startsWith("M")) {
// console.log("found one starting with M:", member);
//     break outer;
// }
// }
// }

// let step = 3;
// for (let i = 0; i < 1000; i += step) {
// if (i > 10) {
// break;
// }
// console.log(i);
// }

// const myArray = [1,5,7];
// for(el in myArray){
// console.log(Number(el));
// el = Number(el) + 5;
// console.log(el);
// }
// console.log(myArray);

//FOR IN LOOP
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };
//     for (let prop in car){
//     console.log(car[prop]);
//     }

//Practice exercise 5.7
// let cars = { model: "BMW",
//     make: "X5",
//     year: 2023,
// };
//  for (let prop in cars) {
//     console.log(prop,cars[prop]);
//  }


// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//     };
//     for (let prop in car){
//     console.log(car[prop]);
//     }

    //FOR IN LOOP
//     let arrKeys = Object.keys(car);
// console.log(arrKeys);

// console.log("new line *****")
//FOR OF LOOP
// for(let key of Object.keys(car)) {
//     console.log(key);
//     }


//Self-check quiz
//Number 2
const myArray = [1,5,7];
for(el in myArray){
console.log(Number(el));
el = Number(el) + 5;
console.log(el);
}
console.log(myArray);