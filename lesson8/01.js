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

// methods
// const userMethods = {
// 	about: function() {
// 		return `${this.firstName} is ${this.age} years old.`;
// 	}
// 	is20: function() {
// 		return this.age >= 20;
// 	}
// }

function createUser(
	firstName, 
	lastName,
	email,
	age,
	address
	) {
	const user = {};
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
const user5 = createUser(
		'firstName1',
		'lastName1',
		'email1@email1.email1',
		3,
		'address1'

	);
console.log(user5);
const is20 =  user5.is20();
const about = user5.about();
console.log(about);
console.log(is20);
// console.log(user5.about());