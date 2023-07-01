// methods -
// function inside object

function InfosPerson() {
	console.log(`person lastName is ${this.lastName} and person age is ${this.age}`);
}

const person1 = {
	lastName: "Thenavigo",
	age:19,
	about: InfosPerson
	// about: function() {
	// 	// console.log(this);
	// 	console.log("function inside object");
	// 	// console.log(`function inside object lastName is ${this.lastName} and age is ${this.age}`);
	// }
}

const person2 = {
	lastName: "function",
	age:23,
	about: InfosPerson
	// about: function() {
	// 	// console.log(this);
	// 	console.log("function inside object");
	// 	// console.log(`function inside object lastName is ${this.lastName} and age is ${this.age}`);
	// }
}

const person3 = {
	lastName: "log",
	age:26,
	about: InfosPerson
	// about: function() {
	// 	// console.log(this);
	// 	console.log("function inside object");
	// 	// console.log(`function inside object lastName is ${this.lastName} and age is ${this.age}`);
	// }
}
// person.about();
// console.log(person.about);
// console.log(InfosPerson)
// InfosPerson();
person1.about();


// Window -
// "use strict";
function f() {
	// "use strict"
	console.log(this);
	// console.log("hello js");
}
f();
// window.f();

// Call, apply and bind method -
function sayHi() {
	console.log("Hi");
}
sayHi.call();

const book1 = {
	firstName: "js",
	age: 8,
	about: function(arg1, arg2) {
		console.log(this.firstName, this.age, arg1, arg2)
	}
}

const book2 = {
	firstName: "html",
	age: 12,
}

book1.about.call(book2, "test1", "test2");
// book1.about.call(book1, "test1", "test2");
// book1.about();


// Apply -
function Myfunc(arg1, arg2) {
	console.log(this.lastName, this.age, arg1, arg2)
}

const user1 = {
	lastName: "lastName1",
	age: 90,
}

const user2 = {
	lastName2: "lastName2",
	age: 27,
}
// Myfunc.call(user1, "football", "natation");
// Myfunc.apply(user1, ["f", "n"]);
const p = Myfunc.bind(user1, "u1", "u2");
p();

// Some warnings - 
// book1.about()
// const y = book1.about;
// y();



// arrow functions - 
const book4 = {
	firstName: "book4",
	age: 17,
	about: () => {
		console.log(this.firstName, this.age);
	}
}
book4.about(book4);

// Short syntax for methods - 


// const book4 = {
// 	firstName: "book4",
// 	age: 17,
// 	about(){
// 		console.log(this.firstName, this.age);
// 	}
// }
// book4.about();


// proto, prototype, class

const usern = {
	firstName: "firstName1",
	lastName: "lastName1",
	email: "email1@email1.email",
	age: 1,
	address: "adress1",
	about: function() {
		return `${this.firstName} is ${this.age} years old`
	},
	is20: function() {
		return this.age >= 20;
	}
}
const aboutUser = usern.about();
console.log(aboutUser);


// function (that function create object)

// methods - 
// const userMethods = {
// 	about: function() {
// 		return `${this.firstName} is ${this.age} years old.`;
// 	}

// 	is20: function() {
// 		return this.age >= 20;
// 	}
// }

// constructor function
function createUser(
	firstName, 
	lastName,
	email,
	age,
	address
	) {
	const user = {};
	// const user = Object.create(userMethods);
	// const user = Object.create(createUser.prototype);
	user.firstName = firstName;
	user.lastName = lastName;
	user.email = email;
	user.age = age;
	user.address = address;
	user.about = function() {
		return `${this.firstName} is ${this.age} years old.`;
	};
	user.is20 = function() {
		return this.age >= 20;
	}
	// user.about = userMethods.about;
	// user.is20 = userMethods.is20;
	return user;
}


// createUser.prototype.about = function() {
// 	return `${this.firstName} is ${this.age} years old.`;
// }

// createUser.prototype.is20 = function() {
// 	return this.age >= 20;
// }



const user5 = createUser(
		'firstName1',
		'lastName1',
		'email1@email1.email1',
		3,
		'address1'

	);
console.log(createUser.prototype);
console.log(user5);
const is20 =  user5.is20();
const about = user5.about();
console.log(about);
console.log(is20);
// console.log(user5.about());

// for(let key in user5){
// 	console.log(key);
// }


for(let key in user5){
	// console.log(key);
	if(user5.hasOwnProperty(key)){
		console.log(key);
	}
}
// - 
const obj1 = {
	key1: "value1",
	key2: "value2",
}

// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]


// prototype -

// const obj2 = {}
const obj2 = Object.create(obj1);
// console.log(obj2);
// another way to create empty object
obj2.key2 = "unique";
obj2.key3 = "value3";

// console.log(obj2.key1);
console.log(obj2.key2);
console.log(obj2);

console.log(obj2.__proto__);



// javascript function ===> function + object
function HiThenavigo() {
	console.log("Hello Thenavigo");
}

// const HiThenavigo ={key: "value7"};
// const HiThenavigo = ["value7"];

HiThenavigo.myOwnProperty = "own unique value"
// console.log(myOwnProperty);
console.log(HiThenavigo.myOwnProperty);

// name property ---> tells function name;

// function provides more useful properties

// HiThenavigo.prototype;
console.log(HiThenavigo.prototype);

// only functions provide prototype property
if(HiThenavigo.prototype){
	console.log("prototype is present");
}else {
	console.log("prototype is not present");
}


HiThenavigo.prototype.pm2 = "pm2";
HiThenavigo.prototype.uml = "uml";
console.log(HiThenavigo.prototype);
HiThenavigo.prototype.learn = function() {
	return "learn js full";
};
console.log(HiThenavigo.prototype);
// console.log(HiThenavigo.prototype.learn());



// New keyword
function createUser2(lastName, age) {
	this.lastName = lastName;
	this.age = age;
}
createUser2.prototype.about = function () {
	console.log(this.lastName, this.age);
}

const newUser = new createUser2("pat", 5);
console.log(newUser);

// __proto__
// official ecmascript document
// [[prototype]]


// -
// let numbers = [2,4,6];
// prototype
// prototype functions
// let numbers = new Array(2,4,6);
// console.log(Array.prototype);
// console.log(numbers);

let numbers = [2,4,6];
Object.getPrototypeOf(numbers);
console.log(Object.getPrototypeOf(numbers));
console.log(numbers);

//

function Hi() {
	console.log("Hi");
}
console.log(Hi.prototype);
Hi.prototype = [];
console.log(Hi.prototype);
Hi.prototype.push('2');
console.log(Hi.prototype);


// 2015 / es6
// class keyword
function function_name(arg1, arg2, arg3) {
	this.arg1 = arg1;
	this.arg2 = arg2;
	this.arg3 = arg3;
	return this
}

class class_name {
	constructor(arg1, arg2, arg3){
		this.arg1 = arg1;
		this.arg2 = arg2;
		this.arg3 = arg3;		
	}

	func1(argument) {
		// body...
	}

	func2(argument) {
		// body...
	}

	funcn(argument) {
		// body...
	}
}

// - 
class Books {
	constructor(name, author){
		this.name = name;
		this.author = author;
	}

	write(){
		return `${this.name} is best seller`;
	}

	isSuperGood(){
		return `${this.author} is the best`;
	}
}

const book15 = new Books("Thenavigo", "Pat");
console.log(book15);
console.log(book15.write());
console.log(book15.isSuperGood());

