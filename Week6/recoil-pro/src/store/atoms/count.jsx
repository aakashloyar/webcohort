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