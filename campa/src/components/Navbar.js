import React from 'react'
import treeLogo from '../images/treeLogo.png'
function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#306DE5'}}>
  <div class="container-fluid">
        <img style={{width:'50px', height:'50px'}} src={treeLogo}></img>
        <div className='yo' style={{display:'flex', flexDirection:'column', lineHeight:'1', marginRight:'30px'}}>
    <a style={{marginLeft:'5px',color:'white',fontSize:'18px', fontFamily:'Poppins', fontWeight:'bold' }} class="navbar-brand" href="#">Campa Intelligence Platform
    </a>
      <a style={{marginLeft:'5px',color:'white', fontSize:'14px'}} class="navbar-brand" href="#">Jharkhand Forest Monitoring and Afforestation Planning</a>
    </div>
        <div style={{ alignItems:'center'}} class="d-flex" role="search">
        <input style={{width:'340px', borderRadius:'20px 0px 0px 20px', opacity:'60%', color:'white'}} class="form-control" type="search" placeholder="Search" aria-label="Search"/>
     <div style={{display:'flex'}}> <i class="magnify fa-solid fa-magnifying-glass" style={{padding:'10px',opacity:'60%',backgroundColor:'white',width:'37.6px', height:'37.6px', borderRadius:'0px 20px 20px 0px'}}></i>
      </div>
      </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" style={{marginLeft:'50px',color:'white', fontSize:'17px'}} aria-current="page" href="#">Home</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" style={{color:'white', fontSize:'17px'}} href="#">About Us</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" style={{color:'white',fontSize:'17px'}} href="#">Services</a>
        </li>
        <li style={{marginRight:'25px'}} class="nav-item">
          <a class="nav-link active" style={{color:'white', fontSize:'17px'}} href="#">Contact Us</a>
        </li>
      </ul>
      <i class=" bell fa-regular fa-bell fa-lg" style={{color:'white'}}></i>
      <i class="settings fa-solid fa-gear fa-lg" style={{color:'white'}}></i>
      <i class=" user fa-regular fa-circle-user fa-lg" style={{color:'white'}}></i>
    </div>
  </div>
</nav>

  )
}

export default Navbar