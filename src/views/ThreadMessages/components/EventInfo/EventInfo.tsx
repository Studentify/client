import React from 'react';

import { Container, EventHeader, EventMeta, EventDate } from './EventInfo-style';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { EventInfoProps } from './types';

import { stringifyEventAddress } from 'utils/event';

const mockEvent = {
  id: 9,
  eventType: "INFO",
  name: "Piwo to moje paliwo",
  creationDate: "2021-05-30T12:04:12.200671",
  expiryDate: "2021-05-16T00:00:00",
  description: " 123 12 13413 4tg bdhb dsfb dsv b",
  studentifyAccountId: 2,
  location: {
      address: {
          country: "Poland",
          town: "Kraków",
          postalCode: "30-059",
          street: "Władysława Reymonta",
          houseNumber: "23"
      },
      coordinates: {
          longitude: 19.910920626922977,
          latitude: 50.066881829338826
      }
  },
  authorId: 2
}


const EventInfo: React.FC<EventInfoProps> = ({ event = mockEvent}) => {
  return (
    <Container>
      <EventHeader>
        {event.name}
        <EventDate>
          <EventIcon fontSize="small" />
          {event.expiryDate.substring(0, 10)}
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