// Call Bcak function


function IamCallBack(){
    console.log("Thanks for called me back!")
}

console.log("Please give a call to me after finished your work");
function Callbacker(IamCallBack){
    setTimeout(()=>{
        IamCallBack();
    },3000)
}

Callbacker(IamCallBack);