import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'hooks/redux';
import axios from 'api/axiosInstance';

import { Typography, Button, Modal, LinearProgress } from '@material-ui/core';
import { MessageForm } from '../Home/components';
import { 
  ViewContainer, 
  EventHeader, 
  EventHeaderContent, 
  EventControls, 
  EventMeta, 
  CloseButton,
  ProfileLink,
  ElevatedBox,
  Headline,
  Center,
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

interface InfoEvent extends StudentifyEvent {}


const InfoEventView = () => {
  const [infoEvent, setInfoEvent] = useState<InfoEvent>();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const me = useSelector(state => state.auth.user);

  const history = useHistory();
  const params = useParams<Params>();
  const eventId = parseInt(params.id);

	useEffect(() => {
    setIsLoading(true);
		fetchInfoEvent(eventId);

		async function fetchInfoEvent(eventId: number) {
			try {
				const res = await axios.get<InfoEvent>(`/Info/${eventId}`);
				setInfoEvent(res.data);
        setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
	}, [eventId, setInfoEvent]);

  const backToList = () => {
    history.push('/home');
  }

  return (
    <>
      {isLoading ? (
        <Center>
          <LinearProgress  style={{ width: '100%' }}/>
        </Center>
      ) : ( 
        <ViewContainer>
          <ElevatedBox disablePadding={true}>
            <EventHeader eventType={infoEvent?.eventType as string}>
              <EventHeaderContent>
                <CloseButton size="small" color="secondary" onClick={backToList}>
                  <Close fontSize="small"/>
                </CloseButton>
                <Typography variant="h4">{infoEvent?.name}</Typography>
                <EventMeta>
                  <Category /> {infoEvent?.eventType}
                </EventMeta>
                <EventMeta>
                  <Event /> {infoEvent?.expiryDate.substring(0, 10)}
                </EventMeta>
                <ProfileLink to={`/profile/${infoEvent?.authorId}`}>
                  <EventMeta>
                    <Person /> {infoEvent?.author.firstName} {infoEvent?.author.lastName}
                  </EventMeta>
                </ProfileLink>
                <EventMeta>
                  <LocationOn /> {infoEvent ? stringifyEventAddress(infoEvent) : null}
                </EventMeta>
              </EventHeaderContent>
            </EventHeader>
          </ElevatedBox>

          <ElevatedBox>
            <Headline variant="h6" eventType={infoEvent?.eventType as string}>Description:</Headline>
            <Typography>{infoEvent?.description}</Typography>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            <br />
            <br />

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ElevatedBox>

          <EventControls>
            <Button 
              variant="contained" 
              color="primary"
              endIcon={<Send />}
              disabled={me?.id === infoEvent?.authorId}
              onClick={() => setIsModalOpen(true)}
            >
              send message
            </Button>
          </EventControls>
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <MessageForm closeModal={() => setIsModalOpen(false)}/>
          </Modal>
        </ViewContainer>
      )}
    </>
  )
}

export default InfoEventView;
