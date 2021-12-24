
import { Component } from "react";
// import {Router,Route,Switch} from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import WeatherLocation from "./pages/WeatherLocation";
import DailyWeather from "./pages/DailyWeather";
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <h1 className="text-center mt-5 " style={{color: "blue"}}>Weather App</h1>
        <Router>
            <div className="text-center ">
            <Link to="/"  >
              <button className=" btn btn-outline-primary ms-2">Weather Location</button>
            </Link>
            <Link to="/DailyWeather" >
              <button className=" btn btn-outline-primary ms-2">Daily Weather</button>
            </Link>
          </div>
      <Routes>
        <Route path="/"  element={<WeatherLocation/>}>
        </Route>
        <Route path="/DailyWeather"  element={<DailyWeather/>}>
        </Route>
      </Routes>
    </Router>
      </div>
  
    );
  }
}

export default App;
