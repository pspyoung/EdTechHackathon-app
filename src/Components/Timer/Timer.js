import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

function Timer() {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval;
		if (timerOn) {
			interval = setInterval(() => {
				// if (time >= 1) {
				// }

				setTime((prevTime) => prevTime + 1000);
			}, 1000);

			if (timerOn && time >= 3) {
				setTimerOn(false);
				setTime(0);
				// clearInterval(interval);
			}
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<div className="Timer">
			<img src="/Assets/Timer.png" />
			<div className="timeUnits">
				{/* Minutes */}
				<span>{('0' + Math.floor((time / 60000) % 100)).slice(-2)}:</span>
				{/* Seconds */}
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
				{/* Milliseconds */}
				{/* <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span> */}
			</div>

			<button onClick={() => setTimerOn(true)}>Set Time to 20 Minutes</button>
			<br></br>

			<button onClick={() => setTimerOn(true)}>
				<i className="fa-solid fa-play"></i>
			</button>
			<button onClick={() => setTimerOn(false)}>
				<i className="fa-solid fa-pause"></i>
			</button>
			<button onClick={() => setTime(0)}>
				<i className="fa-solid fa-rotate-left"></i>
			</button>
		</div>
	);
}

export default Timer;
