import React from 'react';
import './Navbar';
import Assessments from '../Assessments/Assessments';
import Meditate from '../Meditate/Meditate';
import Timer from '../Timer/Timer';
import User from '../User/User';
import Homepage from '../../Homepage/Homepage';

function Navbar(props) {
	return (
		<div>
			Navbar
			<Assessments />
			<Meditate />
			<Timer />
			<User />
			<Homepage />
		</div>
	);
}

export default Navbar;
