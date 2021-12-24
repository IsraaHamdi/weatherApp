import {Component} from 'react';
import WeatherService from '../services/weather';
class  WeatherCard extends Component {
    #currentCity;

    constructor(props) {
        super(props);
        this.props=props;
        this.#currentCity =props.city;
        this.state= {
            currentTime :new Date(),
            currentWeather:null,
        }
    }
    componentDidMount(){
    this.fetchWeather();
    }
    componentDidUpdate(){
        if(this.#currentCity != this.props.city) {
            this.#currentCity = this.props.city;
            this.fetchWeather();
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    fetchWeather(){
        let weather = new WeatherService();
        if(this.props.city) {
            weather.fetchCurrentWeatherByName(this.props.city)
            .then(response => response.json())
            .then(json => {
                if (json.cod == 200) {
                    if(json.main){
                        this.setState({
                            currentWeather:json
                        })
                    }
                }
                else {
                    alert('The city name is incorrect')
                }
              
            })
                return;
        }
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                weather.fetchCurrentWeatherByCoords(pos.coords.latitude, pos.coords.longitude)
                .then(response => response.json())
                .then(json => {
                   
                    if(json.main){
                        this.setState({
                            currentWeather:json
                        })
                    }
                
                })
            });
        }
    }
    render(){
        const weather = this.state.currentWeather;
        if (!weather) {
            return <div className="card"></div>;
        }
        return(<div className="card">
 <div className="card border">
            <time>{this.state.currentTime.toLocaleTimeString()}</time>
            <time>{this.state.currentTime.toLocaleDateString()}</time>
            <h3>{weather.name}</h3>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon"/>
                <span>{weather.main.temp}&deg; C</span>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Wind: {weather.wind.speed}-{weather.wind.deg}</li>
                        <li>Humidity: {weather.main.humidity}</li>
                    </ul>
                </div>
                <div className="col-6">
                <ul>
                        <li>Pressure:{weather.main.pressure} </li>
                        <li>Visibility: {weather.visibility/1000} Km</li>
                    </ul>
                </div>

            </div>
        </div>
        </div>)
        
    }

}

export default WeatherCard;

