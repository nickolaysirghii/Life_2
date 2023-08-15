import React from 'react';
import "./mainPage.css";
import { initialData } from '../../data/initialData';
import Head from '../Header/Head';
import First from '../First/First';
import Second from '../Second/Second';



const MainPage = () => {
  return (
    <div className='mainPageContainer'>
     <Head />
     <First />
     <Second />
        {
          initialData.map((elem,idx)=>{
            return <p key={idx}>{elem.weekDay}</p>
          })
        }
    </div>
  )
}

export default MainPage