import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
	return (
		<div className="dashboard">
			<h2 id="hello-message">
				Hi Jack! Ready to reach new heights? I'm here to help
			</h2>
			<div id="triangle"></div>
			<div>
				<div className="header">
					<h2 id="tools">Tools</h2>
					<img
						id="happy-bird-icon"
						className="dashboardPics"
						src="https://i.imgur.com/kfaeOjQ.png"
						alt="happy bird icon"
					/>
				</div>
				<div className="toolsContainer">
					<button className="box boxTools">
						<h3 className="dashboardBoxHeader">Find Your Learning Style</h3>
						<div className="dashboardBody">
							<p className="dashboardBox">
								We all learn differently, and that's okay
							</p>
							<img
								className="dashboardPics dashboardPicsActivities"
								src="/Assets/Lightbulb.png"
							/>
						</div>
					</button>
					<button className="box boxTools">
						<h3 className="dashboardBoxHeader">My Timer</h3>
						<p className="dashboardBox">
							Make the most of your study time with our Pomodoro method
						</p>
						<Link to="/Timer">
							<img className="dashboardPics " src="/Assets/Pomodoro.png" />
						</Link>
					</button>
				</div>
			</div>
			<div>
				<h2>Activities</h2>
				<div className="activitiesContainer">
					<button className="box boxActivities">
						<h4 className="dashboardBoxHeader">Daily Doodle</h4>
						<img className="dashboardPics" src="/Assets/Doodle.png" />
					</button>
					<button className="box boxActivities">
						<h4 className="dashboardBoxHeader">Relax and Reinforce</h4>
						<Link to="/Meditate">
							<img className="dashboardPics" src="/Assets/Relax.png" />
						</Link>
					</button>
					<button className=" box boxActivities">
						<h4 className="dashboardBoxHeader">Short Stories</h4>
						<img className="dashboardPics" src="/Assets/Stories.png" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
