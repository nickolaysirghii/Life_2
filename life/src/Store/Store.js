import { configureStore } from "@reduxjs/toolkit";
import TheFirstSlice from "./Slices/TheFirstSlice"

export const store = configureStore({
    reducer: {
      first_sl: TheFirstSlice
    
      }
});