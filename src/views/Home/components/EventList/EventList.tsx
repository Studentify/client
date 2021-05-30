import React from "react";

import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { List, EventContainer, EventMeta, EventsHeader, EventContent, EventHeader, EventDate, BlockLink } from "./EventList-style";

import { stringifyEventAddress } from 'utils/event';

interface EventListProps {
  events: StudentifyEvent[];
	openFiltersModal(): void;
}

const EventList: React.FC<EventListProps> = ({ events, openFiltersModal }) => {
	const sortedEvents = events.sort((a, b) => {
		const timeA = new Date(a.expiryDate).getTime();
		const timeB = new Date(b.expiryDate).getTime();

		return timeA - timeB;
	});

  const eventItems = sortedEvents.map(event => (
		<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`} key={event.id}>
			<EventContainer>
				<EventContent>
					<EventHeader>
						{event.name}
						<EventDate>{event.expiryDate.substring(0, 10)}</EventDate>
					</EventHeader>
					<EventMeta><LocationOnIcon style={{ fontSize: '1rem', color: 'gray' }}/>{stringifyEventAddress(event)}</EventMeta>
					<p>{event.description}</p>
				</EventContent>
			</EventContainer>
		</BlockLink>
  ))
  return (
    <>
    	<EventsHeader>
				<h1>Current Events:</h1>
				<Button 
					endIcon={<FilterListIcon/>} 
					variant="contained" 
					size="small" 
					color="primary"
					onClick={openFiltersModal}
				>
					filters
				</Button>
			</EventsHeader>
      <List>
        {eventItems}
      </List>
    </>
  );
}

export default EventList;
