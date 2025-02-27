import {createSlice} from "@reduxjs/toolkit";

const weatherSlice = createSlice ({
    name: 'city',
    initialState: 'Please enter City',
    reducers:{
        getWeather: (state, action) => action.payload
    }
})

export const { getWeather } = weatherSlice.actions;
export default weatherSlice.reducer;