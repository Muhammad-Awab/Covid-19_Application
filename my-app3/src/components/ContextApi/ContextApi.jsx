import React, { createContext } from 'react'
import CompB from './CompB';
import ComponentA from './ComponentA'
const FirstName=createContext();
const LastName=createContext();
const ContextApi = () => {
  return (
    <div>
      <FirstName.Provider value={'awab'}>
        <LastName.Provider value={'ahmed'}>
        <ComponentA/>
        <CompB/>
        </LastName.Provider>
      
      </FirstName.Provider>
    </div>
  )
}

export default ContextApi
export {FirstName,LastName}
