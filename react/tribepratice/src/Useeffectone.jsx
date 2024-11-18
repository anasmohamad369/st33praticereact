import React, { useEffect, useState } from 'react'

export const Useeffectone = () => {
    const[state,setState] = useState([])
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=20")
        .then((res)=>res.json)
        .then((json)=>setState(json.results))
        })
  return (
   <>
   {state.map((user, index) => (
  <div key={index}>
    <h3>{user.name.first} {user.name.last}</h3>
  </div>
))}

   </>
  )
}
