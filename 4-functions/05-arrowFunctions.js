function coffee() {
    console.log('Coffee is good');
}

let coffee = () => {
    console.log('I love coffee');
}

coffee();

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}

cats (1, 12);

// Concise and block body

// Concise body does not need parentheses, unless you have mor e than one parameter

let apples = x => console.log(`There are ${x} apples.`);
apples(10);

// More than one parameter will require parentheses
// Return (if one-line chncky arrow function) is implied 

let apples = (x) => {console.log(`There are ${x} apples.`)};
apples(20);

// LINEBREAKS ARE BAD

let func = () => console.log('hi'); //ok

let func = ()
=> console.log('hi'); // bad bombin

