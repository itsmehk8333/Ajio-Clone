import React from 'react'
import './Singlepage.css';
import cupon from '../Images/cupon.png'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../Redux/Action';
function SinglePage() {

  const Dispatch = useDispatch()
  const img = localStorage.getItem("img");
  const price = localStorage.getItem("price");
  const name = localStorage.getItem("name");
  
  return (
    <div className='cart-div'>
    <div>
    <img src={img} className="single-img" />
    </div>
    <div className='details-div'>
    <br/>
    <h3 className='single-name'>{name}</h3>
    
    <h3  className='single-price'>{price} <span> &#8377;</span> <span  className='off'>20%</span> </h3> <br/>
  
    <select className='select'>
    
    <option  value="S">S</option>
    <option  value="M">M</option>
    <option  value="L">L</option>
    <option  value="XL">XL</option>
    <option value="XXL">XLL</option>
    </select> <br/><br/>
    <img src={cupon }/>
    <button  className='btn btn-secondary' id='cart-button'
    
    onClick={()=>{
Dispatch(AddToCart(
  {
    img:img,
    price:price,
    size:document.querySelector(".select").value

  }
))
    }}
    
    > Add to Cart</button>
    <p className='tags'>HANDPICKED STYLES | ASSURED QUALITY</p>
    </div>
    </div>
  )
}

export default SinglePage