import React , {useEffect,useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/EventsDisplay';
import Login from '../Login/Login';
import SearchBar from '../SearchBar/SearchBar';


const Main = () => {
    const [events, setEvents] = useState(null);
    const [musicEvents, setMusicEvents] = useState(null);
    const [sportEvents, setSportEvents] = useState(null);
    const [theatreEvents, setTheatreEvents] = useState(null);
	const [searchValue, setSearchValue] = useState('');


	useEffect(() => {
		fetch('https://api.seatgeek.com/2/events?client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz')
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events);
                setTheatreEvents(data.events.filter((item) => {
                    return item.type === 'theater'
                }))
                setMusicEvents(data.events.filter((item) => {
                    return item.type === 'concert'
                }))
                setSportEvents(data.events.filter((item) => {
                    return item.type === 'sports'
                }))
			});
	}, []);
	
    function handleChange(input) {
setSearchValue(input);
    }

   
		



 
  return (
    <main>
        <SearchBar state={handleChange}/>
        <Routes>
          
				<Route path="/login" element={<Login />} />
				<Route path="/music" element={<EventsDisplay data={musicEvents} filter={searchValue} />} />
				<Route path="/sports" element={<EventsDisplay data={sportEvents} filter={searchValue} />} />
				<Route path="/theatre" element={<EventsDisplay data={theatreEvents} filter={searchValue} />} />
				<Route path="/" element={<EventsDisplay data={events} filter={searchValue} />} />
				
			</Routes>
    </main>
  )
}

export default Main