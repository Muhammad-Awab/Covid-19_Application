import React, { useState } from 'react'

const DateCurrent = () => {
    let newTime=new Date().toLocaleTimeString();
    const[cTime,setcTime]=useState(newTime);

    const UpdateTime=()=>{
        newTime=new Date().toLocaleTimeString();
        setcTime(newTime);
    }
  return (
    <div>
     <h1>{cTime}</h1> 
     <button className='btn btn-success' onClick={UpdateTime}>Get Time</button>
    </div>
  )
}

export default DateCurrent
