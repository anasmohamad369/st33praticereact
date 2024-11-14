import React, { useState } from 'react'

export const Usestateone = () => {
    const[user,setUser] = useState('React');
    
    return (
    <div>
        {user}
    </div>
  )
}
