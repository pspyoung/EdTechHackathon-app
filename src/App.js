import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Assessments from './Components/Assessments/Assessments';
import Meditate from './Components/Meditate/Meditate';
import Timer from './Components/Timer/Timer';
import User from './Components/User/User';
// import CountDownTimer from './Components/Timer/CountDownTimer';
import { Routes, Route } from 'react-router-dom';

function App() {
	const hoursMinSecs = { hours: 0, minutes: 20, seconds: 0 };
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/Assessments" element={<Assessments />} />
				<Route path="/Meditate" element={<Meditate />} />
				<Route path="/Timer" element={<Timer />} />
				<Route path="/User" element={<User />} />
			</Routes>
			{/* <CountDownTimer hoursMinSecs={hoursMinSecs} /> */}
		</div>
	);
}

export default App;
