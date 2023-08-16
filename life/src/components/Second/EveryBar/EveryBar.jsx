import React from 'react';
import "./everyBar.css";

const EveryBar = ({up}) => {
  return (
    <div className='everyBar' style={{height:`${up}px`}}>
        <div className='mark'></div>
    </div>
  )
}

export default EveryBar