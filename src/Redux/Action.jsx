import { ADD, Remove } from "./ActionType";



export const AddToCart =(payload) =>({
type:ADD,
payload
})

export const RemoveFromCart = (payload) =>({
type:Remove,
payload

})