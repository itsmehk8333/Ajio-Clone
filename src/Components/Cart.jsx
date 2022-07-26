import React, { useEffect } from 'react';
import delimg from '../Images/garbage.png'
import {useDispatch, useSelector} from 'react-redux';
import'./Cart.css'
import { useState } from 'react';
import { DeleteItem } from '../Redux/Action';


function Cart() {
    const cart = useSelector((store) => store.cart)
     
    const Dispatch = useDispatch();
    const[itemcount , Setcount]  = useState(1)
var price = 0
cart.map((e)=>{
price += parseInt(e.price) 
})
console.log(price)
    console.log(price)


    console.log(cart)
    return (
    <div  className='Cart-Container'>
    <div>
    {
      cart.length > 0 ?
      cart.map((e)=>(
        <div className='cart-item'>
        <img  src={e.img} className="cart-img" />
         <div className='cart-details'>
         <h4> Price : {e.price} <span> &#8377;</span></h4>
     <div className='del-div'>
     <h4 className='item-size'>Size :  {e.size}</h4>
        
         
     <button  className='del-btn' onClick={()=>{
       console.log(cart.findIndex( i => i.id  == e.id));
       Dispatch(DeleteItem(cart.findIndex( i => i.id  == e.id)))
     }}> <img src={delimg}  className="delimg" /></button>
     </div>
         </div>
        </div>
  
        )) : <h1>Cart is empty</h1>
    } 


    

    </div>

    <div  className='Payment'>

    <div className='payment'>
    <h2>Order Details</h2>
     <p className='bagTotal'>Bagtotal <span style={{marginLeft:'10rem'}}>{price} /Rs</span></p>
     <p className='bagTotal'>Bagdiscount <span style={{marginLeft:'8rem'}}>500 /Rs</span></p>
     <p className='bagTotal'>Delivery <span style={{marginLeft:'11rem',color:"green"}}>Free</span></p>
     <p className='bagTotal'>Total Amount <span style={{marginLeft:'8rem'}}>{price - 500} /RS</span></p>


   
     </div>
  <button className='btn bg-success' id='checkout-btn'>Check out</button>
    
    
    </div>
    
    
    </div>
  )
}
export default Cart