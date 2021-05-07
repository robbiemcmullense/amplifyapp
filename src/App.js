import './styles/styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import HomeScreen from './screens/HomeScreen'

import WeatherWidgetScreen from './screens/WeatherWidgetScreen'

function App() {
  return (
    <main className="app">
      <Router>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/weather" component={WeatherWidgetScreen} />
      </Router>  
    </main>
  );
}

export default App;
