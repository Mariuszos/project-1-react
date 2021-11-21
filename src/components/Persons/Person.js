import React from "react";
import "./Person.css";

class Person extends React.Component {
	render() {
		return (
				<div className="person">
					<div className="person-image">
						<img src={this.props.person.img} />
					</div>
					<div className="person-about">
						<h2>{`${this.props.person.imie + " " + this.props.person.nazwisko}`} {this.props.person.stanowisko}</h2>
						<p>
							{this.props.person.opis} <br /> <br />
						{this.props.person.adres}
						</p>
					</div>
				</div>
		)
	}
}

export default Person;