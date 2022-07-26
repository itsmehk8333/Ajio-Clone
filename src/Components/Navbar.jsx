import React from 'react';
import {Link} from "react-router-dom";
import bafg from '../Images/bag.png';
import user from '../Images/user.png'
import './Navbar.css'

function Navbar() {
  return (
     <div  className='container-fluid'>
     <nav className="navbar navbar-expand-md bg-light  navbar-static-top">
  <div class="container-fluid">
    <Link to='/' className='  navbar-brand' id='item'> Ajio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" id='icon' >Menu</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to='/Men' class="nav-link active" aria-current="page" id='item'>MEN</Link>
          
        </li>
        <li class="nav-item">
          <Link to='/Women' className='nav-link' id='item'>WOMEN</Link>
        </li>
       
        <li class="nav-item">
          <Link to='/Kids' class="nav-link" id='item'>KIDS</Link>
        </li>
        <li class="nav-item">
        <Link to='/Indie' class='nav-link' id='item'>INDIE</Link>
      </li>
     
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  <Link to='/Cart'>
  <img src={bafg}  className="bag"/> 
  </Link>
     <Link to='/login'> <img src={user} className='user' /></Link>
    </div>
  </div>
</nav>
    
    </div>
  )
}

export default Navbar