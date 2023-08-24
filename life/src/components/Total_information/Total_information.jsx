import React from 'react';
import "./total_info.css";
import { useSelector , useDispatch } from 'react-redux';
import { currentCurrency } from '../../Store/Slices/TheMainSlice';
import Window from '../Window/Window';
import AvgWindow from '../AVGWindow/AvgWindow';

const Total_information = () => {
  const timePeriod = useSelector((state)=>state.mainState)
  const dispatcher = useDispatch();
  const submitCurency = (e)=>{
    e.preventDefault()
    const { usd,eur,mdl } = e.target;
    const data = {
      usd: usd.value,
      eur: eur.value,
      mdl: mdl.value,
    };
    dispatcher(currentCurrency(data))
    e.target.reset();
    };
  console.log(timePeriod)
  return (
    <div className='totalInfo'>
      {/* <iframe className='eurPlnUsd' src="https://www.walutomat.pl/kursy-walut/" title="text"></iframe>
      <iframe className='plnMdl' src="https://www.wnp.pl/finanse/kursy_walut/MDL.html" title="text"></iframe> */}
      <form onSubmit={submitCurency}>
        <p>USD</p>
        <input type='text' name='usd'/>
        <p>EUR</p>
        <input type="text" name='eur' />
        <p>MDL</p>
        <input type="text" name='mdl' />
        <button>Change</button>
      </form>
      <AvgWindow />
        
    </div>
  )
}

export default Total_information