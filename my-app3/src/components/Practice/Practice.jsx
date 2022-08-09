import React, { useEffect, useState } from 'react'

const Practice = () => {
    const[state,setstate]=useState();
    const[state2,setstate2]=useState();
 
const[total,settotal]=useState('')
const Addtwonumbers=()=>{
settotal(state+state2)
}
  return (
    <div>
      <input type="number" value={state} onChange={(event)=>setstate(+event.target.value)}/>
      <input type="number" value={state2} onChange={(event)=>setstate2(+event.target.value)}/>
      <button onClick={Addtwonumbers}>Add</button>
      <h1>{total}</h1>
    </div>
  )
}

export default Practice
