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
        error
    } = props.weather

const info = (
    <div className="row">
    <h2 className='col-12 p-3 text-warning bg-secondary text-center'>Nie posiadamy w bazie danych miasta <span className= 'text-danger px-2'>{city.toUpperCase()}</span></h2>
    </div>
)

    let output = null;

   

    if (!error && city) {
        output = (
            
            <div className="container text-center">
            <div className="cards py-5 p-5 card-color">
            <div className="row">
                <h1 className='col-6 text-center text-success'>{city.toUpperCase()}</h1>
                <h1 className='col-6'>{country.toUpperCase()}</h1>
                </div>
                <div className="row"> 
                <h2 className='py-4 col-6'>{date}</h2>
                <h2 className='py-4 col-6'>Temperatura: {temp}&deg;C</h2>
                </div>
                <div>{weather}</div>
                <div className="row mb-2">
                <div className="col-6">
                <h4>Minimalna temperatura: <span className="text-danger">{minTemp}&deg;C</span></h4>
                </div>
                <div className="col-6">
                <h4>Maksymalna temperatura: <span className="text-success">{maxTemp}&deg;C</span></h4>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col-6">
                <h4>Ciśnienie atmosferyczne: {pressure}HPa</h4>
                </div>
                <div className="col-6">
                <h4>Wilgotność powietrza: {humidity}%</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-6">
                <h4>Siła wiatru: {wind}m/s</h4>
                </div>
                <div className="col-6">
                <h4>Koordynaty: {coord_lat}N, {coord_lon}E</h4>
                </div>
                </div>
                </div>
                </div>
        )
    }
    return (
        <div>{error ? info: output}</div>
    );
}

export default ViewWeather;