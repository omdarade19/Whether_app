import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo]= useState({
        city: "Delhi",
        feelsLike: 24,
        temp: 25.05,
        tempMin: 24,
        tempMax: 25.5,
        humidity: 78,
        weather: "fog",
    })

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}