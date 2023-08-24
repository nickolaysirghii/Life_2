import { configureStore } from "@reduxjs/toolkit";
import TheMainSlice from "./Slices/TheMainSlice";
import  TheEnglishSlice  from "./Slices/EnglishSlice";

export const store = configureStore({
    reducer: {
      mainState: TheMainSlice,
      english:TheEnglishSlice
    
      }
});