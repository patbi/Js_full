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

let y = 15;
let learn;

if(y >= 4) {
	learn = "Javascript";  
} else {
	learn = "Angular";
} 

console.log(learn);

// ternary operator / conditional operator

let z = 3;
let drink = z >= 7 ? "coffee" : "milk";
console.log(drink);


// and or operator

let lastName = "thenavigo";
let age = 22;

// if(lastName[0] === "t") {
// 	console.log("your name starts with t")
// }

// if(age > 19) {
// 	console.log("you are above 19");
// }

// if(lastName[0] === "t" age>19) {
// 	console.log("Name starts with t and above 19");
// } else {
// 	console.log("inside else");
// }

if(lastName[0] === "t" || age>19) {
	console.log("inside if");
} else {
	console.log("inside else");
}


// nested if else

let winningNumber = 23;
let userGuess = +prompt("Guess a number");
console.log(typeof userGuess, userGuess);
if(userGuess === winningNumber) {
	console.log("Your Guess is right !!");
} else {
	if(userGuess < winningNumber) {
		console.log("too low !!!");
	} else {
		console.log("too high !!")
	}
}



// Switch
let day = 2;
switch(day) {
	case 0:
		console.log("Sunday");
		break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	case 4:
		console.log("Thursday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Invalid Day");
}


// while loop - try don't repeat yourself 
let i = 0;

while(i<=3) {
	console.log(i);
	i++;
}
console.log(`current value of i is ${i}`);

// example 2

let num8 = 10;
let total = 0;
let b = 0;

while(b <= 100){
	total = total + b;
	b++;
}
console.log(total);


// intro to for loop
// print 0 to 9

for(let f = 0; f <= 9; f++ ) {
	console.log(f);
}


// example 2
let sum = 0;

let h = 100;

for(let s = 1; s <= h; s++) {
	sum = sum + s;
}
console.log(sum);


// Break and 
for(let u = 1; u <= 10; u++) {
	if(u===3) {
		break;
	}
	console.log(u);
}


//continue keyworld
for(let j = 1; j <= 10; j++) {
	if(j===3) {
		continue;
	}
	console.log(j);
}
console.log("hello there");

// do while loop

let k = 10;
do{
	console.log(k);
	k++;
}while(k <= 9);
console.log("value of k is ", k);