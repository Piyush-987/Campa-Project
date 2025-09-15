import React, { useState, useEffect } from "react";
import Vector1 from "../images/Vector1.png";
import Vector2 from "../images/Vector2.png";
import Vector3 from "../images/Vector3.png";
import Vector4 from "../images/Vector4.png";

// Local hook — no export default here
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(parseFloat(start.toFixed(1)));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

function ForestIntelligence() {
  // animated numbers
  const dense = useCountUp(58.7);
  const degraded = useCountUp(22.3);
  const afforested = useCountUp(8.9);
  const monitored = useCountUp(82.3);

  return (
    <div>
      <div className="d-flex justify-content-evenly">
        <div className="new1" id="box1" style={{ fontWeight: 600 }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector1}
            alt=""
          />
          Dense Forest
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            {dense}K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>hectares</h5>
        </div>

        <div className="new1" id="box2" style={{ fontWeight: 600 }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector2}
            alt=""
          />
          Degraded
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            {degraded}K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>hectares</h5>
        </div>

        <div className="new1" id="box3" style={{ fontWeight: 600 }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector3}
            alt=""
          />
          Afforested
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            {afforested}K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>hectares</h5>
        </div>

        <div className="new1" id="box4" style={{ fontWeight: 600 }}>
          <img
            style={{
              marginTop: "-10px",
              marginBottom: "15px",
              width: "30px",
              height: "30px",
            }}
            src={Vector4}
            alt=""
          />
          Monitored
          <h2
            style={{
              marginBottom: "-5px",
              paddingTop: "8px",
              fontWeight: "bold",
            }}
          >
            {monitored}K
          </h2>
          <h5 style={{ marginBottom: "-10px", paddingTop: "10px" }}>hectares</h5>
        </div>
      </div>
    </div>
  );
}

export default ForestIntelligence;
