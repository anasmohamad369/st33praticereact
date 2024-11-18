import { useEffect, useState } from 'react';
// import React ,{useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export const BootStrapProduct = () => {
    const[state,setState] =useState([]);
    const[search,setSearch]=useState('');
      const  handleSearch=(e)=>{
                setSearch(e.target.value)
                console.log(search);
        }
       
        
            useEffect(()=>{
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setState(json))
        },[state])
  return (
    <>
        <input 
        type='search'
        value={search}
        onChange={handleSearch}  />
        <h1> Hello</h1>
        <div className="conatiner">
        <div className="row">
            {state
            .filter
            .map((list)=>
                <div className="col-md-4">
                    <div className="card">
                        <img src={list.image} className='card-img-top'/>
                        <div className="card-body">
                           <h3>
                           {list.price}
                           </h3>
                            <h3>
                            {list.title}
                                </h3>
                            </div>
                    </div>
                </div>
           
            )}
        </div>

        </div>
    </>
  )
}
