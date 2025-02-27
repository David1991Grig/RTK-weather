import { useDispatch } from 'react-redux';
import {getWeather} from "../features/slices/weatherSlice.js";
import {fetchAction} from "../features/action/fetchAction.js";



const Form = () => {
    const dispatch = useDispatch();

    const handleClickGetWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        if (city) {
            dispatch(fetchAction(city));

        } else {
            alert('Please enter a city name');
        }
    };

    return (
        <form onSubmit={handleClickGetWeather}>
            <input type='text' name='city' placeholder='Enter city name' />
            <button type='submit'>Get Weather</button>
        </form>
    );
};

export default Form;
