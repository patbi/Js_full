// objects
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {name: "thenavigo", age:25};
console.log(person);

const company = {
	name: "thenavigo",
	age: 25,
	people: ["ci", "mgr", "director", "c-level", "ceo"]
}


// how to access data from objects
console.log(person.name);
// console.log(person["name"]);
console.log(person.age);
console.log(company.people);
// how to add key value pair to objects
person.gender = "male";
console.log(person);


// Dot vs Bracket Notation
const k = "email";
const artist = {
	name: "hsjd",
	age: 24,
	"person hobbies": ["listening", "guitar", "running"]
}

console.log(artist["person hobbies"]);
console.log(artist.name);
artist.k = "test@test.test";
// artist["email"] = "test@test.test";
// artist[k] = "test@test.test";
console.log(artist);


// how to iterate object
const person2 = {
	name: "Esther",
	age: 25,
	"person hobbies": ["hobby1", "hobby2", "hobby3"]
}

// for in loop
// object.keys

for(let key in person2) {
	console.log(`${key} : ${person2[key]}`);
	// console.log(key, " : ",person2[key]);
	// console.log(key);
	// console.log(person2[key]);
}

console.log(Object.keys(person2));
console.log(typeof (Object.keys(person2)));
const val = Array.isArray((Object.keys(person2)));
console.log(val);

//
for(let key of Object.keys(person2)){
	console.log(key);
	console.log(person2[key]);
}

// Computed properties

const key1 = "objkey1"; 
const key2 = "objkey2"; 


const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
// 	objkey1 : "myvalue1",
// 	objkey2 : "myvalue2"
// }


// const obj = {
// 	key1 : value1,
// 	key2 : value2
// }

// const obj = {
// 	[key1] : value1,
// 	[key2] : value2
// }
const obj = {}

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// Spread operator in objects
const obj1 = {
	key1: "value1",
	key2: "value2",
};

const obj2 = {
	key1: "valueUniue",
	key3: "value3",
	key4: "value4",
};

// const newObject = {...obj1, ...obj2 };
// const newObject = {...obj2, ...obj1 };
// const newObject = {...obj2, ...obj1, key67: "value67" };
// const newObject = {..."abc" };
// const newObject = {...["item1", "item2"] };
const newObject = {..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);

// Object Destructuring

const users = {
	firstName: "led zepplin",
	lastName: "stairway to heaven",
	year: 1765,
	anothorFamousSong: "hdjssqs",
};
// const firstName = users.firstName;
// firstName = "queen";
// const lastName = users.lastName;
// console.log(firstName, lastName);

// ----------

// const { firstName, lastName } = users;
// console.log(firstName);

// --------
// let { firstName: var1, lastName: var2 } = users;
// console.log(var1);

// -------------
let { firstName, lastName, ...restProps } = users;
console.log(firstName);
console.log(restProps);


// Objects inside Array & Nested Destructuring
const arr = 
[
	{
		userId: 1, 
		firstName: "facebook", 
		lastName: "thenavigo"
	},
	{
		userId: 2, 
		firstName: "yahoo", 
		lastName: "twitter"
	},
	{
		userId: 3, 
		firstName: "linkedin", 
		lastName: "google"
	},
]
// console.log(arr);

for(let u of arr){
	console.log(u);
}

// ------
const [user1, user2, user3] = arr;
// const [{firstName}, , {lastName}] = arr;
// console.log(lastName);
console.log(user3);