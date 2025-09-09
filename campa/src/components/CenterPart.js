import React from "react";
import img1 from "../images/img1.jpg";
import Vector1 from "../images/Vector1.png";
import Vector2 from "../images/Vector2.png";
import Vector3 from "../images/Vector3.png";
import Vector4 from "../images/Vector4.png";
import globe from "../images/globe.png";
import satellite from "../images/satellite.png";
import Ellipse1 from "../images/Ellipse1.png";
import ForestFireGraph from "./ForestFireGraph";
import ForestDistributionChart from "./ForestDistributionChart";
import carbonmap from "../images/carbonmap.png";
import leaf from "../images/leaf.png";
import elephant from "../images/elephant.png";
import trees from "../images/trees.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import plus from '../images/plus.png'
import minus from '../images/minus.png'
// import ElementLevels from './ElementLevels';
// import Temperature from '../components/Temperature';
// import AirQuality from '../components/AirQuality';
function CenterPart() {
  return (
    <div className="center">
      <div className="heading">
        <div style={{ marginRight: "8px", paddingTop: "5px" }}>
          <img
            style={{
              width: "32px",
              height: "32px",
            }}
            src={globe}
          ></img>
        </div>
        <div>
          <p>Jharkhand Forest Intelligence Map</p>
          <p style={{ fontSize: "13px", marginTop: "-18px" }}>
            {" "}
            Click anywhere on the map for real forest analysis
          </p>
        </div>
        <div className="satellite d-flex align-items-center justify-content-center">
          <img
            style={{
              width: "12px",
              height: "12px",
            }}
            src={satellite}
          ></img>
          <h6 style={{ paddingTop: "6px", paddingLeft: "5px" }}>Satellite</h6>
        </div>
        <div className="live-system d-flex align-items-center justify-content-center">
          <img
            style={{
              width: "9px",
              height: "9px",
            }}
            src={Ellipse1}
          ></img>
          <h6 style={{ paddingTop: "6px", paddingLeft: "5px" }}>
            Live System{" "}
          </h6>
        </div>
      </div>
<div className="image-container" style={{position:'relative'}}>
      <img
        style={{
          marginLeft: "18px",
          marginBottom: "18px",
          width: "950px",
          height: "300px",
        }}
        src={img1}
      ></img>
        <div className="box-overlay d-flex">

        <div className="over1">3D View</div>
        <div className="over2">Satellite</div>
        <div className="over3">Boundaries</div>

        </div>
        <div className="box-overlay1 d-flex">

        <div className="over4">
        <img
        style={{
        }}
        src={minus}
      ></img>
        </div>
        <div className="over5">
        <img
        style={{
        }}
        src={plus}
      ></img>
        </div>

        </div>
      </div>
      <div className="intelligence d-flex align-items-center">
      <h4 style={{ paddingLeft: "15px", marginBottom: "18px" }}>
        Forest Intelligence Dashboard
      </h4>
      <h6 style={{right:'0', marginLeft:'500px'}}>Generate Report</h6>
      </div>
      <div class="d-flex justify-content-evenly">
        <div className="new1" id="box1" style={{ fontWeight: "600" }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector1}
          ></img>
          Dense Forest
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            58.7K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>
            hectares
          </h5>
        </div>
        <div className="new1" id="box2" style={{ fontWeight: "600" }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector2}
          ></img>
          Degraded
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            22.3K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>
            hectares
          </h5>
        </div>
        <div className="new1" id="box3" style={{ fontWeight: "600" }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector3}
          ></img>
          Afforested
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            8.9K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>
            hectares
          </h5>
        </div>
        <div className="new1" id="box4" style={{ fontWeight: "600" }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector4}
          ></img>
          Monitored
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            82.3K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>
            hectares
          </h5>
        </div>
      </div>
      <h4 style={{ paddingLeft: "15px", marginBottom: "18px" }}>
        Real Time AI Analysis
      </h4>
      <div class="d-flex justify-content-evenly">
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              Climate Changes
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ flexWrap: "wrap", marginTop: "-10px" }}
          >
            <div
              className="four"
              id="four1"
              style={{ marginRight: "30px", marginBottom: "-10px" }}>
              <div className="climateHeadinng d-flex justify-content-center">
              <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
              Temperature
              </h6>
              </div>
              <div>
              {/* <AirQuality/> */}
             </div>
            </div>
            <div className="four" id="four2" style={{ marginBottom: "-10px" }}>
              <div className="climateHeadinng d-flex justify-content-center">
              <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
              Temperature
              </h6>
              </div>
              <div>
              {/* <Temperature/> */}
             </div>
              
            </div>
            <div
              className="four"
              id="four3"
              style={{ marginRight: "30px", marginTop: "-5px" }}
            >
              3
            </div>
            <div className="four" id="four4" style={{ marginTop: "-5px" }}>
              4
            </div>
          </div>
        </div>
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              Forest Fire
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ marginTop: "-10px" }}
          >
            <ForestFireGraph />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              Forest Distribution Chart
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ marginTop: "-10px" }}
          >
            <ForestDistributionChart/>
          </div>
        </div>
        <div className="new"><div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              Element Levels in Soil
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ marginTop: "-10px" }}
          >
            {/* <ElementLevels /> */}
          </div></div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div className="new2 d-flex justify-content-center">
          <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>Soil Characteristics</h6>
          </div>
          <div className="soil d-flex justify-content-evenly">
          <div className="soilpart">
            yo
          </div>

          <div className="soilpart">
            yo
          </div>
          </div>
      </div>
      <h4 style={{ paddingLeft: "15px", paddingBottom: "18px" }}>
        Photo Gallery
      </h4>
      <div class="d-flex justify-content-between">
        <div className="new3" style={{ marginLeft: "60px" }}>
          <img
            style={{
              width: "265px",
              height: "200px",
            }}
            src={image1}
          ></img>
        </div>
        <div className="new3"><img
            style={{
              width: "265px",
              height: "200px",
            }}
            src={image2}
          ></img></div>
        <div className="new3" style={{ marginRight: "60px" }}>
          <img
            style={{ 
              width: "265px",
              height: "200px",
            }}
            src={image3}
          ></img>
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div className="new">Biodiversity in the location</div>
        <div className="new">Illegal Activities happening in forest</div>
      </div>
      <h4 style={{ paddingLeft: "15px", paddingBottom: "18px" }}>
        Forest Services & Resources
      </h4>
      <div class="d-flex justify-content-evenly" style={{fontSize:'20px'}}>
        <div
          className="new4 d-flex align-items-center justify-content-center"
          
        >
          <img
            style={{ marginTop:'-1px',
              width: "28px",
              height: "28px",
            }}
            src={trees}
          ></img>
          <h6 style={{ paddingTop: "6px", paddingLeft: "8px", fontSize:'20px' }}>Campa Projects</h6>
        </div>
        <div
          className="new4 d-flex align-items-center justify-content-center"
          style={{ fontWeight: "600" }}
        >
          <img
            style={{marginTop:'-2px',
              width: "32px",
              height: "32px",
            }}
            src={elephant}
          ></img>
          <h6 style={{ paddingTop: "7px", paddingLeft: "8px", fontSize:'20px' }}>Elephant Tracker</h6>
        </div>
        <div
          className="new4 d-flex align-items-center justify-content-center"
          style={{ fontSize: "900" }}
        >
          <img
            style={{paddingBottom:'2px',
              width: "28px",
              height: "30px",
            }}
            src={carbonmap}
          ></img>
          <h6 style={{ paddingTop: "7px", paddingLeft: "8px", fontSize:'20px' }}>Places to visit</h6>
        </div>
        <div
          className="new4 d-flex align-items-center justify-content-center"
          style={{ fontWeight: "600" }}
        >
          <img
            style={{
              width: "26px",
              height: "26px",
            }}
            src={leaf}
          ></img>
          <h6 style={{ paddingTop: "6px", paddingLeft: "8px", fontSize:'20px' }}>Protected Area</h6>
        </div>
      </div>
    </div>
  );
}

export default CenterPart;