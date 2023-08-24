import React from 'react';
import "../Window/window.css";
import Window_item from '../Window/Window_item';
import { initialData } from '../../data/initialData';
import { useSelector  } from 'react-redux';

const AvgWindow = () => {
  const usd = useSelector((state)=>state.mainState.usd);
  const moneyHour = useSelector((state)=>state.mainState.moneyHour)
  const targetSum = 3300

    const containerHeight = `500px`;
    
    let prevNumber = 0;
    let totalNumber = 0;

   return (
    <div className='wraperWindow'>
         <div className='windowContainer' style={{height:containerHeight}}>
            {
            initialData.map(( elem , idx )=>{
              const investData = ((elem.investState[1] * usd)/(targetSum/100))

              let outcome = 0;
              elem.outcome.forEach((elem)=>{
                if(elem.out[1] === "pln"){
                  outcome = outcome + elem.out[0]
                }
              })


              const ttt = (elem.work.hours * moneyHour)
                totalNumber = totalNumber + (ttt/(targetSum/100)) ;
                const left = prevNumber ;
                const right = totalNumber + investData ;
                prevNumber = totalNumber + investData;
               
                return <Window_item key={idx}  one={left} two={right}
                 conHeight={containerHeight}  />
            })
            }
         </div>
         <div className=' inDivs' >100</div>
         <div className=' inDivs' >95</div>
         <div className=' inDivs' >90</div>
         <div className=' inDivs' >85</div>
         <div className=' inDivs' >80</div>
         <div className=' inDivs' >75</div>
         <div className=' inDivs' >70</div>
         <div className=' inDivs' >65</div>
         <div className=' inDivs' >60</div>
         <div className=' inDivs' >55</div>
         <div className=' inDivs' >50</div>
         <div className=' inDivs' >45</div>
         <div className=' inDivs' >40</div>
         <div className=' inDivs' >35</div>
         <div className=' inDivs' >30</div>
         <div className=' inDivs' >25</div>
         <div className=' inDivs' >20</div>
         <div className=' inDivs' >15</div>
         <div className=' inDivs' >10</div>
         <div className=' inDivs' >5</div>
       
    </div>
  )
}

export default AvgWindow