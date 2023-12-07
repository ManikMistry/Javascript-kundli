// Global scope
// Block scope

var a =10;//it can be access through out the whole code. cuz it's a global scoped variable 

// Function scope

function fnScope(){
    var b=10;
    console.log(a);
    console.log(b);
}
fnScope();
console.log(b);

{
    let x=30;
    let y=20;
}
console.log(x+y);
