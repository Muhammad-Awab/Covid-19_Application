import React, { useState } from 'react'



const UseStateHook = () => {
  const[count,setCount]=useState(0);
  const IncNum=()=>{
  setCount(count+1);
}
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={IncNum}>Click Me</button>
    </div>
  )
}

export default UseStateHook
