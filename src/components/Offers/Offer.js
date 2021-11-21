import React from "react";
import "./Offer.css";

class Offer extends React.Component {
	render() {
		return (
			<div className="offer-item new">
				{this.props.isNew ? <div className="dot"></div> : null}
				<p className="offer-title">{this.props.name} {this.props.isNew ? `(nowość)` : null}</p>
			</div>
		)
	}
}

export default Offer;