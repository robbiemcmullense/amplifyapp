import React, { useState, useEffect } from 'react';

const api = {
    key: '7346fdbe1a5a32a9e0f652141756bac7',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

    const london = 'London';

    const [query, setQuery] = useState(london); // provide a default value
    const [weather, setWeather] = useState({});

    const iconUrl = 'https://dar-group-150-holborn.s3.eu-west-2.amazonaws.com/images/';

    const fetchResult = () => {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery(london);
            console.log(result);
          });
    }

    useEffect(() => {
        fetchResult();
        //eslint-disable-next-line
    }, []) // no dependency: execute it once after first render
  
    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
  
    return (
      <div>
        <main className="weather-widget">
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather-box">
              
              <div className="weather-latest">
                <div className="temp">
                  <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                  </div>
                  <span className="temp-now">{Math.round(weather.main.temp)}°c</span>
                  <div className="weather">
                    <span className="feels-like">Feels like {Math.round(weather.main.feels_like)}°c</span>
                    {weather.weather[0].description}
                  </div>
                </div>
                <div className="weather-icon">
                  <img src={(`${iconUrl}${weather.weather[0].icon}.svg`)} alt='weather'/> 
                </div>
              </div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }
  
  export default App;