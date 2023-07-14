import { useNavigate } from "react-router-dom";

function CityInput() {
	const { city, setCity } = useState();
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setCity(input);
	};
	useEffect(() => {
		navigate(`/${city}`);
	}, [city]);
	return (
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
				<button>☂️</button>
			</div>
		</form>
	);
}

export default CityInput;
