import React from 'react';
import "./english.css";
import { useSelector , useDispatch } from 'react-redux';
import English_item from './English_item';
import {leave1 , changeThisArray, writen , increaseCount , shafle} from '../../Store/Slices/EnglishSlice';
import { sent } from '../../data/sentOfWoman';
import { sing } from '../../data/englishData';

const English = () => {
    const englishData = useSelector((state)=>state.english.singData);
    const englishObject = useSelector((state)=>state.english.objectWord);
    const englisCount = useSelector((state)=>state.english.count);
    const collorr = useSelector((state)=>state.english.color);
    console.log(englisCount)
    const dispatsch = useDispatch();
   
    const submitTheWord = (e)=>{
        if(e.key === "Enter"){
            const send = [e.target.value,englisCount];
            dispatsch(writen(send))
            dispatsch(increaseCount())
            e.target.value = ""
    
        }

    }
    const shafleItUp = ()=>{
        dispatsch(shafle())
    }
    const changeArraySent = () =>{
      dispatsch(changeThisArray(sent))
    }
    const changeArraySing = () =>{
      dispatsch(changeThisArray(sing))
    }
    const liveJustRed = () =>{
      dispatsch(leave1())
    }
    const wordStyle = {
        color:collorr
    }

  return (
    <div onKeyDown={submitTheWord} className='englishContainer'>
        <div className='buttonsContainer'>
          <div onClick={changeArraySent}>Sent</div>
          <div onClick={changeArraySing}>sing</div>
          <div>third</div>
        </div>
        <div onClick={liveJustRed} className='leave_just'>
          leave
        </div>
        <button onClick={shafleItUp}>shafle</button>
        <div className='wordCont'>
        <p style={wordStyle}>
            { collorr != "red" ? englishObject.rus : "Done"}
            </p>
        </div>
        
        
        <input  type='text' name='inputOne' />

        <div className='Show_info'>
            {
              englishData.map((elem, idx)=>{
                return <English_item key={idx} title={elem} />
              })
            }
        </div>
    
    </div>
  )
}

export default English