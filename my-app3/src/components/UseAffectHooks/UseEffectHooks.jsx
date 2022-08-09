import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {
    const[state,setState]=useState(0);
    const[nums,setNums]=useState(0);

    useEffect(()=>{
        
        document.title = `You dont clicked ${nums} times`;
        
    })
  return (
    <div>
        <h1>hello</h1>
        <button className='btn btn-success' onClick={()=>setState(state+1)}>Click Me {state}</button>
        <button className='btn btn-danger' onClick={()=>setNums(nums+1)}>Click Me {nums}</button>

    </div>
  )
}

export default UseEffectHooks
