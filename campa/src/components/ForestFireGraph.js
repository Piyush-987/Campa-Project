import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2010, area: 10 },
  { year: 2011, area: 55 },
  { year: 2013, area: 39 },
  { year: 2015, area: 54 },
  { year: 2017, area: 33 },
  { year: 2019, area: 62 },
  { year: 2021, area: 45 },
];

const GradientAreaChart = () => {
  return (
    <div style={{ width: "450px", height: "440px", marginBottom:'20px' }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF4500" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="transparent" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: "Area (Sq. km)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="area"
            stroke="#007BFF"
            fillOpacity={1}
            fill="url(#colorArea)"
            isAnimationActive={true}
            animationDuration={2000}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradientAreaChart;
