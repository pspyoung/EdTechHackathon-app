import React from 'react';
import './Navbar';
import Assessments from '../Assessments/Assessments';
import Meditate from '../Meditate/Meditate';
import Timer from '../Timer/Timer';
import User from '../User/User';

function Navbar(props) {
	return (
		<div>
			Navbar
			<Assessments />
			<Meditate />
			<Timer />
			<User />
		</div>
	);
}

export default Navbar;
