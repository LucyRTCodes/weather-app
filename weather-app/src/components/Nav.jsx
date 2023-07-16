import { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiToggleRightDuotone, PiToggleLeftDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CityContext } from "../contexts/City";
import "../styles/Nav.css";
import { TempUnitsContext } from "../contexts/TempUnits";

function Nav() {
	const { setCity } = useContext(CityContext);
	const { tempUnits, setTempUnits } = useContext(TempUnitsContext);
	const [isVisible, setIsVisible] = useState(false);
	return (
		<nav
			onMouseEnter={(e) => {
				setIsVisible(true);
			}}
			onMouseLeave={(e) => {
				setIsVisible(false);
			}}
		>
			<div
				onMouseEnter={(e) => {
					setIsVisible(false);
				}}
			></div>
			<RxHamburgerMenu
				style={{
					marginLeft: "175px",
					gridColumn: "0/2",
					textAlign: "right",
					backgroundColor: "rgba(255, 255, 255, 0.45)",
					padding: "10px",
				}}
				className="menu"
				onMouseEnter={(e) => {
					setIsVisible(true);
				}}
			/>
			<div id="options" className={isVisible ? undefined : "hidden"}>
				<Link
					to="/"
					onClick={(e) => {
						setCity("");
					}}
				>
					Home
				</Link>
				<Link to="/">Theme</Link>
				<div id="units">
					<p>°C</p>
					{tempUnits === "C" ? (
						<PiToggleLeftDuotone
							size={30}
							onClick={(e) => {
								setTempUnits("F");
							}}
						/>
					) : (
						<PiToggleRightDuotone
							size={30}
							onClick={(e) => {
								setTempUnits("C");
							}}
						/>
					)}
					<p>°F</p>
				</div>
				<div></div>
			</div>
		</nav>
	);
}

export default Nav;
