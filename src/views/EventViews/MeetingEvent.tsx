import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'hooks/redux';
import axios from 'api/axiosInstance';

import { MessageForm } from '../Home/components';
import { Typography, Modal, LinearProgress  } from '@material-ui/core';
import { 
  ViewContainer, 
  EventHeader, 
  EventHeaderContent, 
  EventControls, 
  EventMeta, 
  CloseButton, 
  EventButton,
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
  Group,
  ThumbUp,
} from '@material-ui/icons';

import { stringifyEventAddress } from "utils/event";

interface Params {
	id: string;
}

interface MeetingEvent extends StudentifyEvent {
	maxNumberOfParticipants?: number;
  participants: StudentifyAccount[];
}

const MeetingEventView = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [meetingEvent, setMeetingEvent] = useState<MeetingEvent>();
  const [declaredAttendance, setDeclaredAttendance] = useState(false);
  const me = useSelector(state => state.auth.user);

  const history = useHistory();
  const params = useParams<Params>();
  const eventId = parseInt(params.id);


  const isAttendaceDeclarationDisabled = !getAttendanceDeclarationAvailability();

	useEffect(() => {
    setIsLoading(true);
		fetchInfoEvent(eventId);

		async function fetchInfoEvent(eventId: number) {
			try {
				const res = await axios.get<MeetingEvent>(`/Meetings/${eventId}`);
				setMeetingEvent(res.data);
        setIsLoading(false)
			} catch (err) {
				console.log(err);
			}
		}
	}, [eventId, setMeetingEvent]);


	const backToList = () => {
		history.goBack();
	};

  const handleDeclareAttendance = async () => {
    try {
      if (me && meetingEvent) {
        await axios.patch(`/Meetings/attend/${meetingEvent?.id}`);
        setDeclaredAttendance(true);

        setMeetingEvent({
          ...meetingEvent,
          participants: [
            ...meetingEvent.participants,
            me
          ]
        });
      }
    } catch(err) {
      console.log(err);
    }
  }

  function getAttendanceDeclarationAvailability() {
    if (!meetingEvent || !me) {
      return false;
    }

    const isAlreadyDeclared = !!meetingEvent.participants.find(participant => participant.id === me.id);
    return !isAlreadyDeclared && !declaredAttendance;
  }

  return (
    <>
      {isLoading ? (
        <Center>
          <LinearProgress  style={{ width: '100%' }}/>
        </Center>
      ) : (
        <ViewContainer>
          <ElevatedBox disablePadding>
            <EventHeader eventType={meetingEvent?.eventType as string}>
              <EventHeaderContent>
                <CloseButton size="small" color="secondary" onClick={backToList}>
                  <Close fontSize="small"/>
                </CloseButton>
                <Typography variant="h4">{meetingEvent?.name}</Typography>
                <EventMeta>
                  <Category /> {meetingEvent?.eventType}
                </EventMeta>
                <EventMeta>
                  <Event /> {meetingEvent?.expiryDate.substring(0, 10)}
                </EventMeta>
                <ProfileLink to={`/profile/${meetingEvent?.authorId}`}>
                  <EventMeta>
                    <Person /> {meetingEvent?.author.firstName} {meetingEvent?.author.lastName}
                  </EventMeta>
                </ProfileLink>
                <EventMeta>
                  <LocationOn /> {meetingEvent ? stringifyEventAddress(meetingEvent) : null}
                </EventMeta>
                <EventMeta>
                  <Group /> 
                  {`Participants: ${meetingEvent?.participants.length}/${meetingEvent?.maxNumberOfParticipants}`}
                </EventMeta>
              </EventHeaderContent>
            </EventHeader>
          </ElevatedBox>

          <ElevatedBox>
          <Headline variant="h6" eventType={meetingEvent?.eventType as string}>Description:</Headline>
            <Typography>{meetingEvent?.description}</Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ElevatedBox>

          <EventControls>
            <EventButton 
              variant="contained" 
              color="primary"
              disabled={me?.id === meetingEvent?.authorId}
              endIcon={<Send />}
              eventType={meetingEvent?.eventType as string}
              onClick={() => setIsModalOpen(true)}
            >
              send message
            </EventButton>
            <EventButton 
              variant="contained" 
              endIcon={<ThumbUp />}
              eventType={meetingEvent?.eventType as string}
              disabled={isAttendaceDeclarationDisabled}
              onClick={handleDeclareAttendance}
            >
              {isAttendaceDeclarationDisabled ? "You already participate" : "Declare attendance"}
            </EventButton>
          </EventControls>
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <MessageForm closeModal={() => setIsModalOpen(false)}/>
          </Modal>
        </ViewContainer>
      )}
    </>
  );
}

export default MeetingEventView;
