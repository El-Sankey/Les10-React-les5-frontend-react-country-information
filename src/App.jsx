import './App.css';
// import fetchLandenNamen from "./assets/helpers/fetchLandenNamen.js"
import DisapearButton from "./Components/DisapearButton.jsx";


	// fetchLandenNamen();
	// DisapearButton();

function App() {

	return (
		<>
			<section>
				<div>
					<header>
						<img src="src/assets/world_map.png" alt="wereld-kaart"/>
						<h1 className="h1">world regions</h1>
						<DisapearButton classNam="btn"/>
					</header>
				</div>
				<div className="continenten">
					<main className="inner-cont">
						<span className="Afr">Africa
							<form action=""></form>
						</span>
						<span className="Ame">America</span>
						<span className="Asi">Asia</span>
						<span className="Eur">Europe</span>
						<span className="Oce">Oceania</span>
					</main>
				</div>
			</section>
		</>
	)
}

export default App
