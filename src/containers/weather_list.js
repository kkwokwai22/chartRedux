import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import Chart from '../components/chart';

class WeatherList extends Component {
	constructor(props) {
		super(props);

		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => {
			return weather.main.temp;
		});
		const pressure = cityData.list.map(weather => {
			return weather.main.pressure;
		});
		const humidity = cityData.list.map(weather => {
			return weather.main.humidity;
		});
		return (
			<tr key={cityData.city.id}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color="orange" units="K" />
				</td>
				<td>
					<Chart data={pressure} color="red" units="hPa" />
				</td>
				<td>
					<Chart data={humidity} color="black" units="%" />
				</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</table>
		);
	}
}

function mapPropsToState(state) {
	return {
		weather: state.weather
	};
}

export default connect(mapPropsToState, null)(WeatherList);
