import React, { useEffect, useState } from 'react';
import './BiodiversityPanel.scss';

function BiodiversityPanel() {
  const speciesData = [
    { name: "Sal", range: "55 - 60%", value: 60 },
    { name: "Teak", range: "5 - 7%", value: 7 },
    { name: "Bamboo", range: "10 - 12%", value: 12 },
    { name: "Eucalyptus", range: "2 - 4%", value: 4 },
  ];

  const [progress, setProgress] = useState(speciesData.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(speciesData.map((s) => s.value));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="panel biodiversity-panel">
      <h4>Biodiversity in the Location</h4>

      <div className="species-list">
        {speciesData.map((s, i) => (
          <div key={i} className="species-row">
            <span className="species-name">{s.name}</span>
            <div className="species-bar">
              <div
                className="species-fill"
                style={{ width: `${progress[i]}%` }}
              ></div>
            </div>
            <span className="species-range">{s.range}</span>
          </div>
        ))}
      </div>

      <div className="recommendation">
        <strong>Recommended :</strong> Bamboo
      </div>
    </div>
  );
}

export default BiodiversityPanel;