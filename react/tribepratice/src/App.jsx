// import { useState } from 'react'
import country ,{place,area,friends,people,demo} from './data.jsx'
import './App.css'
import { UseState } from './UseState.jsx'
import { Usestateone } from './usestateone.jsx'


function App() {
 

  return (
    <>
   {/* <Api/>
  <Shashank/>
   <button onClick={fun}> click to increment</button>
   <p>{count}</p>
   <button onClick={fun1}> click to increment</button> */}
 
  <h1>{friends[0]+" "+friends[1]}</h1>
  <h1>{people.age}</h1>
      <table border='1px'>
         <tr border='1px'>
 
          <th>NAME</th>
          <th>Age</th>

          <th>County</th>
          </tr> 
         <tr>

          <td>{people.name}</td>
          <td>{people.age}</td>
          <td>{people.country}</td>
          </tr> 

      </table>
      <UseState/>
      {/* <Usestateone/> */}
    </>
  )
}

export default App
