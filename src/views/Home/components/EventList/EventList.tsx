import React from "react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { List, EventContainer, EventMeta, EventContent, EventHeader, EventDate, BlockLink } from "./EventList-style";

import { stringifyEventAddress } from 'utils/event';

interface EventListProps {
  events: StudentifyEvent[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
	const sortedEvents = events.sort((a, b) => {
		const timeA = new Date(a.expiryDate).getTime();
		const timeB = new Date(b.expiryDate).getTime();

		return timeA - timeB;
	});

  const eventItems = sortedEvents.map(event => (
		<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`} key={event.id}>
			<EventContainer eventType={event.eventType}>
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
  ));
  
  return (
    <List>
      {eventItems}
    </List>
  );
}


export default EventList;
