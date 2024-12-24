// setInterval(()=>{
//     c++;
//     console.log(c);
// },1000);

let c=0;
async function print() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            c++;
            console.log(c);
            resolve();
        },1000);
    })
    
}
async function func() {
    while(true) {
        await print();
    }
}
func(); 
