import React, { useEffect, useState } from "react";

const Gauge = () => {
  const size = 170;
  const height = 150;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const startAngle = -210; // arc start
  const endAngle = 30; // arc end
  const maxValue = 1100;
  const targetValue = 1001.0;

  const [value, setValue] = useState(0);

  // Animate value from 0 → targetValue
  useEffect(() => {
    let frame;
    const duration = 1500; // ms
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(progress * targetValue);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Convert polar coords for arc drawing
  const polarToCartesian = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  const valueAngle = startAngle + ((value / maxValue) * (endAngle - startAngle));

  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(valueAngle);
  const arcFlag = valueAngle - startAngle > 180 ? 1 : 0;

  const trailEnd = polarToCartesian(endAngle);

  return (
    <div style={{ width: size, height, display: "flex", justifyContent: "center",marginLeft:'15px' }}>
      <svg width={size} height={height} >
        {/* Trail arc */}
        <path
          d={`
            M ${start.x} ${start.y}
            A ${radius} ${radius} 0 1 1 ${trailEnd.x} ${trailEnd.y}
          `}
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <path
          d={`
            M ${start.x} ${start.y}
            A ${radius} ${radius} 0 ${arcFlag} 1 ${end.x} ${end.y}
          `}
          stroke="#4b3f9f"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
        {/* Pointer dot */}
        <circle cx={end.x} cy={end.y} r={6} fill="#4b3f9f" stroke="#fff" strokeWidth="3" />
        {/* Value text */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          fontSize="29"
          fontWeight="bold"
          fill="#000"
        >
          {value.toFixed(1)}
        </text>
        {/* Unit */}
        <text
          x="50%"
          y="75%"
          textAnchor="middle"
          fontSize="15"
          fill="#333"
          
        >
          hPa
        </text>
      </svg>
    </div>
  );
};

export default Gauge;
