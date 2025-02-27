
import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "../features/slices/weatherSlice";



export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    }
});