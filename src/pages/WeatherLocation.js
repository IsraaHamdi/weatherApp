
import WeatherCard from "../components/WeatherCard";
import Search from "../components/Search";
import { Component } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";

class WeatherLocation extends Component {
 
  handleSearch(e) {
    e.preventDefault();
    let value =document.querySelector("form [name=city]").value
   
      if (value === "") { alert('the city not allow to be empty')}
      else {
        this.props.setCity(value)
      }
  }
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-12">
            <Search handleSearch={this.handleSearch.bind(this)}/>
          </div>
          <div className="col-lg-6 mb-2">
            <WeatherCard />
          </div>
          <div className="col-lg-6 mb-2">
            <WeatherCard city={this.props.city} />
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    city: state.city,
  };
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setCity: (city) => {
        return { type: "CHANGE_CITY_NAME", payload: city };
      },
    },
    dispatch
  );
};

export default connect(stateToProps,dispatchToProps)(WeatherLocation);
