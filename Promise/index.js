console.log("Can you get the taccos ?")
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const tacosAvailable=false;
        tacosAvailable? resolve("Yes I got the taccos"): reject("I didn't get taccos");
    },3000)
}).then((resValue)=>{
    console.log(resValue)
    console.log("ok then I am getting the table ready")
}).catch((rejValue)=>{
    console.log(rejValue)
    console.log("Ok! I preapre pasta now")
})