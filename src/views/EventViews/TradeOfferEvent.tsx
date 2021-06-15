import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'hooks/redux';
import axios from 'api/axiosInstance';

import { MessageForm } from '../Home/components';
import { Typography, Modal } from '@material-ui/core';
import { 
  ViewContainer, 
  EventHeader, 
  EventHeaderContent, 
  Headline, 
  EventControls, 
  EventMeta, 
  CloseButton,
  EventButton,
  ProfileLink,
} from './EventViews-style';

import {  
  Close,
  LocationOn,
  Category,
  Event,
  Person,
  Send,
} from '@material-ui/icons';

import { stringifyEventAddress } from 'utils/event';

interface Params {
	id: string;
}

interface TradeOfferEvent extends StudentifyEvent {
	price: string;
	offer: string;
}


const TradeOfferEventView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tradeOfferEvent, setTradeOfferEvent] = useState<TradeOfferEvent>();
  const me = useSelector(state => state.auth.user);

  const history = useHistory();
  const params = useParams<Params>();
  const eventId = parseInt(params.id);

	useEffect(() => {
		fetchInfoEvent(eventId);

		async function fetchInfoEvent(eventId: number) {
			try {
				const res = await axios.get<TradeOfferEvent>(`/TradeOffers/${eventId}`);
				setTradeOfferEvent(res.data);
			} catch (err) {
				console.log(err);
			}
		}
	}, [eventId, setTradeOfferEvent]);

  const backToList = () => {
    history.push('/home');
  }

  return (
    <ViewContainer>
      <EventHeader eventType={tradeOfferEvent?.eventType as string}>
        <EventHeaderContent>
          <CloseButton size="small" color="secondary" onClick={backToList}>
            <Close fontSize="small"/>
          </CloseButton>
          <Typography variant="h4">{tradeOfferEvent?.name}</Typography>
          <EventMeta>
            <Category /> {tradeOfferEvent?.eventType}
          </EventMeta>
          <EventMeta>
            <Event /> {tradeOfferEvent?.expiryDate.substring(0, 10)}
          </EventMeta>
          <ProfileLink to={`/profile/${tradeOfferEvent?.authorId}`}>
            <EventMeta>
              <Person /> {tradeOfferEvent?.author.firstName} {tradeOfferEvent?.author.lastName}
            </EventMeta>
          </ProfileLink>
          <EventMeta>
            <LocationOn /> {tradeOfferEvent ? stringifyEventAddress(tradeOfferEvent) : null}
          </EventMeta>
        </EventHeaderContent>
      </EventHeader>

      <Headline variant="h6" eventType={tradeOfferEvent?.eventType as string}>Offering:</Headline>
      <Typography>{tradeOfferEvent?.offer}</Typography>

      <Headline variant="h6" eventType={tradeOfferEvent?.eventType as string}>Want to receive:</Headline>
      <Typography>{tradeOfferEvent?.price}</Typography>

      <Headline variant="h6" eventType={tradeOfferEvent?.eventType as string}>Description:</Headline>
      <Typography>{tradeOfferEvent?.description}</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      <EventControls>
        <EventButton 
          variant="contained" 
          color="primary"
          endIcon={<Send />}
          disabled={me?.id === tradeOfferEvent?.authorId}
          eventType={tradeOfferEvent?.eventType as string}
          onClick={() => setIsModalOpen(true)}
        >
          send message
        </EventButton>
      </EventControls>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<MessageForm closeModal={() => setIsModalOpen(false)}/>
			</Modal>
    </ViewContainer>
  );
}

export default TradeOfferEventView;
