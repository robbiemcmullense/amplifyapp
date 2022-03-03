import './styles/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/Home/HomeScreen'
import WeatherWidgetScreen from './screens/Weather/WeatherWidgetScreen'
import WeatherWidgetScreenSearch from './screens/Weather/WeatherWidgetScreenSearch'
import Lines from './screens/TFL/Lines';

// import Footer from './components/Footer/Footer'
// import Header from './components/Header/Header'


function App() {
  return (
    <main className="app">
     

      <Router>
      {/* <Header /> */}
        <Route path="/" component={HomeScreen} exact />
        <Route path="/lines" component={Lines} />
        <Route path="/weather" component={WeatherWidgetScreen} />
        <Route path="/weather-search" component={WeatherWidgetScreenSearch} />
      </Router>  

      {/* <Footer /> */}
    </main>
    
  );
}

export default App;
