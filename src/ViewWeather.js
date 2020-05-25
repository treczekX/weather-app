import React from 'react';
import './App.css';

const ViewWeather = (props) => {
    const {
        city,
        country,
        date,
        temp,
        minTemp,
        maxTemp,
        pressure,
        humidity,
        wind,
        weather,
        coord_lat,
        coord_lon,
        error,
        value
    } = props.weather

const info = (
    <div>
    <p class="info">Nie posiadamy w bazie danych miasta: <div class="city">{city.toUpperCase()}</div></p>
    </div>
)

const info2 = (
    <div>
    <p class="info">Proszę podać nazwę miasta!!!</p>
    </div>
)

    let output = null;

   

    if (!error && city) {
        output = (
            <div class="output">
            <div className="main-info">
                <h1>{city.toUpperCase()}</h1>
                <h1>{country.toUpperCase()}</h1>
                </div>
                <div className="manor-info">
                <span>{date}</span>
                <span>Temperatura: <span class='temp'>{temp}&deg;C</span></span>
                {/* {weather} */}
                </div>
                <div className="minor-info"> 
                <span>Minimalna temperatura:{minTemp}&deg;C</span>
                <span>Maksymalna temperatura:{maxTemp}&deg;C</span>
                <span>Ciśnienie atmosferyczne: {pressure}HPa</span>
                <span>Wilgotność powietrza: {humidity}%</span>
                <span>Siła wiatru: {wind}m/s</span>
                <span>Koordynaty: {coord_lat}N, {coord_lon}E</span>
                </div>
                </div>
        )
    }
    return (

     <div>{error ? info: output}</div>
    );
}
export default ViewWeather;