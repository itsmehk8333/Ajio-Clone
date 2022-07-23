import React from 'react';
import {useSelector} from 'react-redux'

function Cart() {

    const cart = useSelector((store) => store.cart)
    console.log(cart)
  return (
    <div>Cart</div>
  )
}

export default Cart