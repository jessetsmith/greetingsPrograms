//Boolean
//boolean can represent: true/false, yes/no, on/off

let i = true;
let j = false; 

console.log(i);

// Null
// null = empty value. It is not 0, not undefined.
// It is like an empty container; nothing is in it, but it still exists as a space to fill

let empty = null;
console.log(empty);

// Undefined
// undefined = no alue assigned. Not even an empty container.
// undefined is NOT an error.

let undef = undefined; //never do this;
console.log(undef);

let grass;
console.log(grass);

// Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
// Strings are datatypes used to represent text and are wrapped in either single or double quotes.

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


// Objects

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
}

console.log(car);
console.log(typeof car);

// Array
// Arrays are containers that hold lists of items;

let list = ['item1', 'item2', 'item3'];
//   (1)  (2) (3)

// 1 - name of the array.
// 2 - square bracketsl.
// 3 - each item, regardless of data type are seqarated by commas.

let groceryList = ['milk', 'apples', 'cereal'];
console.log(groceryList);
console.log(typeof groceryList); //object

// addition vs concatenation
// check out JS coersion

let firstName = 'Jesse';
let lastName = 'Smith';
let buildingNumber = 93; 
let street = ' W Paz Dr.';
let apt = ' Apt. A';
let city = 'Greenwood';
let state = 'Indiana  ';
let zip = 46142;

console.log('My name is ' + firstName + ", " + "and I live at " + buildingNumber + street + apt + ", " + city + ", " + state + zip);


// Strings - Properties
/*
Properties are qualities associated with a dataType.
Strings have properties associated with that string.
E.g. the length of a string is a property.
*/

let myName = 'Jesse';
console.log(myName.length);

// Methods
// Methods are tools that can help us manipulate data.
//* .property = no parentheses;
//* .methods() = parentheses;

let myNameIs = "Jesse";
console.log(myNameIs.toUpperCase());

let home = 'Indianapolis';
console.log(home.includes('Indianapolis'));

let sent = "This sentence will be split into individual parts";
console.log(sent.split(''));
console.log(sent.split(' '));

