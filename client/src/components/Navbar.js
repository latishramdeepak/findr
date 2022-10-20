import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const navlinkstyles=({isActive}) =>{
    return {
      fontWeight:isActive? 'bold':'normal',
      color:isActive? 'red': 'white',
    }
  }
  return (
   <>

<nav className="navbar navbar-expand-lg  bg-dark">
  <div className="container-fluid ">
    <NavLink className="navbar-brand text-white" to="/">
      <h1 className="fs-1">F!NDR</h1>
      
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink  style={navlinkstyles} className="nav-link active text-white" aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Service">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/About">
            About us
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Contact">
            Contact Us
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Login">
            login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Signup">
            Sign Up
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Logout">
            Logout
          </NavLink>
        </li>


        <li className="nav-item">
          <NavLink style={navlinkstyles} className="nav-link text-white" to="/Workerhome">
            workerhome
          </NavLink>
        </li>


       
      </ul>
    </div>
  </div>
</nav>

   </>
  )
}

export default Navbar