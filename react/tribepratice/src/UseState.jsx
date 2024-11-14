import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const UseState = () => {
  const [state, setState] = useState(100);
  const [show, setShow] = useState('');
  const arr = ["Anas", "Ram", "Charan", "Ayyappa"];
  const arr2 = ["Kohli", "Sachin", "Virat", "Siraj"];
  const [data, setData] = useState({ fname: "Anas", lname: "Mohamad" });
  const [arra, setArra] = useState(arr);

  const handle = () => {
    setState(state + 1);
  };

  const handledel = () => {
    setState(state - 1);
  };

  const display = () => {
    setShow("Hello, I'm Anas");
  };

  const array = () => {
    setArra(arr2);
  };

  const change=()=>{
    setData({...data, fname:"akahil"}) //s opread operator it will keep the pervious data was what was there if we cant use the spread operator it will be cant display te pervious data so dpread operator is the main function 
  }

  return (
    <div>
      <h1>UseState</h1>
      
      <h2>{state}</h2>
      <button onClick={handle} className='btn btn-success'>Add</button>
      <button onClick={handledel} className='btn btn-dark'>-</button>

      <h2>{show}</h2>
      <button onClick={display} className='btn btn-danger'>Click</button>

      <h2>{arra}</h2> {/* Join array to display as a comma-separated string */}
      <button onClick={array} className='btn btn-danger'>Change Array</button>

      <h3>First Name: {data.fname}</h3>
      <h3>Last Name: {data.lname}</h3>
      <button onClick={change}>Chnage object value</button>
    </div>
  );
};

