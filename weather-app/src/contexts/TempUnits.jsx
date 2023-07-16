import { createContext, useState } from "react";

export const TempUnitsContext = createContext();

export const TempUnitsProvider = ({ children }) => {
	const [tempUnits, setTempUnits] = useState("C");
	return (
		<TempUnitsContext.Provider value={{ tempUnits, setTempUnits }}>
			{children}
		</TempUnitsContext.Provider>
	);
};
