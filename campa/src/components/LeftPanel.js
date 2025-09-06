import React, {useState} from 'react';
import './LeftPanel.css';

export default function LeftPanel() {
  
  const [layers, setLayers] = useState({});
  const [species, setSpecies] = useState({});

  
  const toggle = (setFn, name) => {
    setFn((prev) => ({ ...prev, [name]: !prev[name] }));
  };


  return (
    <aside className='leftpanel'>
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
        <h3 className="block_title">
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
              className={`checklist_item ${layers[name] ? "is-checked" : ""}`}
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

      <section className='block'>
          <h4 className='title'>Target Species</h4>
          <ul className='checklist'>
            {["Sal" , 
              "Teak" ,
              "Bamboo",
              "Eucalyptus"].map((name) => (
                <li
                key={name}
                className={`checklist_item ${layers[name] ? "is-checked" : ""}`}
                >
                  <input
                    id={name}
                    type="checkbox"
                    checked={!!species[name]}
                    onChange={() => toggle(setSpecies, name)}
                    />
                    <label htmlFor={name}>  {name} </label>
               </li>
              ))}



          </ul>
        </section>

        <div className='block-footer'>
          <button className='button-csv'>Export as CSV</button>
          <button className='button-pdf'>Export as PDF</button>   

        </div>

      



    </aside>

        
  )
}

