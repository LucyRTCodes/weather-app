import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TempUnitsProvider } from "./contexts/TempUnits.jsx";
import { BrowserRouter } from "react-router-dom";
import { CityProvider } from "./contexts/City.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		{/* <TempUnitsProvider> */}
		<CityProvider>
			<App />
		</CityProvider>
		{/* </TempUnitsProvider> */}
	</BrowserRouter>
);
