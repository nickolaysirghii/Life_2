import React from 'react';
import "./mainPage.css";
import Head from '../Header/Head';
import First from '../First/First';
import Second from '../Second/Second';
import Third from '../Third/Third';



const MainPage = () => {
  return (
    <div className='mainPageContainer'>
     <Head />
     <First />
     <Second />
     <Third />
       
    </div>
  )
}

export default MainPage