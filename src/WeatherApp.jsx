import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';




export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Nagpur",
        feelsLike: 26.18,
        temp: 25.01,
        tempMin: 25.01,
        tempMax: 25.01,
        humidity: 100,
        weather: "overcast clouds" 
    })


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2 style={{color: "black"}}>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}