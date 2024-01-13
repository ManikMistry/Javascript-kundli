// Arrow functions
const ArrowFunction=()=>{
    console.log("I am Arrow function")
}
ArrowFunction();
// Destructuring
    //  Array 
    const arr=[1,2,3,4,5,6];

    const[a,b,c,...d]=arr;
    console.log(a,b,c);
    console.log(d)
    //  Object destructuring
    let obj={
        name:"manik",
        age:20
    }
    let {name,age,address="BBSR"}=obj;
    name="Hari";
    age=23;
    console.log(name,age,address);
// Template literals
// Default parameters
// Classes
// Promises
// Let and const
// Modules
// Rest parameters
// Object literals
// Arrays
// Spread operator
// String
// Multiple line string
// Symbols
// Block-scoped variables
// For...of loop
// Generators
// Iterators
// Objects
// Rest operators
// Const and let keywords
// Let
// Maps