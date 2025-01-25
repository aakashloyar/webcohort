import {atom,selector} from 'recoil'
export const countState=atom({
    key:'countState',//unique id
    default:0
})
export const isEven=selector({
    key:'isEven',
    get:({get})=>{
        const count=get(countState);
        return count%2===0;
    }
})
export const Fetch=atom({
    key:'fetch',
    default:selector({
        key:'sel',
        get:async()=>{
            const ans=await res();
           // console.log(ans);
            return 1;
        }
    })
})
export const Adq=selector({
    key:'adq',
    get:({get})=>{
        const fetc=get(Fetch);
        return fetc;
    }
})
async function res() {
    const x=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1);
        },5000);
    })
}