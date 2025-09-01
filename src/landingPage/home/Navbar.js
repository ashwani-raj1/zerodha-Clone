import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"white"}}>
      <div class="container-fluid" style={{width:"100%"}}>
        <img
          src="media/images/logo.svg"
          style={{ height: "10%", width: "10%", marginLeft: "10%" }}
        />
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
              <a class="nav-link" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "20px" }}>
              <a class="nav-link" href="#">
                Support
              </a>
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
