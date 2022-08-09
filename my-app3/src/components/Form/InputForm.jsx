import React, { useState } from 'react'

const InputForm = () => {
  const[name,setName]=useState('');
  const[fullname,setFullName]=useState('');
  const inputEvent=(event)=>{
    setName(event.target.value)
  }
  const onSubmit=()=>{
    setFullName(name);
  }
  
  return (
      <div className='container'>
      <h1>Hello {fullname}</h1>
      <input type="text" value={name}  onChange={inputEvent} placeholder='Enter your name'/>
      <button className="btn btn-success" onClick={onSubmit}>Click Me 👍</button>
      </div>
  )
}

export default InputForm
