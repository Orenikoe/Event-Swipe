import EventCard from '../EventCard/EventCard';
import './EventsDisplay.css';

const EventsDisplay = (props) => {
	console.log(props.data);

	return (
		<>
			{window.location.pathname === '/' ? (
				<h1>All Events</h1>
			) : (
				<h1>{props.data[0].type} Events</h1>
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
		</>
	);
};

export default EventsDisplay;
