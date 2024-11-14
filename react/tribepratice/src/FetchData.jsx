import React, { useState } from 'react';
import obj from './DataOne.js';

export const FetchData = () => {
  const [state, setState] = useState(obj);

  return (
    <div>
      {state.map((x, index) => (
        <div key={index}>
          <h2>{x.name}</h2>
          <p>Age: {x.age}</p>
          <img src={x.pic}  style={{ width: '200px', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};
