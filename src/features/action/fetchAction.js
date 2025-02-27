import {api_key, base_url} from "../../utils/constants.js";
import {getWeather} from "../slices/weatherSlice.js";



export const fetchAction = (city) =>{
    return  async dispatch => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Enter correct city name');
            }
            const data = await response.json();
            dispatch(getWeather(data));
        } catch (err) {
            dispatch(getWeather(err.message));
        }
    }
}