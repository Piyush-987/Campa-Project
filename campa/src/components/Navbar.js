import React from 'react'

function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a style={{marginLeft:'20px', marginRight:"70px"}} class="navbar-brand" href="#">Campa Intelligence Platform</a>
    <form style={{marginRight:'50px'}} class="d-flex" role="search">
        <input style={{width:'350px'}} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" href="#">About Us</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" href="#">Services</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" href="#">Contact Us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar