import React, { useState } from 'react'

const DigitalClock = () => {
let time=new Date().toLocaleTimeString();
const[ctime,setctime]=useState(time);
const updateTime=()=>{
    time=new Date().toLocaleTimeString();
    setctime(time)
}
setInterval(updateTime,1000)
  return (
    <div className='container'>
    <h1>{ctime}</h1>  
    <button className='btn btn-success' onClick={updateTime}>GetTime</button>
    </div>
  )
}

export default DigitalClock
