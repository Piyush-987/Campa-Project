import React from 'react'
import treeLogo from '../images/treeLogo.png'
import { Link } from 'react-router-dom';
function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:'#306DE5'}}>
  <div className="container-fluid">
        <img style={{width:'50px', height:'50px'}} src={treeLogo}></img>
        <div className='yo' style={{display:'flex', flexDirection:'column', lineHeight:'1', marginRight:'25px'}}>
    <Link style={{marginLeft:'5px',color:'white',fontSize:'18px', fontFamily:'Poppins', fontWeight:'bold' }} className="navbar-brand" to="/">Campa Intelligence Platform
    </Link>
      <a style={{marginLeft:'5px',color:'white', fontSize:'14px'}} className="navbar-brand" to="/">Jharkhand Forest Monitoring and Afforestation Planning</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={{marginRight:'20px'}} className="nav-item">
          <Link className="nav-link active" style={{marginLeft:'50px',color:'white', fontSize:'17px'}} aria-current="page" to="/home">Home</Link>
        </li>
        <li style={{marginRight:'20px'}} className="nav-item">
          <Link className="nav-link active" style={{color:'white', fontSize:'17px'}} to="/aboutus">About Us</Link>
        </li>
        <li style={{marginRight:'20px'}} className="nav-item">
          <Link className="nav-link active" style={{color:'white',fontSize:'17px'}} to="/services">Services</Link>
        </li>
        <li style={{marginRight:'65px'}} className="nav-item">
          <Link className="nav-link active" style={{color:'white', fontSize:'17px'}} to="contactus">Contact Us</Link>
        </li>
        <div style={{ alignItems:'center'}} className="d-flex" role="search">
        <input style={{width:'340px', borderRadius:'20px 0px 0px 20px', opacity:'60%', color:'white'}} className="form-control" type="search" placeholder="Search" aria-label="Search"/>
     <div style={{display:'flex'}}> <i className="magnify fa-solid fa-magnifying-glass" style={{padding:'10px',opacity:'60%',backgroundColor:'white',width:'37.6px', height:'37.6px', borderRadius:'0px 20px 20px 0px', position:'relative'}}></i>
      </div>
      </div>
      </ul>
      <i className=" bell fa-regular fa-bell fa-lg" style={{color:'white', position:'relative'}}></i>
      <i className="settings fa-solid fa-gear fa-lg" style={{color:'white', position:'relative'}}></i>
      <i className=" user fa-regular fa-circle-user fa-lg" style={{color:'white', position:'relative'}}></i>
    </div>
  </div>
</nav>

  )
}

export default Navbar