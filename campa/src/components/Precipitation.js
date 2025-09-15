import React, { useState, useEffect } from "react";
import rain from "../images/rain.png"; // your icon path

export default function Precipitation() {
  // animated number state
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = 21.99; // your target number

  useEffect(() => {
    let currentVal = 0;
    const step = targetValue / 50; // how many steps to reach target
    const timer = setInterval(() => {
      currentVal += step;
      if (currentVal >= targetValue) {
        currentVal = targetValue;
        clearInterval(timer);
      }
      setDisplayValue(parseFloat(currentVal.toFixed(2))); // 2 decimals
    }, 30); // speed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="four" id="four3" style={{ marginRight: "30px", marginTop: "-5px" }}>
      <div className="climateHeadinng d-flex justify-content-center">
        <h6 style={{ fontSize: "16px", paddingTop: "10px" }}>
          <strong>Precipitation</strong>
        </h6>
      </div>
      <div className="rain d-flex justify-content-center">
        <img
          style={{
            marginTop: "15px",
            marginBottom: "20px",
            width: "60px",
            height: "60px",
          }}
          src={rain}
          alt="rain"
        />
      </div>
      <div className="valuehere d-flex justify-content-center">
        <strong style={{ fontSize: "30px" }}>{displayValue}mm</strong>
      </div>
    </div>
  );
}
