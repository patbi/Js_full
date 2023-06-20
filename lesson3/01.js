// intro to arrays
// how to create arrays
// array indexing

// ordered collection

let books = ["js", "reactjs", "nextjs", "angular"];
console.log(books[2]);

let nums = [4,6,9,1,2,5];
console.log(nums);

let alltypes = [1,6,8,9, "nodejs", null, undefined];
console.log(alltypes);

//--------------

let fruits = ["orange", "banana", "tomato"];
let obj = {};
console.log(fruits);
console.log(typeof fruits);
console.log(Array.isArray(fruits));

console.log(typeof obj);
console.log(Array.isArray(obj));

fruits[2] = "apple";
console.log(fruits);


// array push pop shift unshift

// push
fruits.push("mango");
console.log(fruits);

// pop
fruits.pop();
console.log(fruits);
console.log(alltypes.pop());
// let poppedFruit = fruits.pop();
// console.log("popped fruits is", poppedFruit);

// unshift
fruits.unshift("grapes");
console.log(fruits);
fruits.unshift("thenavigo");
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);
// let removedFruit = fruits.shift();
// console.log("removed fruits is ", removedFruit);

// primitive vs reference data types
let num1 = 7;
let num2 = num1;
console.log("value is num1", num1);
console.log("value is num2", num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types
// array
let array1 = ["element1", "element2"];
console.log(array1);
let array2 = array1;
console.log(array2);

array1.push("element3");
console.log("after pushing new element to array1");
console.log("array1", array1);
console.log("array2", array2);

// how to clone array
// how to concatenate two arrays

let array3 = ["item1", "item2", "item3"];
let array4 = array3;
console.log(array3===array4);
//
let array5 = ["item1", "item2"];
// let array6 = array5.slice(0).concat(["item19", "item10"]);
let array6 = ["item1", "item2"];
array5.push("item3");
array7 = [].concat(alltypes);
console.log(array7);

console.log(array5===array6);
console.log(array5);
console.log(array6);

// spread operator
let array8 = [...array7];
console.log(array8);

let array9 = [...array5, "item19", "item10"];
console.log(array9);

let arry10 = [...array8, ...array9];
console.log(arry10);



// for loop in array
let str = ["elm1", "elm2", "elm3", "elm4", "elm5"];

for(let pat = 0; pat <= 10; pat++) {
	console.log(pat);
}
// console.log(str.length);
// console.log(str[2]);
// console.log(str[str.length-1]);

let str2 = [];
for(pat = 0; pat < str.length; pat++) {
	console.log(str[pat].toUpperCase());
}

for(pat = 0; pat < str.length; pat++) {
	str2.push(str[pat].toUpperCase());
}
console.log(str2);

// use const for creating array
const t = ["t1", "t2", "t3"];
t.push("t4");
console.log(t);

// while loop in array
const b = ["b1", "b2", "b3"];

let b2 = 0;
while(b2 < b.length){
	console.log(b[b2].toUpperCase());
	b2++;
}


// for of loop in array
const houses = ["h1", "h2", "h3"];
const houses2 = [];

for(let house of houses) {
	console.log(house);
}

for(let h of houses) {
	houses2.push(h.toUpperCase());
}
console.log(houses2);

for(let index in houses) {
	console.log(index);
	// console.log(houses[index]);
	// houses2.push(houses[index].toUpperCase());
}
// console.log(houses2);

// for(let i = 0; i < houses.length; i++) {
// 	console.log(houses[i]);
// }


// array destructuring
const arr = ["y1", "y2"];
let arr1 = arr[0];
let arr2 = arr[1];
console.log("value of arr1 ", arr1);
console.log("value of arr2 ", arr2);
//-----------
let [mylet1, mylet2] = arr;
console.log("value of mylet1 ", mylet1);
console.log("value of mylet2 ", mylet2);

