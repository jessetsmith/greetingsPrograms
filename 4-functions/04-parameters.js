
function hi(name) {
    //         1. 
    console.log(`Hi ${name}!`); // string interpolation
    //                 2.
}

hi('John');
//   3.
hi('Danielle');
hi('Kiana');
hi('Eli');

// The parameter(s) we need to take in to the function.
// Using string interpolation, we can refer to the parameter we passed.
// We define what the parameter's calue will be. 

function nom(mine1, mine2) {
    let nomenclature = mine1 + ' ' + mine2;
    console.log(`Hello, my name is ${nomenclature}!`);
}

nom('Jesse', 'Smith');
