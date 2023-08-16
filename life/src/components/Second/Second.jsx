import React from 'react';
import "./second.css";
import { initialData } from '../../data/initialData';
import EveryBar from './EveryBar/EveryBar';

const Second = () => {
  const title = "invest State";
  return (
    <div className='secondContainer'>
      <div className='leftMarkup'>
        <div>450.00</div>
        <div>360.00</div>
        <div>270.00</div>
        <div>180.00</div>
        <div>90.00</div>
      </div>
      <div className='bottomMarkup'>
        <h2>{title}</h2>
      </div>
      <div className='infoWindow'>
       <div className='insideWindow'>
        {
         initialData.map((elem,idx)=>{
          return <EveryBar  key={idx} up={elem.investState[1]}/>
         })
        }
       </div>

  
      </div>
    </div>
  )
}

export default Second