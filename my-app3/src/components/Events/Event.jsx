import React, { useState } from 'react'

const Event = () => {
    const blue="blueviolet"
  const[bg,setbg]=useState(blue);
  const[name,setName]=useState("click Me")
    const bgChange=()=>{
        const black="black";
        setbg(black);
        setName('Happy 😂');
    }
    const bgchanges=()=>{
        const pink="pink";
        setbg(pink);
        setName('Sad 😎😎😎');
    }
    const bgcnagess=()=>{
        const white="white";
        setbg(white);
        setName('back 😎😎');
    }
  return (
    <div  style={{backgroundColor:bg}}>
      <button className='btn btn-success' onClick={bgChange} onDoubleClick={bgchanges} onMouseOver={bgcnagess}>{name}</button>
    </div>
  )
}

export default Event
