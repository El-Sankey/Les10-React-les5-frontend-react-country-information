import {useState} from "react";
// import fetchLandenNamen from "../assets/helpers/fetchLandenNamen.js";

function Disapear() {
	const [buttonClick, setButtonClick] = useState(false);

	function handelClick() {
		setButtonClick(true);
	}

	return (
		<div>
			{!buttonClick && <button onClick={handelClick}> klik hier</button>}
		</div>
	)
}

export default Disapear;