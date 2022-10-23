import EventCard from '../EventCard/EventCard';
import './EventsDisplay.css';

const EventsDisplay = (props) => {
	console.log(props.data);

	return (
		<div className="events-display-container">
			{window.location.pathname === '/' ? (
				<h1>All Events</h1>
			) : (
				<h1>
					{props.data[0].type.charAt(0).toUpperCase() +
						props.data[0].type.slice(1)}{' '}
					Events
				</h1>
			)}

			{/* <div className="cards-container">
				{props.data &&
					props.data.map((item) => {
						return <EventCard data={item} />;
					})}
			</div> */}
			<div className="cards-container">
				{props.data &&
					props.data
						.filter((item) => {
							return item.title.toLocaleLowerCase().includes(props.filter);
						})
						.map((item) => {
							return <EventCard data={item} />;
						})}
			</div>
		</div>
	);
};

export default EventsDisplay;
