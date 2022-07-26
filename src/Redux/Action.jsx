import { ADD, DeleteI } from "./ActionType";

export const AddToCart =(payload) =>({
type:ADD,
payload
})

export const DeleteItem = (payload) =>({
    type :DeleteI,
    payload
})