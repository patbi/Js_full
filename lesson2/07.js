// typeof operator

let age = 30;
let fullName = "Thenavigo";

console.log(typeof fullName);


// convert number to string
// 30 -> "30"
console.log(age + "");
console.log(typeof (age + ""));

// convert string to number
let myStr = +"30";
console.log(typeof myStr);

//

let myAge = "30";
myAge = Number(age);
console.log(typeof myAge);


// String concatenation
let string1 = "See-Docs &";
let string2 = " Thenavigo";

let fullName2 = string1 + string2;
console.log(fullName2);

// 
let string3 = "17";
let string4 = "10";

let newString = string3 + string4;
console.log(newString);
console.log(typeof newString);

let newString1 = +string3 + +string4;
console.log(newString1);
console.log(typeof newString1);

// template string
let lesson1 = "TypeScript";
let lesson2 = "Javascript";

//let aboutlessons = "first lesson is " + lesson1 + "and second lesson is " +lesson2;
let aboutlessons = `first lesson is ${lesson1} and second lesson is ${lesson2}`;
console.log(aboutlessons);

