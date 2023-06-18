// undefined
// null

let firstName;
// const firstName;
console.log(typeof firstName);
firstName = "Thenavigo";
console.log(typeof firstName, firstName);

// null
let myVariable = null;
console.log(myVariable);
myVariable = "See-Docs";
console.log(myVariable, typeof myVariable);
console.log(typeof null);


// BigInt
let myNumber = 123;
// consle.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);

let myNumber2 = BigInt(12);
let samemyNumber2 = 123n;
console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber2+ samemyNumber2);

// booleans & comparison operator

// booleans
// true, false

let num1 = 7;
let num2 = 9;

console.log(num1 <= num2);

// == vs ===
let num3 = "10";
// let num3 = 10;
let num4 = 12;

console.log(num3 == num4);
// console.log(num3 === num4);


// != vs !==

console.log(num3 != num4);
console.log(num3 !== num4);

console.log(num1 != num2);


// truthy and falsy values

// false
// ""
// null
// undefined
// 0


//  if else condition

let num = 40;

if(num >= 75) {
	console.log("user can use See-Docs");
} else {
	console.log("user can use Thenavigo");
}
//

let str = "";

if(str){
	console.log(str);
} else {
	console.log("str is empty");
}



// ternary operator
