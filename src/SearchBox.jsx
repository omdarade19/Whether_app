import "./searchBox.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({updateInfo}){
    let [city, setCity]= useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e3f4e68f39b1b5e79eb2db747a9583ac";

    let getWeatherInfo = async()=>{
        try{
       let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonReasponce = await response.json();
       console.log(jsonReasponce);
       let result = {
        city : city,
        temp : jsonReasponce.main.temp,
        tempMin : jsonReasponce.main.temp_min,
        tempMax : jsonReasponce.main.temp_max,
        humidity : jsonReasponce.main.humidity,
        feelsLike : jsonReasponce.main.feels_like,
        weather : jsonReasponce.weather[0].description,
       }

       console.log(result);
       return result;
    }catch(err){
        throw err;
    }
    }

   let handelChange = (evt)=>{
  setCity(evt.target.value);
   }

   let handelSubmit = async(evt)=>{
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
        setError(true);
    }
   }
    return(
        <div className="SearchBox">
        
           <form onSubmit={handelSubmit}>
           <TextField id="city" label="Type City" variant="outlined" required onChange={handelChange} value={city}/>
           <br />
           <br />
           <Button type="submit" variant="contained">Search</Button>
           {error && <p style={{color:"red"}}>No Place Found</p>}
           </form>
        </div>
    )
}