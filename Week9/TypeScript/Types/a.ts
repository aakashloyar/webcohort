type X={
    name:string,
    age:number
}
type Y={
    name:string,
    play():void;
}

type Z=X&Y;
const p:Z={
    name:'aaa',
    age:12,
    play(){
        console.log('hi i am playing')
    }
}
type P=X|Y;
const q:P={
    name:'aaa',
    age:12//here can use age or play any one
}

//types cannot be used to implements class but they provide and and or operators 
