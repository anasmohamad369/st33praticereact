import React, { useState } from 'react'
import { FetchData } from './FetchData';

export const Fetch = () => {
    const[state,setState] =useState([]);
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setState(json))
   
            return (

                <div>
                <table >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((x, index) => (
                      <tr key={index}>
                        <td>{x.title}</td>
                        <td>{x.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <FetchData/> */}
              </div>        

  )
}
