import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import scorll from '../Images/Scorll.png'
import scroll2 from '../Images/Scroll2.png'
import scroll3 from '../Images/Scroll3.png';
import scroll4 from '../Images/Scroll4.png';
import scorll10 from '../Images/Scroll10.png'
import scroll12 from '../Images/Scroll12.png'
import scroll13 from '../Images/Scroll13.png';
import scroll14 from '../Images/Scroll14.png';
import scroll11 from '../Images/Scroll11.png';
import Sc7 from '../Images/Sc7.png'
import Sc5 from '../Images/Sc5.png'
import Sc6 from '../Images/Sc6.png'
import Sc8 from '../Images/Sc8.png'
import '../Pages/Homepage.css'





const fadeImages = [
  {
     url:scorll ,
  },
  {
      url:scroll2,
   
  },
  {
     url:scroll3,
  },
  ,
  {
     url:scroll4,
  },
];

function Homepage() {
  console.log("homepage")
  return (
    <div className='Home-Container'>
     
<div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={scorll} alt="Los Angeles" class="d-block w-100" />
  </div>
  <div class="carousel-item">
    <img src={scroll2} alt="Chicago" class="d-block w-100" />
  </div>
  <div class="carousel-item">
    <img src={scroll3} alt="New York" class="d-block w-100" />
  </div>
</div>  
<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    
 
<div id="demo1" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>


  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Sc8} alt="Los Angeles" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={Sc6} alt="Chicago" class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={Sc7} alt="New York" class="d-block w-100" />
    </div>
  </div>  
  <button class="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>




    
<div id="demo2" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={scorll10} alt="Los Angeles" class="d-block w-100" />
  </div>
  <div class="carousel-item">
    <img src={scroll11} alt="Chicago" class="d-block w-100" />
  </div>
  <div class="carousel-item">
    <img src={scroll12} alt="New York" class="d-block w-100" />
  </div>
</div>  
<button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
    </div>
  )
}

export default Homepage