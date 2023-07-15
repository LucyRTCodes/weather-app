import { useContext, useEffect, useState } from "react";
import { CityContext } from "../contexts/City";
import { formatName, getWeatherByCity } from "../App";
import { useParams } from "react-router-dom";

function CityWeather() {
	const { city, setCity } = useContext(CityContext);
	const [temperature, setTemperature] = useState("");

	const { cityName } = useParams();

	if (city !== cityName) {
		setCity(formatName(cityName));
	}

	useEffect(() => {
		getWeatherByCity(city).then((weather) => {
			setTemperature(weather.temp_c);
		});
	}, [city]);
	return (
		<>
			<h1>{city}</h1>
			<p>{temperature}°C</p>
		</>
	);
}

export default CityWeather;
