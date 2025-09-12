import React from 'react'
import Vector1 from "../images/Vector1.png";
import Vector2 from "../images/Vector2.png";
import Vector3 from "../images/Vector3.png";
import Vector4 from "../images/Vector4.png";
function ForestIntelligence() {
  return (
    <div>
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
    </div>
  )
}

export default ForestIntelligence