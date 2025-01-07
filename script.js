/*
let js = "amazing";
//if (js === "amazing") alert("JavaScript is FUN!");
console.log(1 + 1 + 1 + 1);

let firstName = "Mücahit";
console.log(firstName);
let $function = 27; //$ for token as a variable
console.log($function);

let PI = 3.14;

let myFirstJob = "Programmer";
let myCurrentJob = "Student";

console.log(myFirstJob, myCurrentJob);

let country = "Turkey";
let continent = "Asia";
let population = 1;

console.log(country);
console.log(continent);
console.log(population);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//console.log(typeof true);
//console.log(typeof 23);
//console.log(typeof firstName);

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1996;
//birtYear = 1990;

//const job;

var job = "programmer";
job = "teacher";

lastName = "Yılmaz";
console.log(lastName);

const now = 2024;
const ageMucahit = now - 1996;
const ageJonas = now - 1991;
console.log(ageMucahit, ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2**3 means to the power of 3 = 2 * 2 * 2;

const firstName = "Mücahit";
const lastName = "Yılmaz";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

console.log(ageMucahit > ageJonas);


//Coding Challenge #1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let markBMI = massMark / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;
console.log("Mark BMI=" + markBMI);
console.log("John BMI=" + johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

const firstName = "Mücahit";
const job = "Student";
const birthYear = 1996;
const year = 2025;
const age = year - birthYear;

const mucahit = "I'm " + firstName + ", a " + age + " years old " + job + "!";

console.log(mucahit);

const mucahitNew = `I'm ${firstName}, a ${age} years old ${job}!`;

console.log(mucahitNew);

console.log(`just log to strings`);

console.log(`for \n\
multiple \n\
lines`);


const age = 8;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const inputYear = "1996";

console.log(inputYear + 18);

console.log(Number(inputYear) + 18);

console.log(inputYear);

console.log(typeof NaN);

console.log(" I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n--;
console.log(n);
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mücahit"));
console.log(Boolean({}));
console.log(typeof {});

console.log(Boolean(""));

const money = 0;

if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}


const age = "18";

if (age === 18) console.log("You just became an adult.(3=)");
console.log(Boolean(age == "18"));
console.log(Boolean(age === "18")); // this make sure both side equal types
if (age == 18) console.log("You just became an adult.(1=)");

const favouriteNumber = Number(
    prompt("What's your favourite number?(for check enter 4 or 23)")
);
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 4) {
    console.log("Cool! 4 is an amazing number!");
} else if (favouriteNumber === 23) {
    console.log("23 is also cool number");
} else {
    console.log("Number is not 4 or 23");
}

if (favouriteNumber !== 23) console.log("Why not 23?");



const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
    break;
}

//Switch case to if else

if (day === "monday") {
  console.log("Plan course structure");
  console.log("go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}



3 + 4;
1996;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2025 - 1996} years old ${23 > 10 ? "true" : "false"}`);
//console.log(`I'm ${2025 - 1996} years old ${23 > 10 ? const str = "23 is bigger" : "false"}`);

*/

"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

//const interface = "Audio";
//const private = 534;
*/

function logger() {
  console.log("My name is Mücahit");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
