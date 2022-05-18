import React from 'react';

function Dashboard() {
	return (
		<div className="dashboard">
			<h2>Hi Jack! ready to reach new heights</h2>
			<div>
				<h2>tools</h2>
				<button className="box">
					<i className="fa-solid fa-timer"></i>
				</button>

				<button className="box">find</button>
			</div>
			<div>
				<h2>activities</h2>
				<button className="box"> daily doodle </button>
				<button className="box"> breath easy </button>
				<button className="box"> breath easy </button>
			</div>
		</div>
	);
}

export default Dashboard;
