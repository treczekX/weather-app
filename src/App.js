import React, { Component } from 'react';
import './App.css';
import SearchCity from "./SearchCity";
import ViewWeather from "./ViewWeather";
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
  this.state = {
    value: '',
    date: '',
    country: '',
    city: '',
    temp: '',
    minTemp: '',
    maxTemp: '',
    pressure: '',
    humidity: '',
    wind: '',
    coord_lat: '',
    coord_lon: '',
    error: false,
  }
}

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=05508bb378ad891b493b0c886cca7a57&units=metric&lang=pl`;
    axios.get(API)
      .then(resp => resp.data)
      .then(data => {
        const time = new Date().toLocaleString();
        const { value } = this.state;
        this.setState({
          error: false,
          date: time,
          city: value,
          country: data.sys.country,
          temp: data.main.temp,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          coord_lat: data.coord.lat,
          coord_lon: data.coord.lon,
          value:''

        })
      })
      .catch(error => {
        console.log(error);
        const { value } = this.state;
        this.setState({
          error: true,
          city: value,
        })
      })

  }

  render() {
    const {value}=this.state;
    return (
      <>
      <div className="main-container">
      <h1 class="header">Aplikacja pogodowa 2020</h1>
        <SearchCity value={value} change={this.handleChange} submit={this.handleSubmit} />
        <ViewWeather weather={this.state} />
      </div>
      </>
    );
  }
}
export default App;


