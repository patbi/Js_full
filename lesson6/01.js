// import array methods

// forEach
const numbers = [6,8,5,7];

// function MyFunc(number, index) {
// 	console.log(`index is ${index} number is ${number}`)
// }
// numbers.forEach(MyFunc);

// numbers.forEach(function(a, i) {
// 	console.log(`index is ${i} number is ${a}`)
// });

// numbers.forEach(function(argument, index) {
// 	console.log(argument*3, index);
// })
const users = [
	{firstName: "Liz", age: 25},
	{firstName: "Mireille", age: 30},
	{firstName: "Alice", age: 22},
	{firstName: "Prisca", age: 28},
]

// for(let user of users){
// 	console.log(user.firstName);
// }

// users.forEach(function(user) {
// 	console.log(user.firstName);
// })

// users.forEach((user) => {
// 	console.log(user.firstName);
// })


// map
const square = function(sqr) {
	console.log(sqr*sqr);
}

// const squareNumber = numbers.map(square);
// const squareNumber = numbers.map((num) => {
// 	return num*num;
// });
const squareNumber = numbers.map((num, index) => {
	return `index: ${index}, ${num * num}`;
	// return index;
});
console.log(squareNumber);

const usersNames = users.map((user) =>{
	return user.firstName;
});
console.log(usersNames);


// filter
const isEven = function(arg) {
	return arg%2 === 0;
	// return arg%2 !=== 0;
}
const evenNumbers = numbers.filter(isEven);
// const evenNumbers = numbers.filter((nums) => {
// 	return num % 2 === 0;
// });
console.log(evenNumbers);


// reduce
const add = numbers.reduce((addition, currentValue) =>{
	return addition + currentValue;
}, 200);
console.log(add);

// addition, currentValue, return
// 6           8            14
// 14          5            19
// 19          7            26 


const userCart = [
	{productId: 1, productName: "phone", price: 6710},
	{productId: 2, productName: "tv", price: 65000},
	{productId: 3, productName: "laptop", price: 10905000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduce) =>{
	return totalPrice + currentProduce.price;
}, 0);

console.log(totalAmount);

// total price     currentValue    return

// 0               6710            6710
// 6710            


// Sort
// numbers.sort();
// numbers.sort((a,b) => a - b);
numbers.sort((a,b) => {
	return a - b;
	// return b - 1;
	// return b - a;
});
console.log(numbers);


// userCart.sort((a,b) => {
// 	return a.price-b.price;
// });
const lowToHigh = userCart.slice(0).sort((a,b)=> {
	return a.price-b.price;
});

// const highToLow = userCart.slice(0).sort((a,b)=> {
// 	return b.price-a.price;
// });
console.log(lowToHigh);



// find method
const myArray = ["Hi", "doggy", "catt", "lion"];

function isLength3(str) {
	return str.length === 3;
}

const ans = myArray.find(isLength3);
// const ans = myArray.find((str) => str.length===3);
console.log(ans);

const myUser = userCart.find((user)=>user.productId===1);
// const myUser = userCart.find((user)=>{
// 	return user.productId===1
// });
console.log(myUser);

// every method 
const resp = numbers.every((nums)=>nums%2===0);

// callback function ---> true / false (boolean)

// every method -------> true / false (boolean)
console.log(resp);

// check every produce < 7000
const ans2 = userCart.every((cartItem)=>cartItem.price < 7000);
console.log(ans2);


// some method
const ans3 = numbers.some((nums)=>nums%2===0);
console.log(ans3);

const ans4 = userCart.some((cartItem)=>cartItem.price > 300000);
console.log(ans4);

// fill method
