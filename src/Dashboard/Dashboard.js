import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
	return (
		<div className="dashboard">
			<h2>Hi Jack! ready to reach new heights</h2>
			<div>
				<div className="header">
					<h2>tools</h2>
					<img
						className="dashboardPics"
						src="https://i.imgur.com/kfaeOjQ.png"
						alt="happy bird icon"
					/>
				</div>
				<button className="box">
					<Link to="/Timer">
						<img src="/Assets/Pomodoro.png" />
						My Timer
					</Link>
				</button>

				<button className="box">find</button>
			</div>
			<div>
				<h2>activities</h2>
				<button className="box">daily doodle </button>
				<button className="box">
					<Link to="/Meditate">
						<img className="dashboardPics" src="/Assets/Relax.png" /> Relax and
						Reinforce
					</Link>
				</button>
				<button className="box"> breath easy </button>
			</div>
		</div>
	);
}

export default Dashboard;
