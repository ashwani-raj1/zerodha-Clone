import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"white",position:"sticky",top:"0",zIndex:"1"}}>
      <div class="container-fluid" style={{width:"100%"}}>
        <Link to="/" ><img
        style={{ height: "12%", width: "20%", marginLeft: "28%" }}
          src="media/images/logo.svg"
          alt="logo"
        /></Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              display: "flex",
              justifyContent: "right",
              width: "80%",
            }}
          >
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <Link class="nav-link" to="/SignUp">
                Signup
              </Link>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <Link class="nav-link" to="/Product">
                Products
              </Link>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <Link class="nav-link" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <Link class="nav-link"to="/Support">
                Support
              </Link>
            </li>
            <li class="nav-item" style={{alignItems:"center",display:"flex" }}>
            <i class="fa-solid fa-bars"></i>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
