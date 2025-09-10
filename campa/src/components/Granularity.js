import React, { useEffect, useState } from "react";

const GaugeChart = () => {
  const [progress, setProgress] = useState(0);
  const target = 55; // percentage value
  const size = 170;
  const strokeWidth = 13;
  const radius = (size - strokeWidth) / 2;
  const maxAngle = 270; // total span
  const startAngle = -135; // rotated by 90° so it starts from top
  const endAngle = startAngle + (progress / 100) * maxAngle;

  // Animate percentage
  useEffect(() => {
    let start = 0;
    const step = () => {
      start += 1;
      if (start <= target) {
        setProgress(start);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, []);

  return (
    <div
      style={{
        width: "220px",
        height: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop:'12px'
      }}
    >
      <svg width={size} height={size}>
        {/* Background arc */}
        <path
          d={describeArc(size / 2, size / 2, radius, startAngle, startAngle + maxAngle)}
          fill="none"
          stroke="#4aa4af"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Foreground arc */}
        <path
          d={describeArc(size / 2, size / 2, radius, startAngle, endAngle)}
          fill="none"
          stroke="#1b344c"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

// Arc drawing helper
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

export default GaugeChart;
