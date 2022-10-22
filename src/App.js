import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer.jsx'

function App() {
	return (
		<div className="App">
      <Navbar/>
      <Main/>
      <Subscribe/>
			<Footer/>
		</div>
	);
}

export default App;
