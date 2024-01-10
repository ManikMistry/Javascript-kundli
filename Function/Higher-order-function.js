// A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.
function HigherOrderFunction(fun,a,b,c){
    return fun(a,b,c);
}

function fun(a,b,c){
    return a+b+c;
}
const result=HigherOrderFunction(fun,10,20,30);
console.log(result);