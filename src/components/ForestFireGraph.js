import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ForestFireGraph = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "",
    },
	axisX: {
      valueFormatString: "",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    axisY: {
      title: "Area(sq. km)",
      valueFormatString: "",
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: function (e) {
          return e.value.toFixed(0);
        },
      },
    },
    data: [
      {
        type: "area",
        xValueFormatString: "",
        yValueFormatString: "",
        dataPoints: [
          { x: new Date("2014"), y: 40 },
          { x: new Date("2016"), y: 30 },
          { x: new Date("2018"), y: 20 },
		  { x: new Date("2020"), y: 50 },
		  { x: new Date("2022"), y: 25 },
		  { x: new Date("2024"), y: 50 },
        ],
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default ForestFireGraph;
