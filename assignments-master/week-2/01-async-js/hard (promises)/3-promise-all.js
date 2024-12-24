// /*
//  * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
//  * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
//  * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
//  */

function wait1(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })
}

function wait2(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })
}

function wait3(t) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },t*1000);
    })
}

function calculateTime(t1, t2, t3) {
    // const Date1=Date.now();
    // return wait1(t1).then(()=>wait1(t2)).then(()=>wait1(t3)).then(()=>{
    //     const Date2=Date.now();
    //     console.log(Date2-Date1);
    //     return Date2-Date1;
    // });//this is execution of promises in sequence
    //now we want to execute all promises at the same time
    const Date1=Date.now();
    return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(()=>{
        const Date2=Date.now();
        return Date2-Date1;
    })
}

//calculateTime(1,2,3);
//console.log(a)

module.exports = calculateTime;



// function wait1(t) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, t * 1000);
//     });
// }

// function wait2(t) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, t * 1000);
//     });
// }

// function wait3(t) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, t * 1000);
//     });
// }

// function calculateTime(t1, t2, t3) {
//     const startTime = Date.now();
//     return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
//         const endTime = Date.now();
//         return endTime - startTime; // Return time in milliseconds
//     });
// }



//module.exports = calculateTime;
