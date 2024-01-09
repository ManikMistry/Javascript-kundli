// // Global scope
// var a =10;//it can be access through out the whole code. cuz it's a global scoped variable 

// // Function scope
// function fnScope(){
//     var b=10;
//     console.log(a);
//     console.log(b);
// }
// fnScope();
// console.log(b);

// // Block scope
// {
//     let x=30;
//     let y=20;
// }
// console.log(x+y);

// Lexical scope
let name="manik"
function print(){
    console.log(name);
}
print()


// Local Scope
function exampleFunction() {
    // This variable has local scope to the exampleFunction
    let localVar = "I am a local variable";
    if (true) {
      // This variable also has local scope to the if block
      let blockVar = "I am a block-scoped variable";
      console.log(blockVar);
    }
    // Accessing localVar is fine within the function
    console.log(localVar);
  }
  exampleFunction();
  