import React from "react";
import img1 from "../images/img1.jpg";
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
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import ElementLevels from "./ElementLevels";
import Temperature from "../components/Temperature";
import AirQuality from "../components/AirQuality";
import Pressure from "../components/Pressure";
import rain from "../images/rain.png";
import left from "../images/left.png";
import right from "../images/right.png";
import red from "../images/red.png";
import Granularity from "../components/Granularity";
import BiodiversityPanel from "./BiodiversityPanel";
import IllegalActivityPanel from "./IllegalActivityPanel";
import ForestIntelligence from "./ForestIntelligence";
import Precipitation from "./Precipitation";

function CenterPart() {
  return (
    <div className="center">
      <div className="heading justify-content-evenly">
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
          <p>
            <strong>Jharkhand Forest Intelligence Map</strong>
          </p>
          <p style={{ fontSize: "13px", marginTop: "-18px" }}>
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
      <div className="image-container d-flex justify-content-center" style={{ position: "relative" }}>
        <img
          style={{
            marginLeft: "0px",
            marginBottom: "18px",
            width: "100%",
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
            <img style={{}} src={minus}></img>
          </div>
          <div className="over5">
            <img style={{}} src={plus}></img>
          </div>
        </div>
      </div>
      <div className="intelligence d-flex align-items-center">
        <h4 style={{ paddingLeft: "15px", marginBottom: "18px" }}>
          <strong>Forest Intelligence Dashboard</strong>
        </h4>
        <h6 style={{ marginLeft: "535px" }}>Generate Report</h6>
      </div>

      <ForestIntelligence />

      <h4 style={{ paddingLeft: "15px", marginBottom: "18px" }}>
        <strong>Real Time AI Analysis</strong>
      </h4>
      <div className="d-flex justify-content-evenly">
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              <strong>Climate Changes</strong>
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ flexWrap: "wrap", marginTop: "-10px" }}
          >
            <div
              className="four"
              id="four1"
              style={{ marginRight: "30px", marginBottom: "-10px" }}
            >
              <div className="climateHeadinng d-flex justify-content-center">
                <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
                  <strong>Air Quality</strong>
                </h6>
              </div>
              <div>
                <AirQuality />
              </div>
            </div>
            <div className="four" id="four2" style={{ marginBottom: "-10px" }}>
              <div className="climateHeadinng d-flex justify-content-center">
                <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
                  <strong>Temperature</strong>
                </h6>
              </div>
              <div>
                <Temperature />
              </div>
            </div>
            <div
              className="four"
              id="four3"
              style={{ marginRight: "30px", marginTop: "-5px" }}
            >

              <Precipitation/>


              <div className="rain d-flex justify-content-center">
                <img
                  style={{
                    marginTop: "15px",
                    marginBottom: "20px",
                    width: "60px",
                    height: "60px",
                  }}
                  src={rain}
                ></img>
              </div>
              <div className="valuehere d-flex justify-content-center">
                <strong style={{ fontSize: "30px" }}>21.99mm </strong>
              </div>
            </div>
            <div className="four" id="four4" style={{ marginTop: "-5px" }}>
              <div className="climateHeadinng d-flex justify-content-center">
                <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
                  <strong>Pressure</strong>
                </h6>
              </div>
              <div>
                <Pressure />
              </div>
            </div>
          </div>
        </div>
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              <strong>Forest Fire</strong>
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
      <div className="d-flex justify-content-evenly">
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              <strong>Forest Distribution Chart</strong>
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ marginTop: "-10px" }}
          >
            <ForestDistributionChart />
          </div>
        </div>
        <div className="new">
          <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{ fontSize: "20px", paddingTop: "12px" }}>
              <strong>Element Levels in Soil</strong>
            </h6>
          </div>
          <div
            className="bigg d-flex justify-content-center align-items-center"
            style={{ marginTop: "-10px" }}
          >
            <ElementLevels />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="new2">
          <div className=" d-flex justify-content-center">
            <h6
              style={{
                paddingLeft: "350px",
                paddingRight: "350px",
                fontSize: "20px",
                paddingTop: "12px",
              }}
            >
              <strong>Soil Characteristics</strong>
            </h6>
          </div>
          <div
            className="d-flex justify-content-evenly align-items-center"
            style={{ marginTop: "10px" }}
          >
            <div
              className=" redsoil d-flex justify-content-center"
              style={{ width: "435px", height: "185px", borderRadius: "10px" }}
            >
              <div
                style={{
                  width: "125px",
                  height: "183.5px",
                  borderRadius: "10px 0px 0px 10px",
                }}
              >
                <img
                  style={{
                    width: "125px",
                    height: "183.5px",
                  }}
                  src={red}
                ></img>
              </div>
              <div
                style={{
                  width: "308px",
                  height: "183.5px",
                  borderRadius: "0px 10px 10px 0px",
                  padding: "10px",
                }}
              >
                <div className="d-flex justify-content-center">
                  <h6 style={{ marginBottom: "13px", fontSize: "18px" }}>
                    <strong>Red Soil</strong>
                  </h6>
                </div>
                <div>
                  <li>It’s partially red because of ferric oxide.</li>
                  <li>Rich in Iron content.</li>
                  <li>Has moderate fertility for crops.</li>
                  <li>Good water holding capacity.</li>
                  <li>Contains a pH level from 6.6 to 8.0</li>
                </div>
              </div>
            </div>
            <div
              className=" granularity d-flex justify-content-center"
              style={{ width: "435px", height: "185px", borderRadius: "10px" }}
            >
              <div
                style={{
                  width: "240px",
                  height: "183.5px",
                  borderRadius: "10px 0px 0px 10px",
                }}
              >
                <Granularity />
              </div>
              <div
                style={{
                  width: "195px",
                  height: "183.5px",
                  borderRadius: "0px 10px 10px 0px",
                  padding: "10px",
                }}
              >
                <div className="d-flex justify-content-center">
                  <h6
                    style={{
                      marginBottom: "13px",
                      fontSize: "19px",
                      marginRight: "17px",
                    }}
                  >
                    <strong>Granularity</strong>
                  </h6>
                </div>
                <div
                  className="d-flex justify-content-center"
                  style={{ marginTop: "20px" }}
                >
                  <div style={{ fontSize: "22px" }}>Sand 5.2%</div>

                  <div style={{ fontSize: "22px" }}>Slit 30%</div>

                  <div style={{ fontSize: "22px" }}>Clay 9.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 style={{ paddingLeft: "15px", paddingBottom: "18px" }}>
        <strong>Photo Gallery</strong>
      </h4>
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
      <div class="d-flex justify-content-evenly align-items-stretch" style={{marginTop:'35px' , gap:'20px'}}>
        <div className="new5">
          {/* <div className="d-flex justify-content-center">
          <h6 style={{padding:'10px'}}><strong>Biodiversity in the location</strong></h6>
          </div> */}
          {/* <div className=" d-flex justify-content-center" >
            <div> */}

          <BiodiversityPanel />

          {/* </div>
          </div> */}
          </div>
        <div className="new5 ">
          {/* <div className="d-flex justify-content-center">
          
          <h6 style={{padding:'10px'}}><strong>Illegal Activities happening in forest</strong></h6>
          </div>
          <div className=" d-flex justify-content-center">
            <div> */}

          <IllegalActivityPanel />

          {/* </div> */}
          {/* </div> */}
        </div>
        {/* <div className="d-flex justify-content-evenly align-items-stretch" style={{ gap: "20px" }}> */}
        {/* <div className="dashboard-card"> */}

        {/* </div> */}
        {/* <div className="dashboard-card"> */}

        {/* </div> */}
      </div>
      <h4 style={{ paddingLeft: "15px", paddingBottom: "18px" }}>
        <strong>Forest Services & Resources</strong>
      </h4>
      <div className="d-flex justify-content-evenly" style={{ fontSize: "20px" }}>
        <button className="new4 d-flex align-items-center justify-content-center">
          <img
            style={{ marginTop: "-1px", width: "28px", height: "28px" }}
            src={trees}
          ></img>
          <h6
            style={{ paddingTop: "6px", paddingLeft: "8px", fontSize: "20px" }}
          >
            Campa Projects
          </h6>
        </button>
        <button
          className="new4 d-flex align-items-center justify-content-center"
          style={{ fontWeight: "600" }}
        >
          <img
            style={{ marginTop: "-2px", width: "32px", height: "32px" }}
            src={elephant}
          ></img>
          <h6
            style={{ paddingTop: "7px", paddingLeft: "8px", fontSize: "20px" }}
          >
            Elephant Tracker
          </h6>
        </button>
        <button
          className="new4 d-flex align-items-center justify-content-center"
          style={{ fontSize: "900" }}
        >
          <img
            style={{ paddingBottom: "2px", width: "28px", height: "30px" }}
            src={carbonmap}
          ></img>
          <h6
            style={{ paddingTop: "7px", paddingLeft: "8px", fontSize: "20px" }}
          >
            Places to visit
          </h6>
        </button>
        <button
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
          <h6
            style={{ paddingTop: "6px", paddingLeft: "8px", fontSize: "20px" }}
          >
            Protected Area
          </h6>
        </button>
      </div>
    </div>
  );
}

export default CenterPart;
