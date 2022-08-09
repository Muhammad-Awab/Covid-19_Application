import React, { useState } from 'react'
import Sresult from './Sresult';
const Search = () => {
    const[img,setimg]=useState("");
    const inputEvent=(event)=>{
   const data=event.target.value;
   setimg(data)
    }
  return (
    <div className='container'>
      <input className='text-center mb-6' type="text" placeholder='search anything' value={img} onChange={inputEvent}/>
      {img===""? null : <Sresult value={img}/>
}    </div>
  )
}

export default Search
