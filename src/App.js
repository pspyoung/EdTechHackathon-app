import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Homepage/Homepage';
import Assessments from './Components/Assessments/Assessments';
import Meditate from './Components/Meditate/Meditate';
import Timer from './Components/Timer/Timer';
import User from './Components/User/User';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			App here
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
