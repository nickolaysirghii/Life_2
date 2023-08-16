import { createSlice  } from "@reduxjs/toolkit";
import { initialData } from "../../data/initialData";


const initialState = {
   incomeTotal: 0,
   incomeTotalMonth: 0,
   incomeTotalWeek:0,
   incomeTotalToday:0,

   incomeAVG: 0,
   incomeAVG_Month:0,
   incomeAVG_Week:0,
   incomeAVG_Today:0,
   
   outcomeTotal:0,
   outcomeTotalMonth:0,
   outcomeTotalWeek:0,
   outcomeTotalToday:0,

   outcomeAVG:0,
   outcomeAVG_Month:0,
   outcomeAVG_Week:0,
   outcomeAVG_Today:0,

   incomeClear:0,
   incomeClearMonth:0,
   incomeClearWeek:0,
   incomeClearToday:0,

   incomeClearAVG:0,
   incomeClearAVG_Month:0,
   incomeClearAVG_Week:0,
   incomeClearAVG_Today:0,


};
const functionInitial = (elem, usd , eur , mdl )=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]/mdl);
        };
        initialState.incomeTotal = initialState.incomeTotal + incomeTotal77;
    });
};
const functionWeek = (elem, usd , eur , mdl )=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]/mdl);
        };
        initialState.incomeTotalWeek = initialState.incomeTotalWeek + incomeTotal77;
    });
};
const functionDay = (elem, usd , eur , mdl )=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]/mdl);
        };
        initialState.incomeTotalToday = initialState.incomeTotalToday + incomeTotal77;
    });
};
const functionMonth = (elem, usd , eur , mdl )=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]/mdl);
        };
        initialState.incomeTotalMonth = initialState.incomeTotalMonth + incomeTotal77;
    });
};



initialData.forEach((elem)=>{

functionInitial(elem,4.1,4.48,4.3);
if(elem.weekDay[0] === 3){functionWeek(elem,4.1,4.48,4.3);};

if(elem === initialData[initialData.length-1]){functionDay(elem,4.1,4.48,4.3);};

if(elem.month_id === 8){functionMonth(elem,4.1,4.48,4.3);};

});
initialState.incomeAVG = initialState.incomeTotal/initialData.length;

export const TheFirstSlice = createSlice({
    name: "TheFirstSlice",
    initialState,
    reducers: {
        changeIt: (state , action)=>{
         state.TheName = action.payload
        }
    }
    },

);
export const { changeIt } = TheFirstSlice.actions
export default TheFirstSlice.reducer;