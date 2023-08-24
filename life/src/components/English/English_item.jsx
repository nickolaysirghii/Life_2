import React from 'react';
import "./english.css";

const English_item = ({title}) => {
    const writenStiles = {
        color: title.eng === title.writen ? "green" : "red"
    }
    const engStyles = {
        color: title.writen === "" ? "antiquewhite" : "green"
    }
  return (
    <div className='engItem'>
      <div className='rusTitle'>
      <p style={{color:title.eng === "Finallll" ? "red" : "black"}}>{title.rus}</p>
      </div>
        
        <div className='checkData'>
           <p style={engStyles}>{title.eng}</p>
           <p style={writenStiles}>
            {title.writen}
            </p>
        </div>
    </div>
  )
}

export default English_item