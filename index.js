// Primitive datatypes(number, string, null, undefined, boolean, symbol);

// number
let num=10;
console.log(typeof(num));

// string 
let str="abc"
console.log(typeof(str));

// null
let value=null;
console.log(typeof(value));

// undefined
let value1=undefined;
console.log(typeof(value1));

// boolean
let isWorking=true;
console.log(typeof(isWorking));

// Non-primitive
// Object
let obj={
    name:"manik",
    region:"India",
    age: 22,
    isPlaceed: false,
    about:function(){
        console.log("He is freshers now");
    }
}

console.log(typeof(obj));

// Array
let arr=[1,"hello",null,undefined,true,{name:"manik"}];

console.log(arr);

