import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const text='45'
// This is a placeholder for your SVG. You would replace this with your actual SVG code.
// The key parts are the 'needle' path and the text element for the number.
const GaugeSVG = ({ value }) => (
  <svg width="200" height="200" viewBox="0 0 200 200">
    {/* The semi-circular track (the background gradient part) */}
    <path
      d="M10 100 A90 90 0 0 1 190 100"
      stroke="url(#gradient)"
      strokeWidth="20"
      fill="none"
    />
    <defs>
      {/* Define the gradient for the track */}
      <linearGradient id="gradient">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="50%" stopColor="#FFC107" />
        <stop offset="100%" stopColor="#F44336" />
      </linearGradient>
    </defs>
    
    {/* The needle. We'll rotate this based on the value. */}
    <motion.path
    //   d="M100 100 L100 20 A5 5 0 0 1 105 100 Z"
      fill="#555"
      
    //   initial={{ rotate: -90 }}
    //   animate={{ rotate: -90 + (value / 100) * 180 }}
    //   transition={{ duration: 1 }}
      style={{ transformOrigin: 'center' }}
    />

    {/* The value text. Use AnimatePresence for a nice fade effect. */}
    <AnimatePresence>
      <motion.text
      
        key={text}
        x="100"
        y="120"
        fontSize="48"
        fontWeight="bold"
        textAnchor="middle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {value}
      </motion.text>
    </AnimatePresence>
    
    {/* The "Good Air Quality" text */}
    <text x="100" y="160" fontSize="16" textAnchor="middle" fill="#555">
      Good Air Quality
    </text>
  </svg>
);

const AnimatedGauge = ({ airQualityValue }) => {
  return (
    <div style={{ width: 200, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <GaugeSVG value={airQualityValue} />
    </div>
  );
};

export default AnimatedGauge;