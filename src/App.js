import './styles/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import HomeScreen from './screens/HomeScreen'

import WeatherWidgetScreen from './screens/WeatherWidgetScreen'

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/weather" component={WeatherWidgetScreen} />
    </Router>  
    </div>
  );
}

export default App;
