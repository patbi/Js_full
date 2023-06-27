// Iterables -
// const lastName = "Thenavigo";
// for(let char of lastName){
// 	console.log(char);
// }

// const str = ["str1", "str2", "str3"];
// for(let s of str){
// 	console.log(s);
// }

// const values = {'key1': 'value1', 'key2': 'value2'}
// 	for(let value of values){
// 		console.log(value);
// 	}

const languages = "javascript";
console.log(languages.length);
console.log(languages[3]);


// Sets - 
const strings = new Set(["str1", "str2", "str3", "str3"]);
console.log(strings);
console.log(strings[2]);

const str = new Set("bcu");
str.add("p");
str.add("z");
str.add(strings);
str.add(['item1', 'item2']);
if(str.has("p")){
	console.log("p is present")
}else{
	console.log("p is not present")
}
console.log(str);

// for(let string of str){
// 	console.log(string);
// }

const MyArr = ["one", "two", "two", "three", "four", "five", "six"];
const uniqueElements = new Set(MyArr);
// console.log(uniqueElements);
let length = 0;
for(let element of uniqueElements){
	length++
}
console.log(length);

// Map -
const fruits = {
	name: "mango",
	color: "green",
	1: "two"
}
console.log(fruits['1']);
// console.log(fruits.name);
// console.log(fruits['color']);
for(let key in fruits){
	console.log(typeof key);
}

const learner = new Map();
learner.set('lastName', 'Alice');
learner.set('age', 25);
learner.set(1, "one");
learner.set([1,2,3], "onetwothree");
learner.set({1: 'one'}, "one");
console.log(learner);
// console.log(learner['lastName']);
console.log(learner.get('lastName'));
console.log(learner.get(1));
console.log(learner.keys());
for(let key of learner.keys()){
	console.log(key, typeof key);
}

// for(let k of learner){
// 	console.log(Array.isArray(k));
// }

for(let [key, value] of learner){
	console.log(key, value);
}

const person = new Map([['fullName', 'ludovic'], ['age', 24]]);
console.log(person);


const infosPeople = {
	id: 2,
	lastName: "stephanie"
}

const userInfo = new Map();
const extraInfo = new Map();
userInfo.set(infosPeople, {age: 23, gender: 'female'});
extraInfo.set(infosPeople, {age: 27, gender: "female"});
console.log(userInfo);
console.log(extraInfo.get(infosPeople).gender);
console.log(infosPeople.id);

// Object assign -
const object1 =  {
	key1: "value1",
	key2: "value2"
}

const obj = object1;
// const obj = {...object1}
// const obj = Object.assign({}, object1);
object1.key3 = "value3";
console.log(object1);
console.log(obj);



// Optional chaining -
const user = {
	firstName: "John",
	address: {houseaddress: '567889'}
}
console.log(user?.firstName);
console.log(user?.address);
console.log(user?.address?.houseaddress);