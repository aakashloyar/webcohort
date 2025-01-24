let arr=[1,2,3,4,5];
arr=[...arr,6];
console.log(arr);


let nums=arr.map((item)=>{
    return item*2;
})

console.log(nums);