import axios from "axios";

export const getWeatherByCity = (city) => {
	return axios
		.get(
			`http://api.weatherapi.com/v1/current.json?key= 897e2a4943dc45d499a182831231407&q=${city}&aqi=no`
		)
		.then(({ data }) => {
			return data.current;
		});
};

export const formatName = (city) => {
	console.log(city);
	const newCity = city.split(" ");
	return newCity
		.map((word) => {
			console.log(word);
			return word[0].toUpperCase() + word.slice(1);
		})
		.join(" ");
};
