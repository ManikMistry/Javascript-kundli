// CALL BY VALUE

/*In a "call by value" mechanism, the value of the actual parameter is passed to the function.
This means that changes made to the parameter inside the function do not affect the original variable outside the function.*/

const callByValue=(a)=>{
    console.log(a+20);
}
let a=20;
callByValue(a);
console.log(a);

// PASS BY REFERENCE

/*In a "pass by reference" mechanism, a reference (memory address) to the actual parameter is passed to the function.
Any changes made to the parameter inside the function will affect the original variable outside the function. */

const passByReference=(obj)=>{
    obj.name="Arun";
    obj.age=23
    return obj;
}
let obj={
    name:"manik",
    age:22
}
passByReference(obj);
console.log(obj)