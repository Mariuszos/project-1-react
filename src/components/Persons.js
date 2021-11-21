import React from "react";
import "./Persons.css";
import Person from "./Persons/Person";

class Persons extends React.Component {
	constructor() {
		super();

		const persons = [{
			imie: "Mariusz",
			nazwisko: "Martynowicz",
			stanowisko: "Front End Dev",
			opis: "Jakiś opis lorem ipsum dolor sit amet",
			adres: "Łomża, Jakaśulica 1",
		}, {
			imie: "Wioletta",
			nazwisko: "Martynowicz",
			stanowisko: "Front Back Dev",
			opis: "Cześć, nazywam się Wioletta. Opis lorem ipsum dolor sit amet",
			adres: "Łomża, Jakaśulica 166",
		}];

		this.state = { persons }
	}
	render() {
		return (
				<section className="persons" id="section-about">
				<h1>Nasi specjaliści</h1>
				{this.state.persons.map((person, i) => {
					return (
						<Person key={i} person={person}/>
					)
				})}
			</section>
		)
	}
}

export default Persons;