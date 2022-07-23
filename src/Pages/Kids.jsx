import React from 'react';
import { Link } from 'react-router-dom';
import {Kids} from '../Data'
import './Kids.css'

function Kid() {

  return (
    <div className='kids-div'>
    {
        Kids.map((e)=>(
            <div  class="item-div">
             <img src={e.img} className="img-fluid" id='kid-img' />
             <h4 class="h5 text-success" id='title'>{e.name}</h4>
             <h3 class="h5" id='price'>{e.price } <span> &#8377;</span> <span className='text-success' style={{marginLeft:'0.5rem'}}>(60% 0ff)</span></h3>
         <Link to='/singlepage' >    <button type="button" class="btn btn-outline-secondary" onClick={()=>{
          localStorage.setItem("img",e.img)
          localStorage.setItem("price",e.price);
          localStorage.setItem("name", e.name);
          
       }}
       id="button"
       >Visit item</button>
       </Link>
            </div>
        ))
    }
    </div>
  )
}

export default Kid