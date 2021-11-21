import React from "react";
import "./Main.css";

class Main extends React.Component {
	render() {
		return (
			<main className="about">
			<div className="background">
				<h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
				<h2>Nie wierz nam na słowo - sprawdź</h2>
				<button><a href="#section-offers">oferta</a></button>
			</div>
		</main>
		);
	}
}

export default Main;