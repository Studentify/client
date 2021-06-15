import React from 'react';

import { Container, EventHeader, EventMeta, EventDate } from './EventInfo-style';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { EventInfoProps } from './types';

import { stringifyEventAddress } from 'utils/event';


const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
  return (
    <Container to={`/home/${event?.eventType.toLowerCase()}/${event?.id}`}>
      <EventHeader>
        {event?.name}
        <EventDate>
          <EventIcon fontSize="small" />
          {event?.expiryDate.substring(0, 10)}
        </EventDate>
      </EventHeader>
      <EventMeta variant="body2">
        <LocationOnIcon fontSize="small" />
        {stringifyEventAddress(event)}
      </EventMeta>
    </Container>
  );
}

export default EventInfo;