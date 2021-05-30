import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'api/axiosInstance';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CategoryIcon from '@material-ui/icons/Category';
import EventIcon from '@material-ui/icons/Event';
import Button from '@material-ui/core/Button';

import { ViewContainer, EventHeader, EventHeaderContent, EventControls, EventMeta, CloseButton } from './EventViews-style';

import { stringifyEventAddress } from 'utils/event';

interface Params {
  id: string;
}

interface InfoEvent extends StudentifyEvent {
  
}


const InfoEventView = () => {
  const [infoEvent, setInfoEvent] = useState<InfoEvent>();
  const history = useHistory();
  const params = useParams<Params>();
  const eventId = parseInt(params.id);

	useEffect(() => {
		fetchInfoEvent(eventId);

		async function fetchInfoEvent(eventId: number) {
			try {
				const res = await axios.get<InfoEvent>(`/Info/${eventId}`);
				setInfoEvent(res.data);
			} catch(err) {
				console.log(err);
			}
		}
	}, [eventId, setInfoEvent]);

  const backToList = () => {
    history.push('/home');
  }

  return (
    <ViewContainer>
      <EventHeader eventType={infoEvent?.eventType as string}>
        <EventHeaderContent>
          <CloseButton size="small" color="secondary" onClick={backToList}>
            <CloseIcon fontSize="small"/>
          </CloseButton>
          <Typography variant="h4">{infoEvent?.name}</Typography>

          <EventMeta>
            <CategoryIcon /> {infoEvent?.eventType}
          </EventMeta>
          <EventMeta>
            <EventIcon /> {infoEvent?.expiryDate.substring(0, 10)}
          </EventMeta>
          <EventMeta>
            <LocationOnIcon /> {infoEvent ? stringifyEventAddress(infoEvent) : null}
          </EventMeta>
        </EventHeaderContent>
      </EventHeader>

      <Typography>{infoEvent?.description}</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      <EventControls>
        <Button variant="contained" color="primary">send message</Button>
        <Button variant="contained" color="primary">I'm interested</Button>
      </EventControls>
    </ViewContainer>
  )
}

export default InfoEventView;
