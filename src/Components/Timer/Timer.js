import React from 'react';
import { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
	const [counter, setCounter] = useState(60);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
	}, [counter]);

	return (
		<div className="App">
			<div>Countdown: {counter}</div>
			<button onClick={() => setTimerOn(true)}>
				<i className="fa-solid fa-play"></i>
			</button>
			<button onClick={() => setTimerOn(false)}>Stop</button>
			<button onClick={() => setTimerOn(true)}>Resume</button>
			<button onClick={() => counter(0)}>Reset</button>
		</div>

		// <div className="Timer">
		// 	<div className="timeUnits">
		// 		{/* Minutes */}
		// 		<span>{('0' + Math.floor((time / 60000) % 100)).slice(-2)}:</span>
		// 		{/* Seconds */}
		// 		<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
		// 		{/* Milliseconds */}
		// 		<span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
		// 	</div>

		// <button onClick={() => setTimerOn(true)}>
		// 	<i className="fa-solid fa-play"></i>
		// </button>
		// <button onClick={() => setTimerOn(false)}>Stop</button>
		// <button onClick={() => setTimerOn(true)}>Resume</button>
		// <button onClick={() => setTime(0)}>Reset</button>
		// </div>
	);
}

export default Timer;
