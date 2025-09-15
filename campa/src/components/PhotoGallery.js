import React from 'react'
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import rain from "../images/rain.png";
import left from "../images/left.png";
import right from "../images/right.png";
function PhotoGallery() {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div style={{ width: "35px", height: "35px", borderRadius: "5px" }}>
          <img
            style={{
              width: "35px",
              height: "35px",
              marginLeft: "18px",
            }}
            src={left}
          ></img>
        </div>
        <div className="new3" style={{ marginLeft: "25px" }}>
          <div
            className="chatra d-flex justify-content-center"
            style={{
              marginLeft: "205px",
              borderRadius: "5px 10px 5px 5px",
              position: "absolute",
              zIndex: "100",
              width: "60px",
              height: "25px",
              background: "rgba(250,250,250,0.85)",
            }}
          >
            <h6>Chatra</h6>
          </div>
          <img
            style={{
              width: "265px",
              height: "200px",
              position: "relative",
            }}
            src={image1}
          ></img>
          <div
            className="d-flex align-items-center"
            style={{
              paddingLeft: "8px",
              width: "265px",
              height: "35px",
              backgroundColor: "rgba(250, 250, 250, 0.8)",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <h6>11 Jan 2025</h6>
            <h6 style={{ marginLeft: "135px" }}>14:00</h6>
          </div>
        </div>
        <div className="new3">
          <div
            className="chatra d-flex justify-content-center"
            style={{
              marginLeft: "201px",
              borderRadius: "5px 10px 5px 5px",
              position: "absolute",
              width: "64px",
              height: "25px",
              background: "rgba(250,250,250,0.85)",
            }}
          >
            <h6>Palamu</h6>
          </div>
          <img
            style={{
              width: "265px",
              height: "200px",
            }}
            src={image2}
          ></img>
          <div
            className="d-flex align-items-center"
            style={{
              paddingLeft: "8px",
              width: "265px",
              height: "35px",
              backgroundColor: "rgba(250, 250, 250, 0.8)",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <h6>15 Mar 2025</h6>
            <h6 style={{ marginLeft: "135px" }}>16:00</h6>
          </div>
        </div>
        <div className="new3" style={{ marginRight: "8px" }}>
          <div
            className="chatra d-flex justify-content-center"
            style={{
              marginLeft: "205px",
              borderRadius: "5px 10px 5px 5px",
              position: "absolute",
              zIndex: "100",
              width: "60px",
              height: "25px",
              background: "rgba(250,250,250,0.85)",
            }}
          >
            <h6>Gumla</h6>
          </div>
          <img
            style={{
              width: "265px",
              height: "200px",
            }}
            src={image3}
          ></img>
          <div
            className="d-flex align-items-center"
            style={{
              paddingLeft: "8px",
              width: "265px",
              height: "35px",
              backgroundColor: "rgba(250, 250, 250, 0.8)",
              borderRadius: "0px 0px 10px 10px",
            }}
          >
            <h6>18 May 2025</h6>
            <h6 style={{ marginLeft: "135px" }}>19:00</h6>
          </div>
        </div>
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "5px",
            marginRight: "18px",
          }}
        >
          <img
            style={{
              width: "35px",
              height: "35px",
            }}
            src={right}
          ></img>
        </div>
      </div>
  )
}

export default PhotoGallery