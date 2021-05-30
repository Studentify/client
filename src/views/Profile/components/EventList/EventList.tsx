import React from "react";

import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import {
	List,
	EventContainer,
	EventMeta,
	EventsHeader,
	EventContent,
	EventHeader,
	EventDate,
	BlockLink,
} from "./EventList-style";

interface EventListProps {
	events: StudentifyEvent[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
	const eventItems = events.map((event) => (
		<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`} key={event.id}>
			<EventContainer>
				<EventContent>
					<EventHeader>
						{event.name}
						<EventDate>{event.creationDate.substring(0, 10)}</EventDate>
					</EventHeader>
					<EventMeta>
						<LocationOnIcon style={{ fontSize: "1rem", color: "gray" }} />
						{/* {event.location} */}
					</EventMeta>
					<p>{event.description}</p>
				</EventContent>
			</EventContainer>
		</BlockLink>
	));
	return (
		<>
			<EventsHeader>
				<h1>User Events:</h1>
			</EventsHeader>
			<List>{eventItems}</List>
		</>
	);
};

export default EventList;
