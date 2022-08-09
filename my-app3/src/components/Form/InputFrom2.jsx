import React, { useState } from 'react'
const InputFrom2 = () => {

        const[name,setName]=useState('');
        const[fullname,setFullName]=useState('');
        const[LastName,setLastName]=useState('')
        const[showLastName,setshowLastName]=useState('')
        const inputEvent=(event)=>{
          setName(event.target.value)
        }
       const inputEventtwo=(event)=>{
        setLastName(event.target.value)
       }
        const onSubmit=(event)=>{
            event.preventDefault();
          setFullName(name);
          setshowLastName(LastName);
        }
      
  return (
    <div>
      <form action="">
      <div className='container'>
      <h1>Hello {fullname} {showLastName}</h1>
      <input type="text" value={name}  onChange={inputEvent} placeholder='First name'/>
      <input type="text" value={LastName}  onChange={inputEventtwo} placeholder='Last name'/>
      <button type='submit' className="btn btn-success" onClick={onSubmit}>Click Me 👍</button>
      </div>
      </form>
    </div>
  )
}

export default InputFrom2;
