import React from 'react'
import img1 from '../images/img1.jpg'
function CenterPart() {
  return (
    <div>
    <div className='center'>
    <div className="heading">Jharkahnd</div>
    <img style={{marginBottom:'20px',marginTop:'20px',width:'950px', height:'300px'}} src={img1}></img>
    <h4>Forest Intelligence</h4>
    <div class="d-flex justify-content-around">
        <div className='new1'>yo</div>
        <div className='new1'>yo</div>
        <div className='new1'>yo</div>
        <div className='new1'>yo</div>
    </div>
    <h4>Real Time</h4>
    <div class="d-flex justify-content-around">
        <div className='new'>yo</div>
        <div className='new'>yo</div>
    </div>
    <div class="d-flex justify-content-around">
        <div className='new'>yo</div>
        <div className='new'>yo</div>
    </div>
    <div class="d-flex justify-content-around">
        <div className='new2'>yo</div>
    </div>
    <h4>Real Time</h4>
    <div class="d-flex justify-content-around">
        <div className='new3'>yo</div>
        <div className='new3'>yo</div>
        <div className='new3'>yo</div>
    </div>
    </div>
  </div>
  )
}

export default CenterPart