import React, { useMemo, useState } from 'react'

export const Usememo = () => {
    let [add,setAdd] =useState(0);
    let [del,setDel] =useState(100);
    const addition=()=>{
                setAdd(add+1);
    }
    
    const deletion =()=>{
        setDel(del-1);
}
      
 const multiplication =  useMemo(  function multi(){
        console.log("hello");
        return add*5;
 },[add])
  return (
    <div>
    Usememo
    <h1>Use Memo</h1>
    <h1>{add}</h1>
    <h1>{del}</h1>
    <button onClick={addition}>Add </button>
    <button onClick={deletion}>Del</button>
    <h3>{multiplication}</h3>    

    </div>
  )
}
