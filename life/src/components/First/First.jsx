import React from 'react';
import "./first.css";
import { useSelector , useDispatch } from 'react-redux';
import { changeIt } from "../../Store/Slices/TheFirstSlice";
import { initialData } from '../../data/initialData';
import { changeUSD , changeEUR , changeMDL } from "../../Store/Slices/TheFirstSlice"

const First = () => {
    const dispatcher = useDispatch();
    const incomeTotalData = useSelector((state)=>state.first_sl.incomeTotal);
    const incomeMonthData = useSelector((state)=>state.first_sl.incomeTotalMonth);
    const incomeWeekData = useSelector((state)=>state.first_sl.incomeTotalWeek);
    const incomeDayData = useSelector((state)=>state.first_sl.incomeTotalToday);
    const incomeAVG_data = useSelector((state)=>state.first_sl.incomeAVG);
    const monthAVG_data = useSelector((state)=>state.first_sl.incomeAVG_Month);
    const weekAVG_data = useSelector((state)=>state.first_sl.incomeAVG_Week);
    const outcomeTotalData = useSelector((state)=>state.first_sl.outcomeTotal);
    const outcomeMonthData = useSelector((state)=>state.first_sl.outcomeTotalMonth);
    const outcomeWeekData = useSelector((state)=>state.first_sl.outcomeTotalWeek);
    const outcomeDayData = useSelector((state)=>state.first_sl.outcomeTotalToday);
    const incomeClearData = useSelector((state)=>state.first_sl.incomeClear);

    const vautaItitle = useSelector((state)=>state.first_sl.val_title);
   
    

    
//    console.log()
   
  return (
    <div className='firstContainer'>
        <div className='firstHead'>
            <div onClick={()=>{dispatcher(changeUSD())}}>USD</div>
            <div>EUR</div>
            <div>PLN</div>
            <div>MDL</div>
        </div>
    <div className='continerRow'>
        <p>Income</p>
        <div className='leftCont'>
        <p>This Year</p>
        <p className='firstAmount'>{incomeTotalData.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>{incomeMonthData.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>{incomeWeekData.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>{incomeDayData.toFixed(2)}<span>{vautaItitle}</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>Inc avg.</p>
        <div className='leftCont'>
        <p>This Year</p>
        <p className='firstAmount'>{incomeAVG_data.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>{monthAVG_data.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>{weekAVG_data.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>{incomeDayData.toFixed(2)}<span>{vautaItitle}</span></p>
        </div>

    </div>
    <div className='continerRow'></div>
    <div className='continerRow'>
        <p>Outcome</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>{outcomeTotalData.toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>Out avg.</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        </div>

    </div>
    <div className='continerRow'></div>
    <div className='continerRow'>
        <p>Inc clear</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>{(incomeTotalData - outcomeTotalData).toFixed(2)}<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>clear avg.</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>{vautaItitle}</span></p>
        </div>

    </div>
    </div>
  )
}

export default First