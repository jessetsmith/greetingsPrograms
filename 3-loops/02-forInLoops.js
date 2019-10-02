//* Great for iterating over values in an object

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {
    console.log('item =>', item);
    console.log('student[item] =>', student[item]);
}

for (element in student) {
    console.log('element', element);
    console.log('student[element]', student[element]);
}

let dogArray = ['collie', 'pitbull', 'nefie', 'dachshund', 'shiba inu'];
for (dog in dogArray){
    console.log(dog);
}


console.log(dogArray[0]);
console.log(dogArray[1]);
console.log(dogArray[2]);
console.log(dogArray[3]);
console.log(dogArray[4]);


let studentName = 'cARactacUS';
let newName = '';


//   ('in' is the key)
for (letter in studentName) {
    if (letter == 0){
        newName += studentName[letter].toUpperCase();
        console.log(studentName[letter], newName);

    } else {
        newName += studentName[letter].toLowerCase();
        console.log(studentName[letter], newName);
    }
}
console.log(newName);

let cabbage = 'Good';
for (heads in cabbage) {
    console.log(cabbage);
}

