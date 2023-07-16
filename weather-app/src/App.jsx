import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityWeather from "./components/CityWeather";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/:cityName" element={<CityWeather />}></Route>
			</Routes>
		</>
	);
}

export default App;
