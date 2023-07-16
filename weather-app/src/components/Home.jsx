import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CityContext } from "../contexts/City";
import { BsUmbrellaFill } from "react-icons/bs";
import "../styles/Home.css";

function Home() {
	const { city, setCity } = useContext(CityContext);
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setCity(input);
	};
	useEffect(() => {
		document.body.style.backgroundColor = "grey";
		navigate(`/${city}`);
	}, [city]);
	return (
		<div className="home">
			<h1>City Weather</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="city-input">What's the weather like in</label>
				</div>
				<input
					id="city-input"
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
				></input>
				<div>
					<button>
						Search
						<BsUmbrellaFill style={{ marginLeft: "10px" }} />
					</button>
				</div>
			</form>
		</div>
	);
}

export default Home;
