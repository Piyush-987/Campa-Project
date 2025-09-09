import React, {useState} from 'react';
import './LeftPanel.css';
import district from '../images/district.png'
import analyse from'../images/analyse.png'
import mapLayer from '../images/mapLayer.png'
import target from '../images/target.png'
export default function LeftPanel() {
  
  const [layers, setLayers] = useState({});
  const [species, setSpecies] = useState({});

  
  const toggle = (setFn, name) => {
    setFn((prev) => ({ ...prev, [name]: !prev[name] }));
  };


  return (
    <div className='leftpanel'>
      <div className='block' style={{marginTop:'-18px'}}>
        <h4 className='title' >
        <img
            style={{
              width: "18px",
              height: "18px",
              marginRight:'10px',
              marginTop:'-3px',
              marginLeft:'-15px'
            }}
            src={district}
          ></img>
          Search District
        </h4>
        <select className='select-district' style={{marginLeft:'-2px'}}>
          <option>Choose District</option>
        </select>

      </div>
      <div className='block' style={{marginTop:'-5px'}}>
        <h4 className='title'>
          <img
            style={{
              width: "17px",
              height: "17px",
              marginRight:'12px',
              marginTop:'-3px',
              marginLeft:'-15px'
            }}
            src={analyse}
          ></img>
           Analysis Tools </h4>
        <h6 style={{fontSize:'12px',marginTop:'-4px', marginLeft:'-3px'}}>Analyze a specific point below</h6>
        <input className='input' placeholder='Latiitude'/>
        <input className='input' placeholder='Longitude'/>
        <button className='primary-button'>Analyze</button>
      </div>


      <div className="block" style={{marginTop:'-5px'}}>
        <h3 className="block_title">
          <img
            style={{
              width: "17px",
              height: "17px",
              marginRight:'12px',
              marginTop:'-3px',
              marginLeft:'-15px'
            }}
            src={mapLayer}
          ></img>
           Map Layers
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
      </div>

      <div className='block' style={{marginTop:'-10px'}}>
          <h4 className='title'>
            <img
            style={{
              width: "17px",
              height: "17px",
              marginRight:'10px',
              marginTop:'-3px',
              marginLeft:'-15px'
            }}
            src={target}
          ></img>
            Target Species</h4>
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
        </div>

        <div className='block-footer' style={{marginTop:'-10px'}}>
          <button className='button-csv'>Export as CSV</button>
          <button className='button-pdf'>Export as PDF</button>   

        </div>

      



    </div>

        
  )
}
