import { createStore } from "redux";
import { CartReducer } from "./Reducer";


export const  store = createStore(CartReducer)