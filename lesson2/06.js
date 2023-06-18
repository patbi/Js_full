// trim()
// toUpperCase()
// toLowerCase()
// slice()

let lastName = "   Usefulstringmethods     ";


console.log(lastName.length);
lastName.trim();
console.log(lastName.length);

//

let newString = lastName.trim();
console.log(newString);
console.log(newString.length);


//

lastName = lastName.toUpperCase();
console.log(lastName);
lastName = lastName.toLowerCase();
console.log(lastName);


// start index
// end index

let firstName = "Thenavigo"
newString = firstName.slice(0, 4);
console.log(newString);
newString = firstName.slice(1);
console.log(newString);

