// Vector Stack Interview Prep
/*
data types
hoisting
TDZ
Scope
strict mode
let var const
varibale shadowing
funtion( 
    arrow function,
    function expression, 
    heigher order function
    pure function
    first class function
    callback function
    closure
    function currying
    IIFE
    default parameter
)
pass by value and pass by reference
deep copy
deep copy
== vs ===
type coersion vs type conversion
.this keyword
call, apply, bind
Promise
asyn await
destructuring
speard and rest operator
event propagration
polyfills(Promise(),Memoize(),Bind(),Reduce(),Map(),filter())

Array Method:
push()
pop()
shift()
unshift()
concat()
slice()
splice()
forEach()
map()
filter()
reduce()
find()
findIndex()
indexOf()
includes()
sort()
reverse()
join()
flat()
Array.isArray()

String Method:
charAt()
concat()
includes()
indexOf()
replace()
replaceAll()
slice()
split()
substring()
toLowerCase()
toUpperCase()
trim()
trimStart()
trimEnd()
repeat()
toString()
*/

// data types
// Primitive data types
// var dataType=10;
// dataType="string"
// dataType=null;
// dataType=undefined;
// dataType=false;
// Non-Primitive data types
// dataType=[1,2,"name",false,null,undefined,BigInt]
// dataType={
//     name:"manik",
//     age:20,
//     arr:[1,2,3,4]
// }

// Hoisting
// console.log(hoisting);
// console.log(hoisting2)
// var hoisting=10;
// let hoisting2=10;

// Scope
//Block
// {
// let block=10;
// console.log(block)
// }
// console.log(block);

// lexical scope
// function parent(){
//     let num=10;
//     function child(){
//         console.log(num)
//     }
//     child();
// }
// parent();
// functional scope
// let ab=10;
// function functionalScope(){
//     console.log(ab);
// }
// functionalScope();
// console.log(ab)

// TDZ
// console.log(tdz)
// console.log(tdz2)
// let tdz=10;
// const tdz2=20;

// "use strict";
// a=10;
// console.log(a)

// Let var const

// let a=10;
// a="manik"
// // let a=30;

// const b=10;
// // b=20;
// var c=10;
// var c=20;
// c=30;

// VARIABLE SHADOWING
// let shadowing=10
// {
//     let shadowing=20;
//     console.log(shadowing);
// }
// console.log(shadowing);

// Arrow Function
// const ArrowFunction=()=>10+20;
// console.log(ArrowFunction())

// const ArrowFunction1=()=>{
//     return 30+30;
// }
// console.log(ArrowFunction1())

// Function Expression
// let FE=function FunctionExpression(){
//     console.log("Iam FE");
// }
// console.log(FE());

// Higher Order function
// function HOF(fn){
//     return fn;
// }
// const result=HOF(function hello(){console.log("I am hello")}) //first class function
// console.log(result())

// Callback function
// function ICF(){
//     console.log("thanks for callback")
// }
// function CallbackFunction(fn){
//     console.log("Let Me finish it will take only 2 sec")
//     setTimeout(()=>{
//         fn();
//     },2000)
// }
// CallbackFunction(ICF);

// Function Currying
// function f1(a){
//     return function f2(b){
//         return function f3(c){
//             console.log(a+b+c)
//         }
//     }
// }
// f1(2)(2)(2);

// CLOSURE
// function f1(){
//     let a=10
//     function f2(){
//         let b=20
//         function f3(){
//             console.log(a+b)
//         }
//         f3();
//     }
//     f2()
// }
// f1();

// IIFE
// (function IIFE(){
//     var IIFEv=10;
//     console.log(IIFEv)
// })();
// console.log(IIFEv)

// console.log(1=="1");
// console.log(1==="1");
// console.log(1+"1"); //type coresion
// console.log(1+Number("1")); //type coversion

// Promise

// console.log("Have get the burger?")
// let promise= new Promise((resolve,reject)=>{
//     let isAvailable=false;
//     setTimeout(()=>{
//         if(isAvailable){
//             resolve("Yes! I got the Burger");
//         }else{
//             reject("No! I didn't.");
//         }
//     },2000)
// })
// promise.then((resValue)=>{
//     console.log(resValue);
//     console.log("Ok I preparing dining");
// })
// .catch((rejValue)=>{
//     console.log(rejValue);
//     console.log("Ok I wil prepare pasta")
// })
// .finally(()=>[
//     console.log("Thank you dear")
// ])

// Async await, Try Catch
// const isTruePromise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
  
//   async function asyncAwait(isTruePromise) {
//     try {
//       const isTrue = await isTruePromise;
//       isTrue ? console.log("resolved") : console.log("rejected");
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   asyncAwait(isTruePromise);

// ARRAY METHODS
// let arr=[1,2,3,4,5];
// let arr1=[6,7,8,9,10]
// const res1=arr.map((item,index)=>{
//     return item*2;
// })
// console.log(res1)

// const res2=arr.filter((item)=>item%2!==0)
// console.log(res2);

// const res3=arr.reduce((acc,item)=>{
//     return acc+item;
// },0)
// console.log(res3)

// const res4=arr.push(6);
// console.log(arr)

// console.log(arr.pop());
// console.log(arr.shift())
// arr.unshift(0)
// console.log(arr)
// console.log(arr.concat(arr1))
// console.log(arr.find((e)=>e===3));

// spread operator

// let arr1=[1,2,3,...arr]
// console.log(arr1)

// // Destructuring
// let [a,b,c,...d]=arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
  
