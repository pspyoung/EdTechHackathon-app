import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<nav className="navBar-container">
			<div className="navBar">
				<Link to="/">
					<h4>Go Home</h4>
				</Link>
				<Link to="/Assessments">
					<h4>Assessments</h4>
				</Link>
				<Link to="/Meditate">
					<h4>Meditate</h4>
				</Link>
				<Link to="/Timer">
					<h4>Timer</h4>
				</Link>
				<Link to="/User">
					<h4>User</h4>
				</Link>
			</div>
			<img id="logo" src="https://i.imgur.com/0o3nQJ8.png" alt="soar-logo"/>
		</nav>
	);
}

export default Navbar;
