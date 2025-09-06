import React, { useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ForestDistributionGraph = () => {
  const chartRef = useRef(null);

  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  };

  const options = {
    theme: "light2",
    animationEnabled: true,
    exportEnabled: false, // disables export menu
    axisX: {
      title: "",
      margin: 0,            // removes extra space on right
      labelAutoFit: false,  // prevents CanvasJS from adding padding for labels
    },
    axisY: {
      title: "",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD",
      minimum: 5,
      maximum: 60,
      interval: 10,
      suffix: "%"
    },
    axisY2: {
      title: "",
      titleFontColor: "#51CDA0",
      lineColor: "#51CDA0",
      labelFontColor: "transparent",
      tickColor: "transparent",
    },
    toolTip: { shared: true },
    legend: { cursor: "pointer", itemclick: toggleDataSeries },
    data: [
      {
        type: "spline",
        name: "Wildlife Habitat",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0",
        dataPoints: [
          { x: new Date(2019, 0, 1), y: 20 },
          { x: new Date(2019, 1, 1), y: 25 },
          { x: new Date(2020, 2, 1), y: 30 },
          { x: new Date(2020, 3, 1), y: 18 },
          { x: new Date(2021, 4, 1), y: 15 },
          { x: new Date(2021, 5, 1), y: 28 },
          { x: new Date(2022, 6, 1), y: 35 },
          { x: new Date(2022, 7, 1), y: 40 },
          { x: new Date(2023, 8, 1), y: 32 },
          { x: new Date(2023, 9, 1), y: 25 },
          { x: new Date(2024, 10, 1), y: 38 },
          { x: new Date(2025, 11, 1), y: 45 },
        ],
      },
      {
        type: "spline",
        name: "Open Forest",
        axisYType: "secondary",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "#,##0.#",
        dataPoints: [
          { x: new Date(2019, 0, 1), y: 19034.5 },
          { x: new Date(2019, 1, 1), y: 20015 },
          { x: new Date(2020, 2, 1), y: 27342 },
          { x: new Date(2020, 3, 1), y: 20088 },
          { x: new Date(2021, 4, 1), y: 20234 },
          { x: new Date(2021, 5, 1), y: 29034 },
          { x: new Date(2022, 6, 1), y: 30487 },
          { x: new Date(2022, 7, 1), y: 32523 },
          { x: new Date(2023, 8, 1), y: 20234 },
          { x: new Date(2023, 9, 1), y: 27234 },
          { x: new Date(2024, 10, 1), y: 33548 },
          { x: new Date(2025, 11, 1), y: 32534 },
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100% + 15px)", // bottom stretch
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        marginTop:'65px',
        marginLeft:'18px',
        marginRight:'-10px'
      }}
    >
      <CanvasJSChart
        options={options}
        onRef={(ref) => (chartRef.current = ref)}
      />
      {/* Hide CanvasJS credit line */}
      <style>
        {`.canvasjs-chart-credit { display: none !important; }`}
      </style>
    </div>
  );
};

export default ForestDistributionGraph;
