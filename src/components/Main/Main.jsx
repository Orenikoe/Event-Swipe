import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import EventsDisplay from '../EventsDisplay/EventsDisplay';
import Login from '../Login/Login';
import  { SignIn } from '../Login/Login2';
import SearchBar from '../SearchBar/SearchBar';

const Main = () => {
	const [events, setEvents] = useState(null);
	const [musicEvents, setMusicEvents] = useState(null);
	const [sportEvents, setSportEvents] = useState(null);
	const [theatreEvents, setTheatreEvents] = useState(null);
	const [familyEvents, setFamilyEvents] = useState(null);
	const [restWeekEvents, setRestWeekEvents] = useState(null);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch(
			'https://api.seatgeek.com/2/events?client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz'
		)
			.then((res) => res.json())
			.then((data) => {
				setEvents(data.events);
				console.log(data.events);
				setTheatreEvents(
					data.events.filter((item) => {
						return item.type === 'theater';
					})
				);
				setMusicEvents(
					data.events.filter((item) => {
						return item.type === 'concert' || item.type === 'music_festival';
					})
				);
				setSportEvents(
					data.events.filter((item) => {
						return (
							item.type === 'sports' ||
							item.type === 'f1' ||
							item.type === 'pga'
						);
					})
				);
				setFamilyEvents(
					data.events.filter((item) => {
						return item.type === 'family';
					})
				);
			});
	}, []);

	useEffect(() => {
        let year = new Date().getFullYear();
        let month = (new Date().getMonth()+1);
        let day = new Date().getDate();
		fetch(
			`https://api.seatgeek.com/2/events?datetime_utc.gte=${year}-${
				month
			}-${
				day + 1
			}&datetime_utc.lte=${year}-${month}-${day+7}&per_page=200&client_id=Mjk4MjkxNzJ8MTY2NjI1NjIzNi41ODYyMTUz`
		)
        .then((res) => res.json())
        .then(data => setRestWeekEvents(data.events))
	}, []);

	function handleChange(input) {
		setSearchValue(input);
	}

	return (
		<main>
			<SearchBar state={handleChange} />
			<Routes>
				<Route path="/login" element={< SignIn />} />
				<Route
					path="/music"
					element={<EventsDisplay data={musicEvents} title='Music' filter={searchValue} />}
				/>
				<Route
					path="/sports"
					element={<EventsDisplay data={sportEvents} title='Sports' filter={searchValue} />}
				/>
				<Route
					path="/theatre"
					element={<EventsDisplay data={theatreEvents} title='Theatre' filter={searchValue} />}
				/>
				<Route
					path="/family"
					element={<EventsDisplay data={familyEvents} title='Family' filter={searchValue} />}
				/>
				<Route
					path="/"
					element={<div>
                        <EventsDisplay data={events} title='Today' filter={searchValue} />
                        <EventsDisplay data={restWeekEvents} title='This Week' filter={searchValue} />
                        </div>}
				/>
			</Routes>
		</main>
	);
};

export default Main;
