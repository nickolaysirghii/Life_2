import React from 'react';
import "./head.css";
import {initialData} from "../../data/initialData";

const Head = () => {
  const  shuffleArray = (arr)=> {
    const shuffledArray = [...arr]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 

      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  const shuffledArray = shuffleArray(initialData);
  console.log(shuffledArray);




  return (
    <div className='headContainer'>Head</div>
  )
}

export default Head