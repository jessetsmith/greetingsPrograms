let hi = () => {
    return 'hello';
//    1.
}

let newName = hi();
//     2.     3.

console.log(newName);

// 1. The return keyword brings our date out of our function
// 2. We need a new variable to hold the value of the return
// 3. When called, the function becomes the value of the return

hi();

function capitalizeName(name) {
    for(let l in name) {
        if (l == 0) {
        capName += name[l].toUpperCase();
        }
        else {
        capName += name[l].toLowerCahse();
  
        }
    console.log(capName);
    return capName
    }
}

// error, not defined 

const myName = capitalizeName('autumn');

console.log(myName + ' how are you doing?'); 
