
import React from 'react';
import { useState } from 'react'
import './Plugxr.css'
import Plugxr from './Plugxr';

function Updatedplugxr() {
  const [setup, setSetup] = useState(false);
  const changeHandler = (id) => {
    setSetup(true);

  }
  const boxes = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="box">
      Box {index + 1}
    </div>
  ));

  return (
    <div className="App">

      <button onClick={() => changeHandler()} type='submit' className='btnn'> save</button>
      <Plugxr />
      {setup && <div className='popup'>
        <div className="box-grid">

          <div className="row">{boxes.slice(0, 1)}</div>
          
        </div>

      </div>}
    </div>
  );
}

export default Updatedplugxr;
