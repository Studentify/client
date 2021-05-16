import React from "react";

import Button from "@material-ui/core/Button";
import FilterListIcon from "@material-ui/icons/FilterList";

import { List, EventsHeader, EventItem, EventHeader, EventDate } from "./EventList-style";

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
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const eventItems = events.map(event => (
    <EventItem key={event.id}>
      <EventHeader>
        {event.name}
        <EventDate>{event.creationDate.substring(0, 10)}</EventDate>
      </EventHeader>
      <p>{event.description}</p>
    </EventItem>
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
