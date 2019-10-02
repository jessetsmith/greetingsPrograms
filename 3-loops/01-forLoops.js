const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/* There are many different kinds of loops by they all do roughly the same thing:
    - For statement
    - Do while statement
    - While statement
    - Labeled statement
    - Break statement
    - Continue statement
    - For in statement
    - For of statement
*/

for (let i = 0; i < 10; i++){
    console.log(i);   
}



/*  1) The 'for' keyword
    2) A variable initialization and declaration, 
    3) The condition that needs to be met in order to end the loop.
    4) This is where the number is going to update. This one is saying each time this llop runs, update i by one.
*/

for (let s = 0; s <= 20; s += 2){
    console.log(s);
}

for (let t = 10; t >= 0; t--){
    console.log(t);
}

for (let u = 0; u >= -24; u -= 2) {
    console.log(u);
}

let name = 'Sparticus';

for (let r = 0; r < name.length; r++){
    console.log(name, r, name[r]);
}


function sum (n){
    let sum = 0;
    for (let c = 1; c <= n; c++){
    sum += c;
    }
    return sum 
    
}

console.log(sum(50));

