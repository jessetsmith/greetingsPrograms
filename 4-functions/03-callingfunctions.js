// A function won't run until it is called/invoked

function hi() {
    console.log('Hi');
    return "HI";
}
hi(); // invoking/calling my function
console.log(hi());


function num() {
   for (let i = 1; i <= 10; i++){
    console.log(i);
   }
   
}
num();


let arr = ['This', 'is', 'really', 'cool'];

function ind() {
   for (a of arr) {
   console.log(a);
}
}
ind();