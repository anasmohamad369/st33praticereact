
import React, { useState } from 'react';
import obj from './DataOne.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FetchData = () => {
  const [state, setState] = useState(obj);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name"
      />
      
      <div>
        {state
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
             .map((x, index) => (
            <div key={index} className="card" style={{ width: '18rem' }}>
              <img src={x.pic} className="card-img-top" alt="Profile" />
              <div className="card-body">
                <h5 className="card-title">{x.name}</h5>
                <p className="card-text">{x.age}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
