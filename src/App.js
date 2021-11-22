import './styles/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/Home/HomeScreen'
import WeatherWidgetScreen from './screens/Weather/WeatherWidgetScreen'
import WeatherWidgetScreenSearch from './screens/Weather/WeatherWidgetScreenSearch'
import CovidScreen from './screens/Covid/CovidScreen'
import CovidCases from './screens/Covid/CovidCases'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'


function App() {
  return (
    <main className="app">
     

      <Router>
      <Header />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/covid" component={CovidScreen} />
        <Route path="/covid-cases" component={CovidCases} />
        <Route path="/weather" component={WeatherWidgetScreen} />
        <Route path="/weather-search" component={WeatherWidgetScreenSearch} />
      </Router>  

      <Footer />
    </main>
    
  );
}

export default App;
