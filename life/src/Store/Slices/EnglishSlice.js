import { createSlice } from "@reduxjs/toolkit";
import { sing } from "../../data/englishData";

const initialState = {
    singData: sing,
    objectWord: sing[0],
    count:0,
    color:"rgb(19, 187, 151)"

};

export const TheEnglishSlice = createSlice({
    name: "TheEnglishSlice",
    initialState,
    reducers: {
        shafle: ( state )=>{
            const  shuffleArray = (arr)=> {
                const shuffledArray = [...arr]; 
                for (let i = shuffledArray.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1)); 
            
                  [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
                }
                return shuffledArray;
              }
              state.singData = shuffleArray(state.singData)
              state.objectWord = state.singData[0]
          
        },
        writen: (state , action )=>{
            if(action.payload[1] < state.singData.length - 1){
          state.objectWord = state.singData[action.payload[1] + 1]
          state.singData[action.payload[1]].writen = action.payload[0]
        }else if( action.payload[1] < state.singData.length){
            state.singData[action.payload[1]].writen = action.payload[0] 
            state.color = "red"
        }
        },
        increaseCount: (state) =>{
            state.count +=1
        },
        changeThisArray: (state , action) =>{
            state.singData = action.payload
        },
        leave1: (state) =>{
         const newData = [];
         const amount = state.singData.filter((elem) => elem.eng !== elem.writen)
         const fin = `final${state.singData.length}:${amount.length}`
         const final = {
            id:1,
            eng: "Finallll",
            rus: fin,
            writen: ""
         }
         state.singData.forEach((elem)=>{
            if(elem.eng !== elem.writen){
                elem.writen = "";
                newData.push(elem)
            }

         });
         newData.push(final)
         state.singData = newData;
         state.objectWord = state.singData[0]
         state.count = 0;
         state.color = "rgb(19, 187, 151)"
        }
    }
});

export const {leave1 , changeThisArray, shafle , writen ,increaseCount } = TheEnglishSlice.actions;
export default TheEnglishSlice.reducer;