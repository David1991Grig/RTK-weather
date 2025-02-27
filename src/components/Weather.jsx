import { useSelector } from 'react-redux';

const Weather = () => {
    const data = useSelector((state) => state.weather);


    return (
            <div className="infoWeath">
                {data.name && data.sys && data.main ? (
                    <>
                        <p>{`Location: ${data.name}, ${data.sys.country}`}</p>
                        <p>{`Temp: ${data.main.temp} °C`}</p>
                        <p>{`Pressure: ${data.main.pressure} hPa`}</p>
                        <p>{`Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`}</p>
                    </>
                ) : (
                    <p>Enter city</p>
                )}
        </div>
    );
};

export default Weather;