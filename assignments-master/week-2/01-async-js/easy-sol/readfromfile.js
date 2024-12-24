const fs=require('fs');
//now the main thing about this is the path is relative to terminal path
const path='main.txt';

function read() {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
} 
async function hi() {
    try {
        const data=await read();
        console.log("resolved");
        return data;
        //console.log(data);
    } 
    catch(err){
        console.log("error");
        return err;
    }
}
const data=hi();
//console.log(hi);
