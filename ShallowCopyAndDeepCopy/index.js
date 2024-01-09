// SHALLOW COPY 
/* Shallow copy creates a new object, but it does not create new copies of the nested objects within the original object. 
Instead, references to the nested objects are copied.*/

let obj={
    name:"manik",
    age:22
}

let newObj=obj;
newObj.name="arun";

console.log(newObj);
console.log(obj)

// Deep Copy

let Fruit={
    name:"mango",
    calories: 120
}
let Fruit2={...Fruit}
Fruit2.name="bananna"
console.log(Fruit)
console.log(Fruit2);

// 12 DEC 
