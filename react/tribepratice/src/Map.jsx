import React, { useState } from 'react'
import data from './Assets.json';
// import '../node_modules/bootstrap/dist/css/'
export const Map = () => {
    const array = ['anil','anas','mohamad','charan','ram'];
    const [state,setState] = useState(array)  

    const[json, setJson] = useState(data)
    return (
    <>
        <h1> hello</h1>
        {/* {state.map((x)=><li>{x}</li>)} */}

        {json.map((x)=><h2>{x.name}</h2>)}

{/* tabless data */}



    </>
)

}
