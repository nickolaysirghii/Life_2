import React from 'react';
import "./window_item.css";

const Window_item = ({one , two ,  conHeight}) => {

const leftSlope = 100 - one;
const rightSlope = 100 - two;

    const window_style = {
        clipPath: `polygon(0 ${leftSlope}%, 100% ${rightSlope}%, 100% 100%, 0% 100%)`,
        height: conHeight,
        width: "50px"
    };


  return (
    
        
    <div className='window_itemContainer' style={window_style}>
        <div className='circle'></div>
            <div className='window_inner' style={window_style}>
            </div>
        </div>
   
  )
}

export default Window_item