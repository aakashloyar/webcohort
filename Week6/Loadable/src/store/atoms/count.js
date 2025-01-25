import {atom,selector,atomFamily,selectorFamily} from 'recoil'

const myselector=selector({
    key:'sel',
    get:async()=>{
        const ans=await res();
        return 1;
    }
})
export const countState=atom({
    key:'countState',
    default: myselector
})


async function res() {
    const x=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1);
        },5000);
    })
}