import React, { useState } from "react";

import { SelectEventCategory, AddInfoEventForm } from "../";
import { Container } from './AddEventForm-style';

interface AddEventFormProps {
  onAddEvent(event: StudentifyEvent): void;
	closeModal(): void;
}


const AddEventForm = React.forwardRef<HTMLElement, AddEventFormProps>(({ onAddEvent, closeModal }) => {
	const [eventCategory, setEventCategory] = useState(-1);

	const goBack = () => {
		setEventCategory(-1);
	}

	return (
		<Container>
			{eventCategory !== -1
			? <AddInfoEventForm goBack={goBack} onAddEvent={onAddEvent} closeModal={closeModal}/>
			: <SelectEventCategory onSelectCategory={setEventCategory} closeModal={closeModal}/>}
		</Container>
	)
});

export default AddEventForm;
