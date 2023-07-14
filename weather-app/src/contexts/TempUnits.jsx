import { createContext, useState } from "react";

export const TempUnitsContext = createContext();

export const TempUnitsProvider = ({ children }) => {
	const [tempUnits, setTempUnits] = useState("");
	return (
		<CityContext.Provider value={{ tempUnits, setTempUnits }}>
			{children}
		</CityContext.Provider>
	);
};
