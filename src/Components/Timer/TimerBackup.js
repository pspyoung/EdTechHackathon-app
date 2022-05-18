import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
	let timer = 0;
	let timeInterval;
	const [time, setTime] = useState(100);
	const [timerOn, setTimerOn] = useState(false);

	function timerOff() {
		setTimerOn(false);
	}

	function startTimer() {
		timer = 100;
		timeInterval = setInterval(timer, 1000);
		time--;

		if (time === 0) {
			clearInterval(timeInterval);
		}
	}

	return (
		<div className="Timer">
			<div className="timeUnits">
				{/* Minutes */}
				<span>{('0' + Math.floor((time / 60000) % 100)).slice(-2)}:</span>
				{/* Seconds */}
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				{/* Milliseconds */}
				<span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
			</div>

			<button onClick={() => setTimerOn(true)}>
				<i className="fa-solid fa-play"></i>
			</button>
			<button onClick={() => setTimerOn(false)}>Stop</button>
			<button onClick={() => setTimerOn(true)}>Resume</button>
			<button onClick={() => setTime(0)}>Reset</button>
		</div>
	);
}

export default Timer;
