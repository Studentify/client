import React from "react";

import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';

import { List, EventContainer, EventMeta, EventsHeader, EventContent, EventHeader, EventDate, BlockLink } from "./EventList-style";

interface Event {
	id: number;
	eventType: string;
	name: string;
	creationDate: string;
	expiryDate: string;
	location: string;
	description: string;
	studentifyAccountId: number;
}

interface EventListProps {
  events: Event[];
	openFiltersModal(): void;
}

const EventList: React.FC<EventListProps> = ({ events, openFiltersModal }) => {
  const eventItems = events.map(event => (
		<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`} key={event.id}>
			<EventContainer>
				<EventContent>
					<EventHeader>
						{event.name}
						<EventDate>{event.creationDate.substring(0, 10)}</EventDate>
					</EventHeader>
					<EventMeta><LocationOnIcon style={{ fontSize: '1rem', color: 'gray' }}/>{event.location}</EventMeta>
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
