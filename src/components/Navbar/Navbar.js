import React from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'

import {NavLink} from 'react-router-dom'



const Navbar = () =>{
  return (
    
   <nav className="navbar navbar-expand-lg fixed-top  ">
    <div className="container">
    <NavLink className="navbar-brand" to= "/">
        <img src= {logo} />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="navbar-toggler-icon fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page"to = "/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to= "/products">Expolre foods</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to= "/testmonial">reviews</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/questions">faq</NavLink>
        </li>
      </ul>
      <a href='#' className='btn btu '>01151130040</a>
    </div>
  </div>
</nav>

  )
}
export default Navbar;
