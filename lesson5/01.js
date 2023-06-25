// function sayHello() {
// 	console.log("hello there");
// }

// call,

// sayHello()

// arrow functions
// const sayHello = function() {
// 	console.log("hello there ...");
// }

// sayHello();

const sayHello = () => {
	console.log("Say Hello");
}
sayHello();

// function fourPlusTwo(props1, props2) {
// 	// console.log(4+8);
// 	// return 4+3;
// 	return props1 + props2;
// }
// console.log(fourPlusTwo());
// const returnedValue = fourPlusTwo(7, 2);
// console.log(returnedValue);
// console.log(3+2+undefined);

const fourPlusTwo = function(props1, props2) {
	return props1 + props2;
}

const res = fourPlusTwo(8, 2);
console.log(res);
// isEven 
function isEven(props) {
	if(props % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// function isEven(props) {
// 	return props % 2 === 0;
// }
console.log(isEven(2));

// function
// input : string
// output : firstcharacter

function firsChar(string) {
 	return string[0];
 } 
console.log(firsChar("abc"));


// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(arr, target) {
	for(let o = 0; o < arr.length; o++){
		if(arr[o] === target){
			return o;
		}
	}
	return -1;
}
const myArray = [1, 4, 9, 100];
const ans = findTarget(myArray, 8);
console.log(ans);

// hoisting

pat();

function pat() {
	console.log("Hi ...");
}

// console.log(hello);
// const hello = "hello there";
// console.log(hello);


// functions inside function
const app = () => {
	const myFunc = () => {
		console.log("hi ...");
	}

	const addFour = (props1, props2, props3, props4) => {
		return props1 + props2 + props3 + props4;
	}

	const mul = (num1, num2) => num1 * num2;

	console.log("inside app");
}	
app();



// lexical scope
const myVar = "value2";

function myApp() {
	// const myVar = "value2";
	function myFunc0() {
		// const myVar = "value77";
		const myFunc00 = () => {
			console.log("insid myFunc00-0", myVar);	
		}
		myFunc00();
	}
	const myFunc2 = function() {}
	const myFunc3 = () => {}
	console.log(myVar);
	myFunc0();
}
myApp();


// block scope vs function scope

// let and const are block scope
// var is function scope

// {
// 	let lastName = "Esther";
// 	console.log(lastName);
// }

// {
// 	let lastName = "Liz";
// 	console.log(lastName);
// }

// {
// 	const lastName = "Esther";
// 	console.log(lastName);
// }

// {
// 	const lastName = "Liz";
// 	console.log(lastName);
// }

// const lastName = "Elisabeth";
// console.log(lastName);


// {
// 	const lastName = "Esther";
// }
// console.log(lastName);

// {
// 	var lastName = "Esther";
// }
// console.log(lastName);


{
	var lastName = "Esther";
	console.log(lastName);
}

{
	console.log(lastName);
}


// if(true){
// 	let firstName = "pat";
// 	console.log(firstName);
// }
// console.log(firstName);

if(true){
	var firstName = "pat";
	console.log(firstName);
}
console.log(firstName);


// default parameter
function addTwo2(props1, props2) {
	if(typeof props2 === "undefined") {
		props2 = 0;
	}
	return props1 + props2;
}
const ans2 = addTwo2(7, 9);
console.log(ans2);

// -------
function sum(a, b=0) {
	return a + b;
}
const ans3 = sum(3, 1);
console.log(ans3);


// rest parameters
function restParams(a,b,...c) {
	console.log(`a is ${a}`);
	console.log(`b is ${b}`);
	console.log(`c is ${c}`);
}

restParams(3,4,5,6,7,8,9);


function addall(...arguments) {
	let total = 0;
	for(let argument of arguments){
		total = total + argument;
	}
	return total;
	// console.log(argument);
	// console.log(Array.isArray(arguments));
}
const ans4 = addall(1,2,3,4,5);
console.log(ans4);


// param destructuring - object - react

 const person = {
 	firstName: "Lisa",
 	age: 26,
 }

 // function getDetails(obj) {
 // 	console.log(obj.firstName);
 // 	console.log(obj.age);
 // }

 function getDetails({firstName, age}) {
 	console.log(firstName);
 	console.log(age);
 }

 getDetails(person);


 // callback functions
 function myCallbFunc2(name) {
 	console.log("inside my myCallbFunc 2");
 	console.log(`your name is ${name}`);
 }

 function myCallbFunc(callback) {
 	// console.log(callback);
 	console.log('hello i am a function and i call');
 	callback("pat");
 }
 myCallbFunc(myCallbFunc2);
 // myCallbFunc([1,2,3]);
 // myCallbFunc("abc");
 // myCallbFunc({name: "douala"});


 // Functions returning Functions
 function MyFunc() {
 	function hello(){
 		// console.log("hello pat");
 		return "hello pat";
 	}
 	// return [1,2,3];
 	// return {name: "sd", age: 20};
 	// return 1;
 	return hello;
 }
const resp = MyFunc();
// console.log(resp);
// resp();
console.log(resp());