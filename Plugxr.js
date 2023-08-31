// BoxGrid.js
import React from 'react';

const Plugxr = () => {
  const boxes = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="box">
      Box {index + 1}
    </div>
  ));

  return (
    <div className="box-grid">
      
      <div className="row">{boxes.slice(0, 3)}</div>
      <div className="row">{boxes.slice(3)}</div>
    </div>
  );
};

export default Plugxr;
