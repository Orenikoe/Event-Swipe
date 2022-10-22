import { Routes, Route } from 'react-router-dom';
import './App.css';
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
      <Navbar/>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/subscribe" element={<Subscribe />} />
			</Routes>
		</div>
	);
}

export default App;
