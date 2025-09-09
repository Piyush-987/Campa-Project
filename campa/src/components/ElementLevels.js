// BarChart.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = () => {
  const data = [
    { name: 'N', value: 95, color: '#90EE90' },
    { name: 'P', value: 30, color: '#D4AC0D' },
    { name: 'K', value: 120, color: '#A9A9E6' },
    { name: 'O₂', value: 140, color: '#87CEEB' },
    { name: 'Si', value: 78, color: '#F08080' },
    { name: 'Ca', value: 52, color: '#D3D3D3' },
    { name: 'C', value: 180, color: '#696969' }
  ];

  const svgRef = useRef();

  useEffect(() => {
    // Clear previous SVG content to prevent multiple renderings on re-renders
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current);
    const width = 450;
    const height = 450;
    const margin = { top: 20, right: 20, bottom: 30, left: 60 };

    svg.attr('width', width).attr('height', height);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.4);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) + 20])
      .nice()
      .range([innerHeight, 0]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add X axis
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x));

    // Add Y axis and label
    g.append('g')
      .call(d3.axisLeft(y));

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -45)
      .attr('x', -innerHeight / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Particles (ppm)');

    // *** REMOVED THE GRID LINES SECTION ***
    // The following code block has been removed:
    // g.append('g')
    //   .attr('class', 'grid')
    //   .call(d3.axisLeft(y)
    //     .tickSize(-innerWidth)
    //     .tickFormat(''));

    // Create and animate the bars
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.name))
      .attr('width', x.bandwidth())
      .attr('fill', d => d.color)
      .attr('y', innerHeight) // Start from the bottom for animation
      .attr('height', 0)     // Start with a height of 0
      .transition()
      .duration(1500)       // Animation duration in milliseconds
      .ease(d3.easeLinear)
      .attr('y', d => y(d.value))
      .attr('height', d => innerHeight - y(d.value));

  }, [data]);

  return (
    <div style={{ width: '450px', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;