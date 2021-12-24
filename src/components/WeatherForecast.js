import { useEffect, useState } from "react";
import WeatherService from '../services/weather';
import {useSelector} from 'react-redux';
import './weather.css' ;

const WeatherForecast = (props) => {
    const city = useSelector((state) => state.city);;
    const [forecast, setForecast] = useState([]);
    const[name,setName]=useState(city)

    useEffect(() => {
        function fetchForecast() {
            let weather = new WeatherService();

            weather.fetch5DayForecastByName(city).then(json => {
                if (json.cod !== "200") {
                   alert('The city name is incorrect')
                }
                if (json.cod === "200") {
                    let list = [];
                    let last_date = null;
                    for (let i = 0; i < json.list.length; i++) {
                        let item = json.list[i];
                        let date = (new Date(1000 * item.dt)).toLocaleDateString();
                        if (last_date !== date) {
                            list.push(item);
                            last_date = date;
                        }
                    }
                    setForecast(list);
                    setName(json.city.name)  
                }
            });
        }

        fetchForecast();

    }, [city]);

    return (
        <div className="text-center mt-4 mb-4 ">
            <h3 className="text-center mt-4" style={{color:"#43439f"}}>{name} - 5 -day Forecast</h3>
            <div className="all-container">
            {forecast.map((item) => {
                return (
                    <div className="all" key={item.dt}>
                    <div className="date">  {(new Date(1000 * item.dt)).toDateString()}</div>
                    <img alt="" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} />
                        <span>{item.main.temp_max} / {item.main.temp_min}&deg; C</span>
                        {item.weather[0].description}
                    </div>
                   
                );
            })}
            </div>
            
        </div>
    );
}

export default WeatherForecast;