import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import {
	Edit as EditIcon,
	DeleteForever as DeleteForeverIcon,
	LocationOn as LocationOnIcon,
} from "@material-ui/icons";

import {
	List,
	EventContainer,
	EventMeta,
	EventContent,
	EventHeader,
	EventDate,
	EventShortInfo,
	EventController,
	BlockLink,
} from "./EventList-style";

import { stringifyEventAddress } from "utils/event";
import { EditEventForm } from "../";

interface EventListProps {
	userId: number;
	isAccountOwner: boolean;
}

const EventList: React.FC<EventListProps> = ({ userId, isAccountOwner }) => {
	const [events, setEvents] = useState<StudentifyEvent[]>([]);
	const [toEditEvent, setToEditEvent] = useState<StudentifyEvent | undefined>();
	const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

	useEffect(() => {
		fetchEvents(userId);
	}, [userId]);

	const sortedEvents = events.sort((a, b) => {
		const timeA = new Date(a.expiryDate).getTime();
		const timeB = new Date(b.expiryDate).getTime();

		return timeA - timeB;
	});

	async function fetchEvents(id: number) {
		try {
			const res = await axios.get<StudentifyEvent[]>("/StudentifyEvents");
			const usersEvents = res.data.filter((event) => event.authorId === id);
			setEvents(usersEvents);
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteEvent(e: React.MouseEvent<HTMLButtonElement>, id: number) {
		e.preventDefault();
		try {
			await axios.delete(`/StudentifyEvents/${id}`);
			fetchEvents(userId);
		} catch (err) {
			console.log(err);
		}
	}

	const editEvent = (editedEvent: StudentifyEvent) => {
		setEvents((prev) =>
			prev.map((current) => (current.id === editedEvent.id ? editedEvent : current))
		);
	};

	const openModal = (event: StudentifyEvent) => {
		setToEditEvent(event);
		setIsEditModalOpen(true);
	};

	const closeModal = () => {
		setIsEditModalOpen(false);
	};

	const eventItems = sortedEvents.map((event) => (
		<div key={event.id}>
			<EventContainer eventType={event.eventType}>
				<EventShortInfo>
					<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`}>
						<EventContent>
							<EventHeader>
								{event.name}
								<EventDate>{event.expiryDate.substring(0, 10)}</EventDate>
							</EventHeader>
							<EventMeta>
								<LocationOnIcon style={{ fontSize: "1rem", color: "gray" }} />
								{stringifyEventAddress(event)}
							</EventMeta>
							<p>{event.description}</p>
						</EventContent>
					</BlockLink>
				</EventShortInfo>
				{isAccountOwner ? (
					<EventController>
						<IconButton
							size="medium"
							style={{ color: "rgb(256, 156, 44)" }}
							onClick={() => openModal(event)}
						>
							<EditIcon />
						</IconButton>
						<IconButton
							size="medium"
							style={{ color: "red" }}
							onClick={(e) => deleteEvent(e, event.id)}
						>
							<DeleteForeverIcon />
						</IconButton>
					</EventController>
				) : null}
			</EventContainer>
		</div>
	));

	return (
		<>
			<List>{eventItems}</List>
			{toEditEvent ? (
				<Modal open={isEditModalOpen} onClose={closeModal}>
					<EditEventForm
						onEditEvent={editEvent}
						closeModal={closeModal}
						toEditEvent={toEditEvent}
					/>
				</Modal>
			) : null}
		</>
	);
};

export default EventList;
