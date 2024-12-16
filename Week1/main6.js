// //now let us learn about promise
const p=new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("resolved successfully");
    // },1000);
    const is=true;
    if(is) {
        resolve("resolved successfully");
    } else {
        reject("rejected");
    }

})
//console.log(p);

// setTimeout(function() {
//     console.log(p);
// },2000);


p.then((data)=>{
    console.log(data);
}) .catch((error)=>{
    console.log(error);
})

//now let us learn about promise chaining

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am saying hello");   
    },2000);
});
function hello(s) {
    console.log(s);
}
p1.then((data)=>{
    hello(data);
}).catch((error)=>{
    console.log(error);
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am saying hi 2");
    },2000);
})
const p3=new Promise((resolve,reject)=>{
    reject("rejected");
    setTimeout(()=>{
        resolve("I am saying hello 3");
    },1000);
})

// p2.then((data)=>{
//     console.log(data);
//     p3.then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log(error);
//     });
// })
// .catch((error)=>{
//     console.log(error);
// })

// p2.then((data)=>{
//     console.log(data);
//     return p3;
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

p2.then((data) => {
    console.log(data);
})
.then(p3)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});