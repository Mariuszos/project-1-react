import React from "react"
import "./Header.css"

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="logo">{this.props.name}</div>
				<nav className="nav">
					<ul className="nav-links">
						<li className="nav-link"><a href="#section-about">o nas</a></li>
						<li className="nav-link"><a href="#section-offers">oferta</a></li>
						<li className="nav-link">
							<a href="#contact" className="contact">kontakt</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;