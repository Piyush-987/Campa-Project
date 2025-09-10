import React from 'react';
import './IllegalActivityPanel.css';


import encroachment from "../images/Encrochment.png";
import logging from "../images/IllegalLogging.png";
import poaching from "../images/Poaching.png";
import mining from "../images/IllegalMining.png";

function IllegalActivityPanel() {
  const activities = [
    { name: "Encroachment", cases: "6 new cases", change: "+4%", icon: encroachment },
    { name: "Illegal Logging", cases: "5 new cases", change: "+1%", icon: logging },
    { name: "Poaching", cases: "3 new cases", change: "+3%", icon: poaching },
    { name: "Illegal Mining", cases: "2 new cases", change: "+1%", icon: mining },
  ];

  return (
    <div className="illegal-activity-panel">
      <h5>Illegal activities happening in forest</h5>
      <div className="activity-grid">
        {activities.map((a, i) => (
          <div key={i} className="activity-card">
            <img src={a.icon} alt={a.name} className="activity-icon" />
            <h6>{a.name}</h6>
            <p>{a.cases}</p>
            <span className="change">{a.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IllegalActivityPanel;
