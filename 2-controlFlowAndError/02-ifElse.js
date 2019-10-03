let weather = 75;

if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
};

let myName = 'Jesse';

if (myNname = 'Jesse') {
    console.log (myName);
} else {
    console.log ('Hello, what is your name?');
};


if (myName = 'Jesse') {
    console.log ('Hello, my name is ' + myName + '.');
} else {
    console.log ('Hello, is your name ' + myName + '?');
}; 



let name = 'aUTuMN';

if (name[0] == name[0].toUpperCase()) {
    console.log('aUTuMN');
} else {
    console.log('Hey, it is not written correctly.');
};

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0];
    console.log(name[0] == first );
} else {
    let otherLetters = name.slice(1).toLowerCase();
    console.log(otherLetters);
};

if (name[0] == name[0].toUpperCase()) {
    let firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
};

// Else If 

let age = 26;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age <= 18) {
    console.log('Yay! You can vote!');
} else if (age <= 21) {
    console.log('Yay! You can drink!');
} else if (age >= 25) {
    console.log('Yay! You can rent a car!');
};

