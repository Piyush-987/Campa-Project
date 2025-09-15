import React from 'react';
import { motion } from 'framer-motion';

const TemperatureWidget = () => {
  const temperature = 25;
  const highTemp = 33;
  const lowTemp = 22;

  const containerSize = 200;
  const svgSize = containerSize;
  const viewBoxSize = 600;
  const scaleFactor = containerSize / viewBoxSize;

  const arcStrokeWidth = 100 * scaleFactor;
  // Reduced the circle radius by 15 units for a visible change
  const circleRadius = 200 * scaleFactor;

  const mainTempFontSize = 82;
  const celsiusFontSize = 50;
  const highLowFontSize = 2 * 16 * scaleFactor;

  const minAngle = 205;
  const totalRange = highTemp - lowTemp;
  const currentPosition = temperature - lowTemp;
  const angle = minAngle - (currentPosition / totalRange) * minAngle;

  const arcPath = `M 225, 225
  m -180, 0
  a 180,180 0 1,1 360,0
  a 180,180 0 1,1 -360,0`;
  const arcLength = 700;

  const gradientId = 'temperatureGradient';

  const indicatorArcRadius = 180;
  const indicatorStartAngle = 135;
  const finalIndicatorAngle = 135 - 180;

  return (
    <div
      style={{
        width: `${containerSize}px`,
        height: `${containerSize}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: '15px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        padding: '10px'
      }}
    >
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} style={{ overflow: 'visible', marginLeft:'50px' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#8a2be2' }} />
            <stop offset="100%" style={{ stopColor: '#4a90e2' }} />
          </linearGradient>
        </defs>
        <g transform="rotate(135 225 225)">
          <path
            d={arcPath}
            fill="none"
            stroke="#e0e0e0"
            strokeWidth={arcStrokeWidth}
            strokeLinecap="round"
          />
          <motion.path
            d={arcPath}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={arcStrokeWidth}
            strokeLinecap="round"
            initial={{ strokeDasharray: 0, strokeDashoffset: arcLength }}
            animate={{
              strokeDasharray: [0, arcLength],
              strokeDashoffset: [arcLength, arcLength - (angle / 360) * arcLength],
            }}
            transition={{
              duration: 2,
              ease: 'easeOut',
            }}
          />
        </g>
        <circle
          cx="225"
          cy="225"
          r={circleRadius}
          fill="white"
        />
        {/* Indicator dot */}
        <motion.g
          transformOrigin="225 225"
          initial={{ rotate: indicatorStartAngle }}
          animate={{ rotate: finalIndicatorAngle }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <circle cx="348" cy={535 - indicatorArcRadius} r="17" fill="white" stroke="#333" strokeWidth="2" />
          <circle cx="348" cy={535 - indicatorArcRadius} r="8" fill="#4a90e2" />
        </motion.g>

        {/* Temperature and Celsius in the center */}
        <text
          x="225"
          y="225"
          textAnchor="middle"
          fill="#333"
          dominantBaseline="middle"
        >
          <tspan fontSize={`${mainTempFontSize}px`} fontWeight="bold">{temperature}</tspan>
          <tspan fontSize={`${celsiusFontSize / 1}px`} fontWeight="bold" dy="-0.4em">°</tspan>
          <tspan fontSize={`${celsiusFontSize}px`} dx="0.1em" dy="0.2em">C</tspan>
        </text>
      </svg>
      <div
        style={{
          position: 'absolute',
          bottom: `${10 * scaleFactor}px`,
          width: '75%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: `${highLowFontSize}px`, color: '#666', marginTop:'-55px' }}>
          High {highTemp}°
        </div>
        <div style={{ fontSize: `${highLowFontSize}px`, color: '#666', marginTop:'-55px' }}>
          Low {lowTemp}°
        </div>
      </div>
    </div>
  );
};

export default TemperatureWidget;