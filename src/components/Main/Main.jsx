import React , {useEffect,useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/EventsDisplay';
import Login from '../Login/Login';


const Main = () => {
    const [events, setEvents] = useState(null);
    const [musicEvents, setMusicEvents] = useState(null);
    const [sportEvents, setSportEvents] = useState(null);
    const [theatreEvents, setTheatreEvents] = useState(null);

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
	
		




  return (
    <main>
        <Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/music" element={<EventsDisplay data={musicEvents} />} />
				<Route path="/sports" element={<EventsDisplay data={sportEvents} />} />
				<Route path="/theatre" element={<EventsDisplay data={theatreEvents} />} />
				
			</Routes>
    </main>
  )
}

export default Main