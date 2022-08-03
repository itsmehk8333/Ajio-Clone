import React, { useEffect } from 'react';
import delimg from '../Images/garbage.png'
import {useDispatch, useSelector} from 'react-redux';
import'./Cart.css'
import { useState } from 'react';
import emptycart from '../Images/Empty-Cart.jpg'
import { DeleteItem } from '../Redux/Action';


function Cart() {
    const cart = useSelector((store) => store.cart)
     
    const Dispatch = useDispatch();
    const[itemcount , Setcount]  = useState(1)
var price = 0
cart.map((e)=>{
price += parseInt(e.price) 
})
console.log(cart.length)


  
    return (
    <div className='Main-Container'>
    {
      cart.length > 0 ? <div  className='main-container'>
      
      <div className='cart-items'>

    {

      cart.map((e)=>(
      <div  className='cart-item'>
<img src={e.img}  className="cart-img"/>
<div  className='details-div'>
<p className='item-price'>  Price : {e.price} <span> &#8377;</span></p>
<p className='Size'>Size  :{e.size}   <button
onClick={()=>{
  Dispatch(DeleteItem(cart.findIndex( i => i.id  == e.id)))
}}
className="delete-item"
><img src={delimg} /></button></p>
</div>
      </div>
      ))
    }
      </div>
      <div className='payment-div'>
      <h2 style={{margin:"0 0 20px  50px"}}>Order Details</h2>
     <p className='bagTotal'>Bagtotal <span style={{marginLeft:'10rem'}}>{price} /Rs</span></p>
     <p className='bagTotal'>Bagdiscount <span style={{marginLeft:'8rem'}}>500 /Rs</span></p>
     <p className='bagTotal'>Delivery <span style={{marginLeft:'11rem',color:"green"}}>Free</span></p>
     <p className='bagTotal'>Total Amount <span style={{marginLeft:'8rem'}}>{price - 500} /RS</span></p>
     <button className='btn bg-success' id='checkout-btn'>Check out</button>
      </div>
      </div>
      : <div>
      <img src={emptycart} className="empty-cart" />
      </div>
    }
    </div>
  )
}
export default Cart