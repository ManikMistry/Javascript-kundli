// Variable shadowing with let keyword
let a =10;
function VariableShadowing(){
    let a=20;
    console.log(a);
}
VariableShadowing();
console.log(a);

// Variable shadowing with var keyword
var b=30;
function VariableShadowing1(){
    let b=20;
    console.log(b);
}
VariableShadowing1();
console.log(b)

// Snippets
let y = 30;
if (true) {
  let y = 40;
  console.log(y);
}
console.log(y);

