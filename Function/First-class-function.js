//Regular Function
const fn=function hello(){
    console.log("Function Expression");
}
fn();

// Arrow Function
const fn2= hello=()=>{
    console.log("Function Expression2");
}
fn2();

// Callback function
function callback(){
    console.log("I am callback function")
}

function regularfn(fn){
    console.log("I called the callback function")
    callback();
}
regularfn(callback);