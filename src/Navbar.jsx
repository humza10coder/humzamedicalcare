import React from "react";
import { NavLink } from "react-router-dom";
function Navbar()
{
    return(
              <>
                <nav className="navbar navbar-expand-md" style={{backgroundColor:"orangered",color:"white",fontSize:"40px"}}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
    <ul className="navbar-nav justify-content-center">
    <li className="nav-item">
      <img src="https://logodix.com/logo/1336376.jpg" height="80" width="100"/>
    </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/about">About us</NavLink>
      </li>
      <li className="nav-item dropdown">
        <NavLink className="nav-link text-white" to="/dept">Departments</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/doctors">Doctors</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/contact">Contact us</NavLink>
      </li>
    </ul>
  </div>
</nav>
              </>
    );
}
export default Navbar;