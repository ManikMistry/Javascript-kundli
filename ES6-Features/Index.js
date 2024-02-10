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
// bac=30;
// console.log(bac);

// Modules
// Rest parameters
function restOperator([a,b,...c]){
    console.log(a);
    console.log(b);
    console.log(c);
}
restOperator([1,2,3,4,5,6,7,8]);
// Object literals
console.log(`my name is manik and iam ${abc} years old
I have completed my graduation from NIIS.
I am from odisha Bhubaneswar
`)
// Arrays
/* Array is a non-primitve data types is can hold multiple data in a single memory location...array can store any data inside it like
number, string, boolean, null, undefined, symbol, object
*/
let Array=[1,"one",null,undefined,true,{name:"manik"}];
console.log(Array[1]="two");
console.log(Array);
// Spread operator
const Spread=[1,2,3,4,5,6,7,8,9,10];
const SpreadArr=[...Spread];
console.log(SpreadArr);

const SpreadObjItem={name:"manik",age:23};
const SpreadObj={...SpreadObjItem};
console.log(SpreadObj.age=22);
// Block-scoped variables
// let and const are blocked scope varible 
function BlockedScope(){
    let a1=10;
    const b2=20;
    console.log(a1+b2);
}
BlockedScope();
// console.log(a1,b2);
// For...of loop
const forOf=[1,2,3,4,5,6];
for(i of forOf){
    console.log(i);
}
// Generators
// Iterators
// Objects
// Rest operators
function restOperator(...arr){
    return arr.map((e)=>e+2);
    
}
console.log(restOperator([1,2,3,4,5,6]));
// Const and let keywords
// Let
// Maps