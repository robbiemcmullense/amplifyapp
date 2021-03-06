import React, { useState, useEffect } from 'react';

const api = {
    key: '7346fdbe1a5a32a9e0f652141756bac7',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

    const [query, setQuery] = useState('London'); // provide a default value
    const [weather, setWeather] = useState({});

    const fetchResult = () => {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
    }

    useEffect(() => {
      // search once after first render
      fetchResult();
    }, []) // no dependency: execute it once after first render
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            fetchResult();
            console.log(result);
          });
      }
    }
    
  
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
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main className="weather-widget">
          <div className="search-box">
            <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather-box">
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
              <div className="temp">
                {Math.round(weather.main.temp)}??c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className='weather-icon'>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather img" />
              </div>
            </div>
          </div>
          ) : ('')}
        </main>
      </div>
    );
  }
  
  export default App;