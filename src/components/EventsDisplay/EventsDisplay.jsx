import EventCard from '../EventCard/EventCard';
import './EventsDisplay.css';
import FilteringBar from '../FilteringBar/FilteringBar';

const EventsDisplay = (props) => {
	console.log(props.data);

	return (
		<div className="events-display-container">
			<h1>
				{props.title + ' '}
				Events
			</h1>
				<FilteringBar/>
			<div className="cards-container">
				{props.data &&
					props.data
						.filter((item) => {
							return item.title.toLocaleLowerCase().includes(props.filter);
						})
						.map((item) => {
							return <EventCard key={item.id} data={item} />;
						})}
			</div>
		</div>
	);
};

export default EventsDisplay;
