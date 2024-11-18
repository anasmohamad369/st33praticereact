import React, { useEffect, useState } from 'react'

export const Useeffect = () => {

    const[state,setState] =useState(0);
    const[data,setData] =useState(100);
    
    useEffect(()=>{
     console.log("anas");
        
    },[data])
    const add=()=>{
        setState(state+1)
}
    const del=()=>{
            setData(data-1)
    }
  return (
    <div>
        <h1>{state}</h1>
        <h1>{data}</h1>
        <button onClick={add}>+ add</button>
        <button onClick={del}>- sub</button>
        
    </div>
  )
}
