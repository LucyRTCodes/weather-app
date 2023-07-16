import { useContext, useEffect, useState } from "react";
import { CityContext } from "../contexts/City";
import { colour, formatName, getWeatherByCity } from "../App";
import { useParams } from "react-router-dom";
import "../styles/CityWeather.css";
import { TempUnitsContext } from "../contexts/TempUnits";

function CityWeather() {
	const { city, setCity } = useContext(CityContext);
	const { tempUnits } = useContext(TempUnitsContext);
	const [temperature, setTemperature] = useState(null);
	const [condition, setCondition] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { cityName } = useParams();

	if (city !== cityName) {
		setCity(formatName(cityName));
	}

	useEffect(() => {
		getWeatherByCity(city)
			.then(({ temp_c, temp_f, condition }) => {
				setTemperature(tempUnits === "C" ? temp_c : temp_f);
				setCondition(condition.text);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [city, tempUnits]);

	useEffect(() => {
		document.body.style.backgroundColor = colour(temperature, tempUnits).bg;
		document.body.style.color = colour(temperature, tempUnits).font;
	}, [temperature]);

	if (isLoading) return <p>loading</p>;
	return (
		<div>
			<h1 style={{ color: colour(temperature, tempUnits).font }}>
				{formatName(city)}
			</h1>
			<p>
				{temperature}°{tempUnits}
			</p>
			<p>{condition}</p>
		</div>
	);
}

export default CityWeather;
