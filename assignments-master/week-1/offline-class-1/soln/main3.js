//play around array
// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
let arr=[10,20,30,40,50];
arr.push(2);//add last
console.log(arr);
arr.pop();//remove last
console.log(arr);
arr.shift();//remove first 
console.log(arr);
arr.unshift(10);//add first
console.log(arr);
console.log(arr.splice(2,4));//.splice is permanent
console.log(arr);
console.log(arr.slice(1));//it is not permanent
console.log(arr);


//destructive -> original array changes
//non destructive-> original array does not changes

let arr1=[1,2,3];
let arr2=[4,5];
let res=arr1.concat(arr2);
res=res.concat(2);
console.log(res);



//forEach

res.forEach((function(item,index){
    console.log(index+" "+item);
    console.log(`${index} ${item}`);
}))


//map
let result=res.map(function(item){
    return item*2;
})
console.log(result);


let arr3=res.filter((item)=>{
    return item&1;
})
console.log(arr3);



let arr4=res.reduce((res,curr)=> res+curr,0 );//start at 0 give addition of array 
let arr5=res.reduce((res,curr)=>res*curr,1);//product start with 1
console.log(arr4);
console.log(arr5);


console.log(res);

//find

let arr6=res.find((item)=>item>3);
console.log(arr6);//give the first item


let arr7=res.sort();
let arr8=res.sort((a,b)=>{
    return b-a;
});
console.log(arr7);



