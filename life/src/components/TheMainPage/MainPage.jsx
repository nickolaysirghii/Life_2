import React from 'react';
import "./mainPage.css";
import { initialData } from '../../data/initialData';

const MainPage = () => {
  return (
    <div className='mainPageContainer'>
        {
          initialData.map((elem,idx)=>{
            return <p key={idx}>{elem.weekDay}</p>
          })
        }
    </div>
  )
}

export default MainPage