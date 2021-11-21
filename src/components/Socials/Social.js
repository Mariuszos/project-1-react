import React from "react";
import "./Social.css";

class Social extends React.Component {
	render() {
		return (
			<li className={this.props.cname}>
				<i className={this.props.icon}></i>
			</li>
		)
	}
}

export default Social;