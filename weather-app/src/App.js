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
			return word[0].toUpperCase() + word.slice(1);
		})
		.join(" ");
};

export const colour = (temp, units) => {
	if (units === "F") {
		temp = ((temp - 32) * 5) / 9;
	}
	if (temp > 40) {
		return { bg: "black", font: "white" };
	}
	if (temp > 38) {
		return { bg: "#7F0104", font: "white" };
	}
	if (temp > 36) {
		return { bg: "#970104", font: "white" };
	}
	if (temp > 34) {
		return { bg: "#D80100", font: "white" };
	}
	if (temp > 32) {
		return { bg: "#FE0000", font: "white" };
	}
	if (temp > 30) {
		return { bg: "#F46523", font: "white" };
	}
	if (temp > 28) {
		return { bg: "#FF9E07", font: "black" };
	}
	if (temp > 26) {
		return { bg: "#FFD728", font: "black" };
	}
	if (temp > 24) {
		return { bg: "#FFFF01", font: "black" };
	}
	if (temp > 22) {
		return { bg: "#D3FA0B", font: "black" };
	}
	if (temp > 20) {
		return { bg: "#80FF00", font: "black" };
	}
	if (temp > 18) {
		return { bg: "#3AB54A", font: "white" };
	}
	if (temp > 16) {
		return { bg: "#05F7F8", font: "black" };
	}
	if (temp > 14) {
		return { bg: "#00CCFE", font: "white" };
	}
	if (temp > 12) {
		return { bg: "#017EFF", font: "white" };
	}
	if (temp > 10) {
		return { bg: "0000FE", font: "white" };
	}
	if (temp > 8) {
		return { bg: "#1B1464", font: "white" };
	}
	if (temp > 6) {
		return { bg: "#662E93", font: "white" };
	}
	if (temp > 4) {
		return { bg: "#93268F", font: "white" };
	}
	if (temp > 2) {
		return { bg: "#FF00FE", font: "white" };
	}
	if (temp > 0) {
		return { bg: "FF7BAC", font: "black" };
	}
	if (temp > -2) {
		return { bg: "#FE9CC3", font: "black" };
	}
	if (temp > -4) {
		return { bg: "#FFBADC", font: "black" };
	}
	if (temp > -6) {
		return { bg: "#FEDCED", font: "black" };
	}
	if (temp > -8) {
		return { bg: "#FFEFF9", font: "black" };
	} else {
		return { bg: "white", font: "black" };
	}
};
