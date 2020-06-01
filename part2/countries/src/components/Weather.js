import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({city, cc}) => {
    const [weatherData, setWeatherData] = useState([])
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        console.log(`Getting weather data for ${city}...`)
        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${api_key}&units=metric`)
          .then(response => {
            console.log("Weather data received.")
            setWeatherData(response.data)
          })
      }, [city, cc, api_key])
    
    if (weatherData.length === 0) {
        return <p>Loading weather data...</p>
    } else {
        return ( 
            <div>
                <h3>Weather in {city}</h3>
                <p>Temperature: {weatherData.main.temp} C</p>
                <p>Clouds: {weatherData.weather[0].main}, {weatherData.weather[0].description}</p>
                <p>Wind: {weatherData.wind.speed} KM/h</p>
            </div>
         )
    }
    
}
 
export default Weather;