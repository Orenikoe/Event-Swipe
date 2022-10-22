import EventCard from '../EventCard/EventCard';
import './EventsDisplay.css';

const EventsDisplay = (props) => {
	console.log(props.data);

	return (
		<>
			{props.data && (
				<h1>
					{props.data[0].type} Events
				</h1>
			)}

			<div className="cards-container">
				{props.data &&
					props.data.map((item) => {
						return <EventCard data={item} />;
					})}
			</div>
		</>
	);
};

export default EventsDisplay;
