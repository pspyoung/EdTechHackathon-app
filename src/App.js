import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Assessments from './Components/Assessments/Assessments';
import Meditate from './Components/Meditate/Meditate';
import Timer from './Components/Timer/Timer';
import User from './Components/User/User';
import { Routes, Route } from 'react-router-dom';

function App() {
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
		</div>
	);
}

export default App;
