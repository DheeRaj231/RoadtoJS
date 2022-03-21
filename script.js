// "use strict";

/*

//    DAY ! #fff

// DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = "Fun!";
console.log(typeof javascriptIsFun);

// "undefined datatype and variable"
let year;
console.log(year); //undifined variable
console.log(typeof year);//undifined datatype


// Note: there is a bug in javaScript, This bug is not resolved because of legacy reason
console.log(typeof null);  //output is Object

// let var and const

// let is used when we mutate a variable
age;
let age = 30;
age = 31;

// const is immutable variable which does not change
const PI = 3.14;//value cannot change

//var is mutable
var job = "programmer";
job = "dev";

// OPERATORS

const now = 2022;
const ageDhee = now - 2001;//arthimetic  operator to calculate  age
console.log(ageDhee);
ageDhee * 2, ageDhee / 10, 2 ** 3//Multiplication , Divison, Power
const firstName = "Dhee";
const lastName = "Raj";
console.log(firstName + lastName);//Concatination
console.log(typeof firstName);//typeof operator

//Assignment operators
let x = 10 + 5;
x += 10;//x=x+10 = 25
x *= 4;//x=x*4 = 100
x++;//x=x+1
console.log(x);

// comparison operator
console.log(firstName === lastName);
console.log(ageDhee >= 18);//>, < , >= , <=

// operator precedence

console.log(25 - 10 - 5);//left to right

let x, y;
x = y = 25 - 10 - 5;//assignment: right to left
console.log(x, y);

// Highest Precedence -> ()


*/
/*

#FFF   // DAY -> 2

// STRINGS AND TEMPLATE LITERALS

// EXAMPLE FOR TEMPLATE STRINGS
const firstName = "Dheeraj";
const birthYear = 2001;
const year = 2022;
const job = "programmer";

const Dheeraj = `Iam ${firstName},a ${year - birthYear} year old ${job}`;
console.log(Dheeraj);

// MULTI LINE STRING FORMAT USING TEMPLATE STRING
console.log(`multi
line
string`);

//CONTROL STRUCTURE If-else
const age = 15;

if (age >= 18) {
    console.log(`Dheeraj can start driving license🚗`);//EXECUTED ONLY IF() IS TRUE
} else {
    const yearLeft = 18 - age;
    console.log(`Dheeraj is too young wait another ${yearLeft} years`);
}

// TYPE CONVERSION || IMPLICIT
const inputYear = "1991";
console.log(Number(inputYear), inputYear);//convert string to number

console.log(Number("dheeraj"));//this gives op as NaN
console.log(typeof NaN);//type of NaN is number it means it is invalid number

console.log(String(25), 25);//string and number

//TYPE COERCION
console.log(`iam ` + 21 + ` years old`)//21 is automatically converted to string
console.log('23' - '10' - 3); //(-) converts string to number
console.log('23' + '10' + 3); // (+) converts everything to string

let n = '1' + 1;//'11'
n = n - 1;//11-1 = 10

//5 falsy values: 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('dhee'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all;");

} else {
    console.log('you shd get a job');//this will be the op

}

// EQALITY OPERATORS
const age = 18;
if (age === 18) { //strict eqality operator
    console.log("age equal");
}

console.log("18" == 19) //loose eqality
//avoide loose equality for less errors

//for Input

const favourite = prompt("enter the fav numb? ");//takes input only as string

if (favourite == 23) {//23=='23'
    console.log("cool");
}
console.log(typeof favourite);

if (favourite !== 23) {  //strict not equal to
    console.log('why not 23');
}

//LOGICAL OPERATORS
const hasDL = true; //A
const hasGoodVision = true;//B

console.log(hasDL && hasGoodVision);
console.log(hasDL || hasGoodVision);
console.log(!hasDL);

const isTired = false;//C
console.log(hasDL && hasGoodVision && isTired);

if (hasDL && hasGoodVision && !isTired) {
    console.log("you can drive");

} else {
    console.log("someone else should drive");
}


const avgDolphinScore = (96 + 108, 89) / 3;
const avgKoalasScore = (88, 91, 101) / 3;

if (avgDolphinScore > avgKoalasScore) {
    console.log("dolphins win!");
} else if (avgKoalasScore > avgDolphinScore) {
    console.log("kolas win!");
} else {
    console.log("its a draw match");
}
*/

// const { cpSync } = require("fs");N

// const { CONNREFUSED } = require("dns");

/*
// DAY 3 #fff #fff

// switch statement

const day = 'saturday';

  switch (day) {    //checks if day matchs and returns true or false
    case 'monday':
        console.log("ugh its monday");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write notes");
        break;
    case 'saturday':
    case 'sunday':
        console.log("enjoy the weekend");// no break
    default:
        console.log("not a valid input");
}//op:enjoy the weekend
//    script.js:203 not a valid input

//STATEMENT AND EXPRESSION

3 + 4 // expression produces value
true && false && !false

if (23 > 10) {  //statement which does not produce value
    const str = '23 is bigg'
}

//TERNARY OPERATOR
//condition ? if true : else ;
const age = 15;
age >= 18 ? console.log("i like to drink wine :-/") : console.log("ill drink water");

//ternary operator with template string
console.log(`i like to drinl ${age >= 18 ? (" wine :-/") : (" water")}`);

//tip calculator
let tip
let bill = 440;

const percentageEqualtoBill = (bill) * 15 / 100;
const percentageNotEqual = (bill) * 20 / 100;
const total15percenttip = percentageEqualtoBill + bill;
const total20percentBill = percentageNotEqual + bill;


bill >= 50 && bill <= 300 ? console.log(`the tip was ${percentageEqualtoBill}, and the total is ${total15percenttip}`) : console.log(`the tip was ${percentageNotEqual}, and the total is ${total20percentBill}`)

'use strict'; //use this to avoid errors/bugs

let hasDL = false;
const passTest = true;

if (passTest) hassDL = true;  //script.js:241 Uncaught ReferenceError: hassDL is not defined

if (hasDL) console.log("i can drive");

const interface = 'audio';//cant use because it is reserved word for feature
const private = 532;//private is reserved word too
//const if = 2; // if is keyword
*/
/*
// DAY - 4 #fff

'use strict';

// FUNCTIONS

function fruitProcessor(apple, oranges) { //arguements
    console.log(apple, oranges);
    const juice = `juice with ${apple} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5, 13); // capturing the return value and storing
console.log(applejuice);
console.log(fruitProcessor(3, 2));

// function declaration
function calcAge(birthYear) {  //HOSTING WORKS

    return 2022 - birthYear;
}
const age1 = calcAge(1991)
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) { //HOSTING DOES NOT WORK
    return 2022 - birthYear;//expression
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// ARROW FUNCTIONS
// does not support (this)
const calcAge3 = birthYear => 2037 - birthYear; //returns implicitly
console.log(calcAge3(2001));

const yearsUntilRetirement = birthYear => {
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    return retirement;
}

console.log(yearsUntilRetirement(1991));

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruits(fruit) { //called func
    return fruit * 4;
}

function fruitProcessor(apple, oranges) { //arguements
    const applePieces = cutFruits(apple); //calling fun
    const orangesPieces = cutFruits(oranges);
    const juice = `juice with ${applePieces} apples pices and ${orangesPieces} oranges pices.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const avgScore = (a, b, c) => (a + b + c) / 3;
const avgDolphin1 = avgScore(44, 23, 71);
const avgKolas1 = avgScore(65, 54, 49); //

function checkWinner(avgDolphin1, avgKolas1) {
    if (avgDolphin1 > avgKolas1) {
        return `dolphins win (${avgDolphin1} vs ${avgKolas1})`;

    } else
        return `kolas win (${avgKolas1} vs ${avgDolphin1})`
};

console.log(checkWinner(avgDolphin1, avgKolas1));
*/
/*
// DAY 5  #FFF

// ARRAYS

const cars = ['volvo', 'bmi', 'audi'];
console.log(cars.length);
cars[2] = 'bmw'; //replace
//cars = ['new','newarry']; this cant be done


const carsRelease = [1991, 2001, 2008];

const calcModel = function (year1) {
    return 2022 - year1;

}

const car1 = calcModel(carsRelease[0]);
const car2 = calcModel(carsRelease[1]);
const car3 = calcModel(carsRelease[2]);
console.log(car1, car2, car3);

const cartype = [cars[0], car1, 'yers old']
console.log(cartype);

// PUSH  
cars.push('tesla');//add elsement at last
console.log(cars);
// unshift

cars.unshift('mercedes'); //add at first
console.log(cars);

// remove elements
cars.pop(); //last
console.log(cars);

cars.shift(); //firsts
console.log(cars);

console.log(cars.indexOf('audi'));

if (cars.includes('volvo')) {
    console.log('volvo is good car');
}

//tip calculator

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.20);
    }
}
const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(tips, bill, total);
*/
/*
// DAY - 6 #FFF

// OBJECTS

const cars = {
  carName: "audi",
  model: 2006,
  speed: 360,
  otherCars: ["bmw", "benz", "volvo"],
  // calcModel: function (model) {
  //     return 2022 - model;
  // }
  calcModel: function () {
    this.modelAge = 2022 - this.model;
    return this.modelAge;
  },

  getSummary: function () {
    return `${this.carName} is a ${this.calcModel()} old car company`;
  },
};

console.log(cars.getSummary());
console.log(cars.calcModel());

console.log(cars.speed); //DOT OPERATOR
console.log(cars["carName"]);

const interstedObj = prompt("which property of cars u wanna know");
console.log(cars[interstedObj]);

cars["newObj"] = "new object added";
console.log(cars);

console.log(
  cars.carName +
    " has " +
    cars.otherCars.length +
    " sub cars and better one is  " +
    cars.otherCars[0]
);

// CHALLENGE

const mark = {
  name: "Mark",
  mass: 68,
  height: 1.69,
  calcBMI: function () {
    this.bMi = this.mass / (this.height * this.height);
    return this.bMi;
  },
};
console.log(mark.calcBMI());

const john = {
  name: "john",
  mass: 92,
  height: 1.92,
  calcBMI: function () {
    this.bMi2 = this.mass / (this.height * this.height);
    return this.bMi2;
  },
};
console.log(john.calcBMI());
mark.calcBMI() < john.calcBMI()
  ? console.log(`${mark.name}'s BMI is ${mark.calcBMI()} higher than john`)
  : console.log(`${john.name}'s BMI is higher than mark`);

// FOR LOOP

const Cars1 = {
  carName: "audi",
  model: 2006,
  speed: 360,
  otherCars: ["bmw", "benz", "volvo"],
};
console.log(Cars1.length);

const empty = []; // empty array
for (let i = 0; i <= 10; i++) {
  console.log(Cars1[i]); //accessing elements of array

  //filling array
  //empty[i] = typeof cars[i];
  empty.push(typeof Cars1[i]);
}

// shifting array from one to another
const yearnew = [1991, 2001, 2007, 2020];
const ag = [];

for (let i = 0; i < yearnew.length; i++) {
  ag.push(yearnew[i]);
}
console.log(ag);

// Nesting of Loop

for (let i = 1; i < 4; i++) {
  console.log(`-----main loop  ${i} `);

  for (let j = 1; j < 6; j++) {
    console.log(`sub loop ${j}`);
  }
}

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`wow ${rep}`);
  rep++;
}

// CHALLENGE

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bill = [12, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

for (i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  total.push(bill[i] + tip[i]);
}

// const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(bill, tip, total);
*/

// DAY - 7 ###fff

("use strict");

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);


///////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  // }; a

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
// en
*/
// ==============================================
// #fff DAY - 9

// document.querySelector(".container").addEventListener("click", function () {
//   document.querySelector(".container").style.backgroundColor = "black";
//   document.querySelector("#heading").style.color = "white";
//   document.querySelector("#heading").innerHTML = "You Clicked Me";
// });

// ================================================================
// ================================================================
// #fff  DAY 10

// document.querySelector(".click-me").addEventListener("click", function () {
//   document.querySelector(".display").classList.toggle("hidden");
// });

// div.classList; // returns all the class associtated to div
// div.classList.remove("class");
// div.classList.add("new_class");
// div.classList.toggle("class_name", condition); //toggles the class if the conditon is true

// //events are stored inside objects
// document.addEventListener("keydown", function (e) {
//   console.log(e); //it gives the list of events happend
// });

// ===========================================
// DAy - 11 #fff

// // selecting id
// const id = document.getElementById("score");
// // adding classList event
// dispatchEvent.classList.add("hidden");
// to hide something - .hidden{
//   display:none;
// }
// toggle function of classList
// player1.classList.toggle('active-player');
// player2.classList.toggle('active-player');//toggles the active-player class between two playerss

// DAY - 12 #FFF
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
DAY - 13 #FFF
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
///////////////////////////////////
// DATA STRUCTURE
// DAY - 14 #fff
// DESTRUCTURING ARRAY

// const cars = {
//   name: ["audi", "benz", "volvo"],
//   features: ["speed", "class", "control"],

//   order: function (name, features) {
//     return [this.name[name], this.features[features]];
//   },
// };

// let [first, , last] = cars.features;
// console.log(first, last);

// [first, last] = [last, first]; //switching  2 var
// console.log(first, last);

// const [fir, las] = cars.order(2, 0); //destructuring inside function
// console.log(fir, las);

// //nested array
// const nest = [1, 2, [3, 4]];
// const [i, , j, k] = nest;
// console.log(i, j, k);

// // Destructuring OBJECTS
// const { name: newCars, features: advantages } = cars;
// console.log(newCars, advantages);

// // ///////////////////////////////
// // DAY - 15 #fff
// // SPREAD OPERATOR(...)  *right side of =

// const newModel = [...cars.features, "color"];
// console.log(newModel);

// // copy array
// const mainModelCopy = [...cars.features];
// // join two array
// // const menu = [...cars.newModel, ...cars.mainModelCopy];

// // REst pattern
// // left side of =

// const [a, b, ...others] = [1, 2, 2, 3, 4];
// console.log(a, b, others);

///////////////////////
// coding challenge

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const player1 = [game.players[0]];
// // console.log(player1);
// const player2 = [game.players[1]];
// const [[gk, ...otherplayers]] = game.players;
// console.log(otherplayers);

// const allPlayers = [...player1, ...player2];
// const playerFinal = [...player1, "tiago", "coutino", "perscic"];

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// // 7.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// // CODING CHALL -2

// for (const [i, player] of game.scored.entries())
//   console.log(`goal ${i + 1}: ${player}`);

// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of Object.values(game.odds)) avg += odd;
// avg /= odds.length;
// console.log(avg);

// // //////////////////////////////
// // //  DAY - 16 #fff

// // // for of loop
// // const menu = [...cars.name, ...cars.features];

// // for (const items of menu) console.log(items);

// // for (const [i, el] of menu.entries()) {
// //   console.log(`${i}: ${el}`);
// // }

// const orderDay = ["mon", "tues", "fri", "sun"];
// const openingHours = {
//   [orderDay[1]]: {
//     open: 12,
//     close: 22,
//   },
//   [orderDay[2]]: {
//     open: 11,
//     close: 23,
//   },
//   [orderDay[3]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   orderDay,
//   openingHours,
// };

// // OPTIONAL Chaining ?. if value is not found it returns undefined

// // if (restaurant.openingHours && restaurant.openingHours.mon)
// //   console.log(restaurant.openingHours.mon.open);

// // OPTIONAL Chaining menthod
// console.log(restaurant.orderDay.mon?.open);

// const days1 = ["mon", "sat", "tues", "fri", "sun"];

// for (const day of days1) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day},we open at ${open}`);
// }
// // optional chaining works on both methods and arrays.

// LOOPING OBJ
// for (const day of days1) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // entire obj
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

//  DAY - 17 #fff
// sets

// const calcSet = new Set(["add", "sub", "mul", "div"]);
// console.log(calcSet.size);

// for (const orde of calcSet) console.log(orde);

// const lang = ["sas", "js", "css", "bootstrap", "xml"];
// const snewlang = [...new Set(lang)];
// console.log(snewlang);

// // MAPS

// const calc = new Map();
// calc.set("name", "namastako");
// calc.set(true, "calcus");
// console.log(calc.set(2, "ksus"));
// calc.set(["add", "sub", "mul", "div"]).set("2", "3", "5");

// console.log(calc.get(true));

// // map iteration
// // instead of set

// const test = new Map([
//   ["question", "toughest option"],
//   [1, "front end"],
//   [2, "backend"],
//   ["correct", 2],
//   [true, "correct"],
//   [false, "false ans"],
// ]);
// console.log(test);

// console.log(Object.entries(test));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(test.get("question"));
// for (const [key, value] of test) {
//   if (typeof key === "number") console.log(`${key}:${value}`);
// }
// const answer = 3; //Number(prompt("ur ans?"));
// console.log(answer);
// console.log(test.get(test.get("correct") === answer));

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// gameEvents.delete(64);
// console.log(events);

// console.log(`an event happnd on avg ${90 / gameEvents.size} minutes`);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "first" : "second";
//   console.log(`[${half} half] ${min}:${event}`);
// }

///////////////////////////////////////////
// DAY _ 18 #fff

// const name = "Dheeraj name";
// console.log(name.slice(2));
// console.log(name.indexOf("j"));
// console.log(name.slice(0, name.indexOf(" ")));

// const checkHighGrades = function (mark) {
//   const g = mark.slice(-1);
//   if (g === "A" || g === "B") console.log("you got good marks");
//   else console.log("oops u got less marks");
// };
// checkHighGrades("92A");
// checkHighGrades("36C");
// checkHighGrades("61B");

// console.log(name.toLowerCase());
// const studentName = "dwadw"; // prompt("enter student name:");

// const correctingName = function (studentName) {
//   const studentNameLower = studentName.toLowerCase();
//   const studentNameCorrectName =
//     studentNameLower[0].toUpperCase() + studentNameLower.slice(1);
//   console.log(studentNameCorrectName);
//   const trimmedName = studentNameCorrectName.trim();
// };
// correctingName(studentName);

// // replacing

// const totMark = "290,97A";
// const percentMark = totMark.replaceAll("A", "%");
// console.log(percentMark);

// // SPLIT  method

// const [firstName, lastName] = "dheeraj kumar".split(" ");
// console.log(lastName);

// const joi = ["hey", firstName, lastName.toLocaleLowerCase()].join("-");
// console.log(joi);

// // padding

// console.log("dhee".padStart(10, "+"));
// console.log("dhee".padEnd(10, "+"));

// const creditCard = function (numb) {
//   const stra = numb + "";

//   const last = stra.slice(-4);
//   console.log(last.padStart(stra.length, "*"));
// };
// creditCard(23873963987);
// creditCard("8638998e79390");

// // const challenge = prompt("enter the string :");
// const check = function (challenge) {
//   const inp = String(challenge);

//   const place = inp.indexOf("_");
//   const upper = indexOf(inp[place + 1].toUpperCase());
//   const correct = inp.replace(`${place},${upper}`);
//   console.log(correct);
// };
// console.log(check("last_name"));
////////////////////////

// DAY -19 #fff
//
// functions==========================
// const pArray = [];

// const protfolio = function (fullName, marks = "100", age = "21") {
//   //default parameter
//   const obj = {
//     fullName,
//     marks,
//     age,
//   };
//   console.log(pArray);
//   pArray.push(obj);
// };

// protfolio("adad");

// const flight = "LH123";
// const dhee = {
//   name: "dheeraj kumar",
//   passport: 32332232,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH038";
//   passenger.name = "Mr " + passenger.name;

//   if (passenger.passport === 32332232) {
//     console.log("check in");
//   } else {
//     console.log("bye");
//   }
// };

// checkIn(flight, dhee);
// console.log(flight);
// console.log(dhee);

// // is same as doing ...
// const flightNum = flight;
// const passenger = dhee;

// const newPassword = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };
// newPassword(dhee);
// checkIn(flight, dhee);

//////////////////////////////
// ------------FUNCTIONS

// data abstraction
// const oneWord = function (str1) {
//   return str1.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str1) {
//   const [first, ...other] = str1.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };

// const merg = function (str, fn) {
//   console.log(`originl string : ${str}`);
//   console.log(`transformed string : ${fn(str)}`);
//   console.log(`transforemed by ${fn.name}`);
// };

// merg("dheeraj is best", oneWord);
// merg("dheeraj is best", upperFirstWord);

// // js use callback all the time
// const hi = function () {
//   console.log("hsijods");
// };

// document.body.addEventListener("click", hi);

// // functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const newGreet = greet("good evening");
// newGreet("dheeraj");

// greet("hey")("dheeraj");

// const kingfisher = {
//   airline: "kingfisher",
//   fcode: "KF",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.fcode}${flightNum}`
//     );

//     this.bookings.push({ flight: `${this.fcode}${flightNum}`, name });
//   },
// };

// kingfisher.book(343, "dheeraj sharma");

// const asiaAir = {
//   airline: "asiaAir",
//   fcode: "aa",
//   bookings: [],
// };

// const book = kingfisher.book;

// // manupulating this keyword using call method
// // book.call(asiaAir, 33, "amsterda"); //this->asiaAir
// // console.log(asiaAir);

// // book.call(kingfisher, 11, "ajnj"); //this->asiaAir
// // console.log(asiaAir);

// // apply method similar to call but take array of arguements
// const flightData = [587, "new person"];
// book.apply(asiaAir, flightData); // book.call(asiaAir,...flightData)
// console.log(asiaAir);

// /////////////////////   bind

// // book.call(asiaAir, 33, "amsterda");

// const bookaA = book.bind(asiaAir); //this keyword is present in asiaAir
// bookaA(22, "stev");

// // bind with event listeners

// kingfisher.planes = 300;
// kingfisher.buyBlane = function (e) {
//   e.preventDefault();
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// asiaAir.buyBlane;
// document
//   .querySelector(".buy")
//   .addEventListener("click", kingfisher.buyBlane.bind(kingfisher));

//partil apps
// const addTAX = (rate, value) => value + value * rate;
// console.log(addTAX(0.3, 200));

// const GST = addTAX.bind(null, 0.22);
// console.log(GST(100));

// challenge

// const poll = {
//   question: "what is ur fav prog lang? ",
//   options: ["0:JAvascript", "1:Python", "2:Rust", "3:C++"],
//   answers: new Array(4).fill(0),
//   registerNewAAnswer: function () {
//     const ip = Number(prompt(`${this.question} \n ${this.options}`));
//     console.log(ip);

//     typeof ip === "number" && ip < this.answers.length && this.answers[ip]++;
//   },
// };
// document
//   .querySelector("buy")
//   .addEventListener("click", poll.registerNewAAnswer.bind(poll));

///////////////////////////
// DAY - 20 #fff

//  IIFE

// (function () {
//   console.log("immediatly invoked fun exp");
// })();

// closures

// let f;

// const g = function () {
//   const a = 18;
//   f = function () {
//     console.log(a * 3);
//   };
// };

// const h = function () {
//   const b = 888;
//   f = function () {
//     console.log(b * 5);
//   };
// };

// g();

// f();
// // reassigning f fun
// h();
// f();
// console.dir(f);

// const dheex = function (n, wait) {
//   const sattilite = n * 27;

//   setTimeout(function () {
//     console.log(`We are lunching ${n} satttilite`);
//     console.log(`there are ${sattilite} components`);
//   }, wait * 1000);
//   console.log(`The ROCKET is going to launch in 🔥 T-${wait} seconds 🚀🚀🚀`);
// };

// dheex(3, 5);

// (function () {
//   const header = document.querySelector("h1");
//   // header.style.color = "red";
//   console.log(header);
// })();

////////////////////////////////////
//  DAY- 21 #fff

// maps

// const dheeArray = [2, 3, -54, 32, -21, 4, 5];

// const rupeeToUSD = 64.4;

// const changeUSD = dheeArray.map(function (ch) {
//   return ch * rupeeToUSD;
// });

// console.log(dheeArray);
// console.log(changeUSD);

// const user = "Dheeraj Khan Roy";

// // filter (condition)

// const deposits = dheeArray.filter(function (ch) {
//   return ch > 0;
// });
// console.log(dheeArray);
// console.log(deposits);

// const withdrawl = [];
// for (const ch of dheeArray) if (ch < 0) withdrawl.push(ch);
// console.log(withdrawl);

// // reduse

// const bal = dheeArray.reduce(function (accumulator, cur, i, arr) {
//   return accumulator + cur;
// }, 0);
// console.log(bal);

// challenge map filter reduse

// const dogSet1 = [5, 2, 4, 1, 15, 8, 3];
// const dogSet2 = [16, 6, 10, 5, 6, 1, 4];

// const dogHumanAge = dogSet1.map(function (ch) {
//   const humanDAge = dogSet1 <= 2 ? 2 * ch : 16 + ch * 14;
//   //   const humanDAge = 2 * ch;
//   //   return humanDAge;
//   // } else {
//   //   const humanDAge = 16 + ch * 14;
//   //   return humanDAge;
//   // }
// });
// console.log(dogSet1);
// const humanDAge = function (ages) {
//   const dogHumanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(dogHumanAge);
//   const adult = dogHumanAge.filter((age) => age >= 18);
//   const avg = adult.reduce((acc, age, i, arr) => acc + age / arr.length);
// };
// humanDAge(dogSet1);

// find method  - used to find one ele of array

// const accounts = {
//   owener: "dheraj",
// };

// const account = accounts.find((acc) => acc.owener === "dheeraj");
// console.log(account);

// findindex
// const index = dheeArray.findIndex((ch) => ch.dheeArray[1] === dheeArray[1]);

//////////////////////////////////////
//  DAY-21 #fff

("use strict");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

//  numbers

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

// DAY -22 #fff

// dates

const dob = new Date(2001, 01, 24, 15, 23);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(0));
console.log(new Date(2 * 24 * 60 * 60 * 1000));
console.log(dob.getTime());

console.log(new Date(983008380000));

// setTimeout()

setTimeout(() => console.log("after 3 sec "), 3000);
console.log("waiting");

// setInterval

setInterval(function () {
  const n = new Date();
  console.log(n);
}, 1000);

///////////////////////////////////////
//  DAY - #fff

// OOPS concepts
("use strict");

/*
///////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('Hey there ');
  console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
