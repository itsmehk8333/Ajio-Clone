import { ADD, Remove } from "./ActionType"



const init ={
cart :[]

}


export const CartReducer =(store = init ,{type , payload})=>{

    switch(type){
       case ADD :
        return {...store , cart :[...store.cart , payload]}
        default:
            return  {...store}
    }

}