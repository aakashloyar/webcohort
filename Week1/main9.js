//reading files
const fs=require('fs');
fs.readFile('main.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
// fs.writeFile('main.txt','utf-8',(err,data)=>{
//     try{
//         data=data+" Hi there!";
//         console.log('File written successfully');
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log('File written successfully');
// })

//fs.update -> to update the file
let data=fs.readFile('main.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    data=data+" Hi there!";
    
    return data;
});

console.log(data);