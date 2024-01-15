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

console.log(`My name is ${obj.name} and Iam ${obj.age}years old`);
//   multistring template literals
console.log(`
name: ${obj.name}
age: ${obj.age}
address: ${address}
`)

// Default parameters
function DefaultParam(a=20,b=20){
    console.log(a+b);
}
DefaultParam();

// Classes
// Promises
console.log("Have you get the taccos?");

const promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        const isTaccosAvailable=true;
        if(isTaccosAvailable){
            res("yes I got the taccos.");
        }else{
            rej("No I didn't get the taccos.")
        }
    },3000)
})
promise.then((resValue)=>{
    console.log(resValue,"Ok I ready dinning for the dinner.");
}).catch((rejValue)=>{
    console.log(rejValue,"Ok then I prepare pasta instead.");
})
// Let and const
let abc=20;
console.log(abc);
abc=30;
console.log(abc);

const bac=20;
console.log(bac);
bac=30;
// console.log(bac);

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