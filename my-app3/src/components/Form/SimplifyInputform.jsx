import React, { useState } from 'react'
const SimplifyInputform = () => {

  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    pnumber: ""
  });

  const inputEvent = (event) => {


    const { value, name } = event.target;

    setfullName((preValue) => {
      return{
       ...preValue,
       [name]:value 
      }
      
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submit')
  }

  return (
    <div>
      <form action="">
        <div className='container'>
          <h1>Hello {fullname.fname}{fullname.lname}</h1>
          <p>{fullname.email}</p>
          <p>{fullname.pnumber}</p>
          <input type="text" name='fname' value={setfullName.fname} onChange={inputEvent} placeholder='First name' />
          <input type="text" name='lname' value={setfullName.lname} onChange={inputEvent} placeholder='Last name' />
          <input type="email" name='email' value={setfullName.email} onChange={inputEvent} placeholder='Last name' />
          <input type="number" name='pnumber' value={setfullName.pnumber} onChange={inputEvent} placeholder='Last name' />
          <button type='submit' className="btn btn-success" onClick={onSubmit}>Click Me 👍</button>
        </div>
      </form>
    </div>
  )
}

export default SimplifyInputform;
