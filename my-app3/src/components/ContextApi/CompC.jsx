import React from 'react'
import {FirstName,LastName} from './ContextApi'
const CompC = () => {
  return (
    <div>
        <FirstName.Consumer>{(fname)=>{
          return(
            <LastName.Consumer>
                {(lname)=>{
return(
    <h1>{fname}{lname}</h1>
)
                }}
            </LastName.Consumer>
            
          )
        }}</FirstName.Consumer>
      <h1>Hello C</h1>
    </div>
  )
}

export default CompC
