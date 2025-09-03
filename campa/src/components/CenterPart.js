import React from "react";
import img1 from "../images/img1.jpg";
function CenterPart() {
  return (
    <div className="center">
        <div className="heading" >Jharkhand Forest Intelligence Map</div>
        <img
          style={{
            marginLeft:'18px',
            marginBottom: "18px",
            width: "950px",
            height: "300px",
          }}
          src={img1}
        ></img>
        <h4 style={{paddingLeft: '15px', marginBottom:'18px'}}>Forest Intelligence Dashboard</h4>
        <div class="d-flex justify-content-evenly">
          <div className="new1">yo</div>
          <div className="new1">yo</div>
          <div className="new1">yo</div>
          <div className="new1">yo</div>
        </div>
        <h4 style={{paddingLeft: '15px', marginBottom:'18px'}}>Real Time AI Analysis</h4>
        <div class="d-flex justify-content-evenly">
          <div className="new">yo</div>
          <div className="new">yo</div>
        </div>
        <div class="d-flex justify-content-evenly">
          <div className="new">yo</div>
          <div className="new">yo</div>
        </div>
        <div class="d-flex justify-content-evenly">
          <div className="new2">yo</div>
        </div>
        <h4 style={{paddingLeft: '15px', paddingBottom: '18px'}}>Photo Gallery</h4>
        <div class="d-flex justify-content-between">
          <div className="new3" style={{marginLeft:'60px'}}>yo</div>
          <div className="new3">yo</div>
          <div className="new3" style={{marginRight:'60px'}}>yo</div>
        </div>
    </div>
  );
}

export default CenterPart;
