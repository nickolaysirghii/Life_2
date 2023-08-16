import React from 'react';
import "./first.css";
import { useSelector , useDispatch } from 'react-redux';
import { changeIt } from "../../Store/Slices/TheFirstSlice"

const First = () => {
    const dispatcher = useDispatch();
    const incomeTotalData = useSelector((state)=>state.first_sl.incomeTotal);
    const incomeMonthData = useSelector((state)=>state.first_sl.incomeTotalMonth);
    const incomeWeekData = useSelector((state)=>state.first_sl.incomeTotalWeek);
    const incomeDayData = useSelector((state)=>state.first_sl.incomeTotalToday);
    const incomeAVG_data = useSelector((state)=>state.first_sl.incomeAVG);
   
   const usd = ()=>{
    dispatcher(changeIt(4))
   }

    
  return (
    <div className='firstContainer'>
        <div className='firstHead'>
            <div onClick={usd}>USD</div>
            <div>EUR</div>
            <div>PLN</div>
            <div>MDL</div>
        </div>
    <div className='continerRow'>
        <p>Income</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>{incomeTotalData.toFixed(2)}<span>pln</span></p>
        <p>This Month</p>
        <p className='firstAmount'>{incomeMonthData.toFixed(2)}<span>pln</span></p>
        <p>This Week</p>
        <p className='firstAmount'>{incomeWeekData.toFixed(2)}<span>pln</span></p>
        <p>Today</p>
        <p className='firstAmount'>{incomeDayData.toFixed(2)}<span>pln</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>Inc avg.</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>{incomeAVG_data.toFixed(2)}<span>pln</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>%</span></p>
        </div>

    </div>
    <div className='continerRow'></div>
    <div className='continerRow'>
        <p>Outcome</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>%</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>Out avg.</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>%</span></p>
        </div>

    </div>
    <div className='continerRow'></div>
    <div className='continerRow'>
        <p>Inc clear</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>%</span></p>
        </div>

    </div>
    <div className='continerRow'>
        <p>clear avg.</p>
        <div className='leftCont'>
        <p>Total</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Month</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>This Week</p>
        <p className='firstAmount'>50<span>%</span></p>
        <p>Today</p>
        <p className='firstAmount'>50<span>%</span></p>
        </div>

    </div>
    </div>
  )
}

export default First