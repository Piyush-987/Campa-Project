import React, { useState, useEffect } from "react";

const AirQualityGauge = ({ value = 45, max = 100 }) => {
  const [displayValue, setDisplayValue] = useState(0);       // number shown
  const [fillAngle, setFillAngle] = useState(0);             // arc sweep shown

  const centerX = 95;
  const centerY = 100;
  const radius = 75;

  // This is the total sweep for your gauge.
  // If your gauge covers 180°, adjust here.
  const maxFillAngle = (value / max) * 180; // 180° total arc

  // Animate on mount
  useEffect(() => {
    let currentVal = 0;
    let currentAngle = 0;

    const stepVal = value / 50; // speed of number increment
    const stepAngle = maxFillAngle / 50; // speed of arc increment

    const timer = setInterval(() => {
      currentVal += stepVal;
      currentAngle += stepAngle;

      if (currentVal >= value) {
        currentVal = value;
      }
      if (currentAngle >= maxFillAngle) {
        currentAngle = maxFillAngle;
      }

      setDisplayValue(parseFloat(currentVal.toFixed(0)));
      setFillAngle(currentAngle);

      if (currentVal === value && currentAngle === maxFillAngle) {
        clearInterval(timer);
      }
    }, 30); // adjust speed here

    return () => clearInterval(timer);
  }, [value, maxFillAngle]);

  // Convert angles to arc path coords
  const startAngle = 180;
  const endAngle = startAngle + fillAngle;

  const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
  const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);

  const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
  const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);

  const largeArcFlag = fillAngle > 180 ? 1 : 0;

  return (
    <div
      style={{
        width: "190px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
        marginLeft: "5px",
      }}
    >
      <svg width="190" height="100" viewBox="0 0 190 100">
        {/* Background arc */}
        <path
          d="M20,100 A75,75 0 0,1 170,100"
          fill="none"
          stroke="#ddd"
          strokeWidth="17"
        />

        {/* Filled arc (animated) */}
        <path
          d={`M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E67E22" /> {/* right side */}
            <stop offset="50%" stopColor="#F5D300" />
            <stop offset="100%" stopColor="#3BB54A" /> {/* left side */}
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Value */}
      <div
        style={{ fontSize: "30px", fontWeight: "bold", marginTop: "-35px" }}
      >
        {displayValue}
      </div>

      {/* Label */}
      <div style={{ fontSize: "14px", color: "#555", marginTop: "10px" }}>
        Good Air Quality
      </div>
    </div>
  );
};

export default AirQualityGauge;
