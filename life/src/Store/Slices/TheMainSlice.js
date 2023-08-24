import { createSlice  } from "@reduxjs/toolkit";
import { initialData } from "../../data/initialData";


const initialState = {
    allTime: initialData,   
    from_to:[],
    month: initialData.filter((elem)=> elem.month_id === initialData[initialData.length-1].month_id),
    week: initialData.filter((elem)=> elem.weekDay[0] === initialData[initialData.length-1].weekDay[0]),
    day:initialData[initialData.length-1],

    curencyText: "PLN",
    usd:4.105,
    eur:4.4602,
    mdl:0.2313,
    pln:1,
    moneyHour: 20.81

};
export const TheMainSlice = createSlice({
    name: "TheMainSlice",
    initialState,
    reducers: {
        currentCurrency: (state , action)=>{
          state.usd = Number(action.payload.usd) ;
          state.eur = Number(action.payload.eur);
          state.mdl = Number(action.payload.mdl);
        },
    },
    },

);
export const {currentCurrency} = TheMainSlice.actions;
export default TheMainSlice.reducer;