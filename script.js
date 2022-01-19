/*
//    DAY !    

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