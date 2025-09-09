import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2015, habitat: 55, forest: 38, degraded: 7 },
  { year: 2017, habitat: 48, forest: 28, degraded: 36 },
  { year: 2019, habitat: 50, forest: 35, degraded: 44 },
  { year: 2021, habitat: 39, forest: 17, degraded: 35 },
  { year: 2023, habitat: 39, forest: 42, degraded: 29 },
  { year: 2025, habitat: 28, forest: 51, degraded: 22 },
  { year: 2027, habitat: 12, forest: 47, degraded: 15 },
];

const MultiLineChart = () => {
  return (
    <div style={{ width: "450px", height: "430px", marginRight:'15px' }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#000" strokeDasharray="0" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(tick) => `${tick}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="habitat"
            stroke="#A03B7D"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#A03B7D", fill: "#fff" }}
            name="Wildlife Habitat"
            isAnimationActive={true}
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="forest"
            stroke="#2E8B57"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#2E8B57", fill: "#fff" }}
            name="Open Forest"
            isAnimationActive={true}
            animationDuration={2000}
          />
          <Line
            type="monotone"
            dataKey="degraded"
            stroke="#1E3A8A"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#1E3A8A", fill: "#fff" }}
            name="Degraded"
            isAnimationActive={true}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiLineChart;
