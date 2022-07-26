import { ADD, DeleteI, Removes } from "./ActionType"

const init ={
cart :[]
}
export const CartReducer =(store = init ,{type , payload})=>{

    switch(type){
       case ADD :
        return {...store , cart :[...store.cart , payload]}
      case DeleteI:
        store.cart.splice(payload)
        return {...store , cart:[...store.cart]}

        default:
            return  {...store}
    }

}