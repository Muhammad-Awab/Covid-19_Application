import React, { useEffect, useState } from 'react'

const Covid19ApiProject = () => {
  const[data,setData]=useState([])  
   const getCovidData=async()=>{
const res=await fetch('https://data.covid19india.org/data.json');
const actualData=await res.json();
console.log(actualData.statewise);
setData(actualData.statewise)
   } 
useEffect(()=>{
getCovidData();
},[])
  return (
    <div>
      <h1 className='text-center mb-5'>Pakistan Covid 19 Cases</h1>
  
<div className='container-fluid mt-5'>
<table className="table table-dark table-hover">
  <thead>
    <tr>
      
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">recovered</th>
      <th scope="col">deaths</th>
      <th scope="col">active</th>
      <th scope="col">statecode</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((curElem,index)=>{
            const{state,confirmed,recovered,deaths,active,statecode}=curElem; 
            return(
<tr>
      
      <td>{state}</td>
      <td>{confirmed}</td>
      <td>{recovered}</td>
      <td>{deaths}</td>
      <td>{active}</td>
      <td>{statecode}</td>
    </tr>
)
        })
    }
    

  </tbody>
</table>
</div>
    </div>
  )
}

export default Covid19ApiProject
