import React from "react";

const AirQualityGauge = () => {
  const centerX = 95;
  const centerY = 100;
  const radius = 75;

  const fillAngle = 110; // how much arc to fill
  const startAngle = 180; // leftmost point
  const endAngle = startAngle + fillAngle; // = 20°

  // Start coordinates (-90°)
  const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
  const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);

  // End coordinates (20°)
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
        marginLeft:'5px'
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

        {/* Filled arc (0° → 110° sweep) */}
        <path
          d={`M${startX},${startY} A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Reversed Gradient */}
        <defs>
          <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E67E22" />  {/* right side */}
            <stop offset="50%" stopColor="#F5D300" />
            <stop offset="100%" stopColor="#3BB54A" /> {/* left side */}
          </linearGradient>
        </defs>
      </svg>

      {/* Value */}
      <div style={{ fontSize: "30px", fontWeight: "bold", marginTop: "-35px" }}>
        45
      </div>

      {/* Label */}
      <div style={{ fontSize: "14px", color: "#555",marginTop: "10px" }}>Good Air Quality</div>
    </div>
  );
};

export default AirQualityGauge;
