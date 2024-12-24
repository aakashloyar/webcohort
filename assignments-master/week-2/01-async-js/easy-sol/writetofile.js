const fs=require('fs');
const data=fs.readFile('main.txt','utf8',(err,data)=>{
    if(err) {
        console.log(err);
    } else {
        data=data+'hi i am aakash';
        console.log(data);
        fs.writeFile('main.txt',data,(err)=>{
            if(err) {
                console.log(err);
                return;
            } 
        })
    }
});
//console.log(data);