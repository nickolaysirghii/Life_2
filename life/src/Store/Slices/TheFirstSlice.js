import { createSlice  } from "@reduxjs/toolkit";
import { initialData } from "../../data/initialData";


const initialState = {
    val_title: "PLN",
   

   month: initialData[initialData.length-1].month_id,
   week: initialData[initialData.length-1].weekDay[0],
   day: initialData[initialData.length-1].id,

   usd:4.1,
   eur:4.48,
   mdl:0.23,

   incomeTotal: 0,
   incomeTotalMonth: 0,
   incomeTotalWeek:0,
   incomeTotalToday:0,

   incomeAVG: 0,
   incomeAVG_Month:0,
   incomeAVG_Week:0,
   
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
const functionInitial = (elem)=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.mdl);
        };
        initialState.incomeTotal = initialState.incomeTotal + incomeTotal77;
        
    });
    elem.outcome.forEach((elem888)=>{
        let outcomeTotal88 = 0;
        if(elem888.out[1] === "usd"){
            outcomeTotal88 = outcomeTotal88 + (elem888.out[0]*initialState.usd);
        }else if(elem888.out[1]=== "pln"){
            outcomeTotal88 = outcomeTotal88 + elem888.out[0];
        }else if(elem888.out[1] === "eur"){
            outcomeTotal88 = outcomeTotal88 + (elem888.out[0]*initialState.eur);
        }else if(elem888.out[1] === "mdl"){
            outcomeTotal88 = outcomeTotal88 + (elem888.out[0]*initialState.mdl);
        };
        initialState.outcomeTotal = initialState.outcomeTotal + outcomeTotal88;
    });
    
};
const functionWeek = (elem)=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.mdl);
        };
        initialState.incomeTotalWeek = initialState.incomeTotalWeek + incomeTotal77;

    });
};
const functionDay = (elem)=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.mdl);
        };
        initialState.incomeTotalToday = initialState.incomeTotalToday + incomeTotal77 + (elem.work.hours*20.81);
    });
};
const functionMonth = (elem)=>{
    elem.income.forEach((elem777)=>{
        let incomeTotal77 = 0;
        if(elem777.in[1] === "usd"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.usd);
        }else if(elem777.in[1]=== "pln"){
            incomeTotal77 = incomeTotal77 + elem777.in[0];
        }else if(elem777.in[1] === "eur"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.eur);
        }else if(elem777.in[1] === "mdl"){
            incomeTotal77 = incomeTotal77 + (elem777.in[0]*initialState.mdl);
        };
        initialState.incomeTotalMonth = initialState.incomeTotalMonth + incomeTotal77 ;
    });
};




initialData.forEach((elem)=>{

functionInitial(elem);
initialState.incomeTotal = initialState.incomeTotal + (elem.work.hours*20.81);


if(elem.weekDay[0] === initialState.week){functionWeek(elem);
     initialState.incomeTotalWeek = initialState.incomeTotalWeek + (elem.work.hours*20.81)};

if(elem.id === initialState.day){functionDay(elem);};

if(elem.month_id === initialState.month){functionMonth(elem);
    initialState.incomeTotalMonth = initialState.incomeTotalMonth + (elem.work.hours*20.81);
};



});
initialState.incomeAVG = initialState.incomeTotal/initialData.length;
initialState.incomeAVG_Month = initialState.incomeTotalMonth/initialData[initialData.length-1].date
initialState.incomeAVG_Week = initialState.incomeTotalWeek/initialData[initialData.length-1].weekDay[1]

export const TheFirstSlice = createSlice({
    name: "TheFirstSlice",
    initialState,
    reducers: {
        changeUSD: (state)=>{
         state.incomeTotal = state.incomeTotal/state.usd
         state.val_title = "USD"
        },
        changeEUR: (state)=>{
         state.incomeTotal = state.incomeTotal/state.eur
         state.val_title = "EUR"
        },
        changeMDL: (state)=>{
        state.incomeTotal = state.incomeTotal/state.mdl
        state.val_title = "MDL"
        }
    }
    },

);
export const { changeUSD , changeEUR , changeMDL } = TheFirstSlice.actions
export default TheFirstSlice.reducer;