import axios from "axios";

async function fetchLandenNamen() {
	console.log("Werkt het?")

	try {
		const response = await axios.get("https://restcountries.com/v3.1/name/land");
		console.log(response);
	} catch (error) {
		console.error(error);
	}
	// return <button onClick={fetchLandenNamen}> klik hier </button>
}

export default fetchLandenNamen;

