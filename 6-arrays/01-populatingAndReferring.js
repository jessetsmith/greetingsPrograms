let list = ['orange', 'banana', 'oreos']

console.log(list[1])

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']]

console.log(typeof students);
console.log(students instanceof Array);
console.log(students[1]);
console.log(students[3]);

// Get Sam from nested array, and console.log 'Hello Sam, how are you today?
console.log(students[6][2] + ' Hello Sam, how are you today?');

let name = students[6][2]
console.log(`Hello ${name}, how are you today?`)

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.splice(1, 1, 'Cookies')
food.push('Cool Beans');
food.pop(); //Removes last element of an array
food.shift() //Removes the first element of an array
food.unshift('Pasta', 'Hamburger') // Adds onto the start of the array
for (f of food) {
    console.log(f);
}

for (f in food) {
    console.log(f);
    console.log(food[f]);
}

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
//food.forEach(f => {console.log(f)})
//food.forEach((f, number) =>{ console.log(f); console.log(number)})
//food.forEach((f, number, array)=> {console.log(f); console.log(number); console.log(array)})

let foodFunction = () => {
    for(f in food){
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction();

let movie = ['Star Wars', 'Indiana Jones', 'Blade Runner', 'The Fugitive', 'Quantum Break'];

movie.push('Maze Runner');
movie.splice(4, 1, 'Age of Adaline');
movie.forEach(movie =>{console.log(movie)});


let long = [ 1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
console.log(colors.toString())
console.log(typeof colors)
console.log(typeof colors.toString())

colors.forEach(color => console.log(color))

let arr = [1, 2, 3, 4, 5]
console.log(arr instanceof Array);

arr.splice(0, 1, 5);
arr.splice(1, 1, 4);
arr.splice(2, 1, 3);
arr.splice(3, 1, 2);
arr.splice(4, 1, 1);

console.log(arr);