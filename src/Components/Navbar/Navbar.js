import React from 'react';
import './Navbar';
import { Link } from 'react-router-dom';

function Navbar(props) {
	return (
		<div>
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
	);
}

export default Navbar;
