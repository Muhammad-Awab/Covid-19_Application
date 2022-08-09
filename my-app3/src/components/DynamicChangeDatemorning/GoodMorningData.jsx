import React from 'react'
let curDate=new Date(2022, 5, 5, 13)
curDate=curDate.getHours();
let greeting="";
const cssStyle={};
if(curDate >=1 && curDate <12){
    greeting="Good Morning"
    cssStyle.color='green';
}else if(curDate >=12 && curDate <19){
    greeting="Good Afternoon"
    cssStyle.color='Orange';
}
else{
    greeting="Good Night"
    cssStyle.color='Black';
}
const GoodMorningData = () => {
  return (
    <div className='container'>
        
<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>
  )
}

export default GoodMorningData
