import React, { useState, useEffect } from "react";
import rain from "../images/rain.png"; // adjust your path

const PrecipitationCard = ({ value = 21.99 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let currentVal = 0;
    const step = value / 50; // speed of increment
    const timer = setInterval(() => {
      currentVal += step;
      if (currentVal >= value) {
        currentVal = value;
        clearInterval(timer);
      }
      setDisplayValue(parseFloat(currentVal.toFixed(2))); // 2 decimal places
    }, 30); // adjust speed here

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className="four"
      id="four3"
      style={{ marginRight: "30px", marginTop: "-5px" }}
    >
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
};

export default Precipitation;
