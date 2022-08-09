import React from 'react'

const Sresult = ({value}) => {
    const img=`https://source.unsplash.com/800x700/?${value}`
  return (
    <div className='mx-auto'>
        
      <img className='' src={img} alt="img" />
    </div>
  )
}

export default Sresult
