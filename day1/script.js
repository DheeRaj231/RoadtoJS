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
  };

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
// end
*/
