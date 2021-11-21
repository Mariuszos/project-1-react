import React from "react";
import Offer from "./Offers/Offer";
import Social from "./Socials/Social";
import "./Offers.css";

class Offers extends React.Component {

	constructor() {
		super();
		const offers = [];

		for (let i = 0; i < 6; i++) {
			offers.push(`Usługa ${i+1}`);
		}

		this.state = { offers, isNew: [0, 4] };
	}

	render() {
		return (
			<section className="offers" id="section-offers">
			<h1 className="offers-title">{this.props.title}</h1>
			<div className="offers-items">
				{this.state.offers.map((offer, i) => {
					return (
						this.state.isNew.includes(i) ? <Offer key={i} isNew name={offer}/> : <Offer key={i} name={offer}/>
					)
				})}
			</div>
			<footer>
				<h1 className="footer-title">
					Nazwa firmy - wszelkie prawa zastrzeżone, {new Date().getFullYear()}
				</h1>
				<ul className="socials">
					<Social cname="insta" icon="fa fa-instagram" />
					<Social cname="facebook" icon="fa fa-facebook-square" />
				</ul>
			</footer>
		</section>
		);
	}
};

export default Offers;