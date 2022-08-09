import React from 'react'
import { useContext } from 'react'
import {FirstName,LastName}  from './ContextApi'

const CompB = () => {
    const fname=useContext(FirstName)
     const lname=useContext(LastName)
  return (
    <div>
          <h1>Hello B</h1>
        <h1>{fname}{lname}</h1>
    </div>
  )
}

export default CompB;
