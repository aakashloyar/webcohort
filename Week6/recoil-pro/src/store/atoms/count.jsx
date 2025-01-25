import {atom,selector,atomFamily,selectorFamily} from 'recoil'
import {Todos} from '../../Todos'
import axios from 'axios'
console.log(Todos);
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
export const Todofamily=atomFamily({
    key:'TodoFamily',
    default:id=>{
        console.log(id);
        // Todos.find((todo)=>todo.id===id);
        let res=Todos.find(todo=>todo.id===id);
        console.log("Here is response "+res);
        return res;
    }
})

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
      key: "todoSelectorFamily",
      get: (id) => async ({get}) => {
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo;
      },
    })
})