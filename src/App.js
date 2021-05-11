import './styles/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import HomeScreen from './screens/HomeScreen'
import WeatherWidgetScreen from './screens/WeatherWidgetScreen'
import WeatherWidgetScreenSearch from './screens/WeatherWidgetScreenSearch'


function App() {
  return (
    <main className="app">
      <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/weather" component={WeatherWidgetScreen} />
        <Route path="/weather-search" component={WeatherWidgetScreenSearch} />
      </Router>  
    </main>
  );
}

export default App;
