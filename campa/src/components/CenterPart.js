import React from "react";
import img1 from "../images/img1.jpg";
import Vector1 from "../images/Vector1.png";
import Vector2 from "../images/Vector2.png";
import Vector3 from "../images/Vector3.png";
import Vector4 from "../images/Vector4.png";
import ForestFireGraph from './ForestFireGraph'

function CenterPart() {
  return (
    <div className="center">
        <div className="heading" >Jharkhand Forest Intelligence Map
          <h4 style={{fontSize:'13px'}}> Click anywhere on the map for real forest analysis</h4>
        </div>

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
          <div className="new1" id='box1' style={{fontWeight:"600"}}>
            <img
          style={{marginTop:'-10px',marginBottom:'15px',
            width: "30px",
            height: "30px",
          }}
          src={Vector1}
        ></img>Dense Forest
        <h2 style={{marginBottom:'-5px', paddingTop:'8px', fontWeight:'bold'}}>58.7K</h2>
        <h5 style={{marginBottom:'-10px', paddingTop:'10px'}}>hectares</h5>
          </div>
          <div className="new1" id='box2' style={{fontWeight:"600"}}><img
          style={{marginTop:'-10px',marginBottom:'15px',
            width: "30px",
            height: "30px",
          }}
          src={Vector2}
        ></img>Degraded
        <h2 style={{marginBottom:'-5px', paddingTop:'8px', fontWeight:'bold'}}>22.3K</h2>
        <h5 style={{marginBottom:'-10px', paddingTop:'10px'}}>hectares</h5>
        </div>
          <div className="new1" id='box3' style={{fontWeight:"600"}}><img
          style={{marginTop:'-10px',marginBottom:'15px',
            width: "30px",
            height: "30px",
          }}
          src={Vector3}
        ></img>Afforested
        <h2 style={{marginBottom:'-5px', paddingTop:'8px', fontWeight:'bold'}}>8.9K</h2>
        <h5 style={{marginBottom:'-10px', paddingTop:'10px'}}>hectares</h5>
        </div>
          <div className="new1" id='box4' style={{fontWeight:"600"}}><img
          style={{marginTop:'-10px',marginBottom:'15px',
            width: "30px",
            height: "30px",
          }}
          src={Vector4}
        ></img>Monitored
        <h2 style={{marginBottom:'-5px', paddingTop:'8px', fontWeight:'bold'}}>82.3K</h2>
        <h5 style={{marginBottom:'-10px', paddingTop:'10px'}}>hectares</h5>
        </div>
        </div>
        <h4 style={{paddingLeft: '15px', marginBottom:'18px'}}>Real Time AI Analysis</h4>
        <div class="d-flex justify-content-evenly">
          <div className="new">
            <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{fontSize:'20px', paddingTop:'12px'}}>Climate Changes</h6>
            </div>
            <div className="bigg d-flex justify-content-center align-items-center" style={{flexWrap:'wrap', marginTop:'-10px'}}>
            <div className="four" style={{marginRight:'30px', marginBottom:'-10px'}}>1</div>
            <div className="four" style={{marginBottom:'-10px'}}>2</div>
            <div className="four" style={{marginRight:'30px',marginTop:'-5px'}}>3</div>
            <div className="four" style={{marginTop:'-5px'}}>4</div>
            </div>
          </div>
          <div className="new">
            <div className="climateHeadinng d-flex justify-content-center">
            <h6 style={{fontSize:'20px', paddingTop:'12px'}}>Forest Fire</h6>
            </div>
            <div className="bigg d-flex justify-content-center align-items-center" style={{marginTop:'-10px'}}>
            <ForestFireGraph/>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-evenly">
          <div className="new">Forest Distribution Chart</div>
          <div className="new">Element Levels in Soil</div>
        </div>
        <div class="d-flex justify-content-evenly">
          <div className="new2">Soil Characteristics</div>
        </div>
        <h4 style={{paddingLeft: '15px', paddingBottom: '18px'}}>Photo Gallery</h4>
        <div class="d-flex justify-content-between">
          <div className="new3" style={{marginLeft:'60px'}}>yo</div>
          <div className="new3">yo</div>
          <div className="new3" style={{marginRight:'60px'}}>yo</div>
        </div>
        <div class="d-flex justify-content-evenly">
          <div className="new">Biodiversity in the location</div>
          <div className="new">Illegal Activities happening in forest</div>
        </div>
        <h4 style={{paddingLeft: '15px', paddingBottom: '18px'}}>Forest Services & Resources</h4>
        <div class="d-flex justify-content-evenly">
          <div className="new4" style={{fontWeight:"600"}}>
            </div>
            <div className="new4" style={{fontWeight:"600"}}>
            </div>
            <div className="new4" style={{fontWeight:"600"}}>
            </div>
            <div className="new4" style={{fontWeight:"600"}}>
            </div>
          </div>
    </div>
  );
}

export default CenterPart;
