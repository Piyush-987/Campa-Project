import React, {useState} from 'react';

export default function LeftPanel() {
  
  const [layers, setLayers] = useState({});
  const [species, setSpecies] = useState({});

  
  const toggle = (setFn, name) => {
    setFn((prev) => ({ ...prev, [name]: !prev[name] }));
  };


  return (
    <aside className='left-panel'>
      <section className='block'>
        <h4 className='title'>
          Search District
        </h4>

        <select className='select-district'>
          <option>Choose District</option>
        </select>

      </section>
      <section className='block'>
        <h4 className='title'> Analysis Tools </h4>
        <span>Analyze a specific point below</span>
        <input className='input' placeholder='Latiitude'/>
        <input className='input' placeholder='Longitude'/>
        <button className='primary-button'>Analyze</button>
      </section>


      <section className="block">
        <h3 className="block__title">
          <span className="dot">●</span> Map Layers
        </h3>
        <ul className="checklist">
          {[
            "NDVI Analysis",
            "Digital Elevation",
            "Administrative Boundary",
            "Species Distribution",
            "Forest Degradation",
          ].map((name) => (
            <li
              key={name}
              className={`checklist__item ${layers[name] ? "is-checked" : ""}`}
            >
              <input
                id={name}
                type="checkbox"
                checked={!!layers[name]}
                onChange={() => toggle(setLayers, name)}
              />
              <label htmlFor={name}>{name}</label>
            </li>
          ))}
        </ul>
      </section>



    </aside>

        
  )
}

