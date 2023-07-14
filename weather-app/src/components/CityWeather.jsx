import { useContext, useEffect, useState } from "react";
import { formatName, getWeatherByCity } from "../App";
import { useParams } from "react-router-dom";

function CityWeather() {
	const { city } = useParams();
	const [temperature, setTemperature] = useState("");

	const update = () => {
		getWeatherByCity(city).then((weather) => {
			setTemperature(weather.temp_c);
		});
	};

	update();
	setInterval(update, 60_000);

	return (
		<>
			<h1>{formatName(city)}</h1>
			<p>{temperature}°C</p>
		</>
	);
}

export default CityWeather;
