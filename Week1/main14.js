const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation');
        reject("hi");
    },1000);
}).catch((err)=>{
    console.log("This is error"+err);
}) 


console.log(p1);
setTimeout(()=>{
    console.log(p1);
},2000);