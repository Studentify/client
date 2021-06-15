import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";

import IconButton from "@material-ui/core/IconButton";
import {
	Info as InfoIcon,
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

interface EventListProps {
	userId: number;
	isAccountOwner: boolean;
}

const EventList: React.FC<EventListProps> = ({ userId, isAccountOwner }) => {
	const [events, setEvents] = useState<StudentifyEvent[]>([]);

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

	const eventItems = sortedEvents.map((event) => (
		<div key={event.id}>
			<EventContainer eventType={event.eventType}>
				<EventShortInfo>
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
				</EventShortInfo>
				<EventController>
					<BlockLink to={`/home/${event.eventType.toLowerCase()}/${event.id}`}>
						<IconButton style={{ color: "#4561bd", fontSize: 200 }}>
							<InfoIcon />
						</IconButton>
					</BlockLink>
					{isAccountOwner ? (
						<>
							<IconButton size="medium" style={{ color: "rgb(256, 156, 44)" }}>
								<EditIcon />
							</IconButton>
							<IconButton
								size="medium"
								style={{ color: "red" }}
								onClick={(e) => deleteEvent(e, event.id)}
							>
								<DeleteForeverIcon />
							</IconButton>
						</>
					) : null}
				</EventController>
			</EventContainer>
		</div>
	));

	return <List>{eventItems}</List>;
};

export default EventList;
