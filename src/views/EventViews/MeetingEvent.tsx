import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'hooks/redux';
import axios from 'api/axiosInstance';

import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import GroupIcon from '@material-ui/icons/Group';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CategoryIcon from '@material-ui/icons/Category';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EventIcon from '@material-ui/icons/Event';
import Modal from "@material-ui/core/Modal";

import { 
  ViewContainer, 
  EventHeader, 
  EventHeaderContent, 
  EventControls, 
  EventMeta, 
  CloseButton, 
  EventButton 
} from './EventViews-style';
import { MessageForm } from '../Home/components';

import { stringifyEventAddress } from 'utils/event';

interface Params {
	id: string;
}

interface MeetingEvent extends StudentifyEvent {
	maxNumberOfParticipants?: number;
  participants: StudentifyAccount[];
}


const MeetingEventView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetingEvent, setMeetingEvent] = useState<MeetingEvent>();
  const [declaredAttendance, setDeclaredAttendance] = useState(false);
  const me = useSelector(state => state.auth.user);

  const history = useHistory();
  const params = useParams<Params>();
  const eventId = parseInt(params.id);

  const isAttendaceDeclarationDisabled = !getAttendanceDeclarationAvailability();

	useEffect(() => {
		fetchInfoEvent(eventId);

		async function fetchInfoEvent(eventId: number) {
			try {
				const res = await axios.get<MeetingEvent>(`/Meetings/${eventId}`);
				setMeetingEvent(res.data);
			} catch (err) {
				console.log(err);
			}
		}
	}, [eventId, setMeetingEvent]);

  const backToList = () => {
    history.push('/home');
  }

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
    console.log({ meetingEvent, me });
    if (!meetingEvent || !me) {
      return false;
    }

    const isAlreadyDeclared = !!meetingEvent.participants.find(participant => participant.id === me.id);
    console.log({ isAlreadyDeclared, declaredAttendance });
    return !isAlreadyDeclared && !declaredAttendance;
  }

  return (
    <ViewContainer>
      <EventHeader eventType={meetingEvent?.eventType as string}>
        <EventHeaderContent>
          <CloseButton size="small" color="secondary" onClick={backToList}>
            <CloseIcon fontSize="small"/>
          </CloseButton>
          <Typography variant="h4">{meetingEvent?.name}</Typography>

          <EventMeta>
            <CategoryIcon /> {meetingEvent?.eventType}
          </EventMeta>
          <EventMeta>
            <EventIcon /> {meetingEvent?.expiryDate.substring(0, 10)}
          </EventMeta>
          <EventMeta>
            <LocationOnIcon /> {meetingEvent ? stringifyEventAddress(meetingEvent) : null}
          </EventMeta>
          <EventMeta>
            <GroupIcon /> 
            {`Participants: ${meetingEvent?.participants.length}/${meetingEvent?.maxNumberOfParticipants}`}
          </EventMeta>
        </EventHeaderContent>
      </EventHeader>

      <Typography>{meetingEvent?.description}</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>

      <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      <EventControls>
        <EventButton 
          variant="contained" 
          color="primary"
          disabled={me?.id === meetingEvent?.authorId}
          endIcon={<SendIcon />}
          eventType={meetingEvent?.eventType as string}
          onClick={() => setIsModalOpen(true)}
        >
          send message
        </EventButton>
        <EventButton 
          variant="contained" 
          endIcon={<ThumbUpIcon />}
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
  );
}

export default MeetingEventView;
