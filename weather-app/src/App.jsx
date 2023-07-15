import "./App.css";
import { Routes, Route } from "react-router-dom";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<CityInput />}></Route>
				<Route path="/:cityName" element={<CityWeather />}></Route>
			</Routes>
		</>
	);
}

export default App;
