import React, { useState } from "react";
import axios from "api/axiosInstance";
import { Formik } from "formik";
import * as yup from "yup";

import { Event } from "../../Home";
import { SelectEventCategory, EventAttributesForm } from "../";
import { Form } from "./AddEventForm-style";

interface EventAttributes {
	name: string;
	expiryDate: string;
	longitude: number;
	latitude: number;
  description: string
  category: number;
}

const initialValues: EventAttributes = {
	name: "",
	expiryDate: new Date().toISOString().substring(0, 10),
	longitude: 19.916,
	latitude: 50.067,
  description: "",
  category: 0,
};

const EventSchema = yup.object().shape({
  name: yup.string()
		.min(5, "Minimum 5 characters")
		.max(50, "Maximum 50 characters")
		.required("Event name is required"),
	expiryDate: yup.date()
		.required("Expiry date is required"),
	longitude: yup.number()
		.min(-180)
		.max(180)
		.required("Longitude is required"),
	latitude: yup.number()
		.min(-180)
		.max(180)
		.required("Latitude is required"),
  description: yup.string()
		.min(20, "Minimum 20 characters")
		.required("Description name is required"),
  category: yup.number(),
});

interface AddEventFormProps {
  onAddEvent(event: Event): void;
	closeModal(): void;
}


const AddEventForm = React.forwardRef<HTMLElement, AddEventFormProps>(({ onAddEvent, closeModal }) => {
	const [eventCategory, setEventCategory] = useState(-1);

	const handleSubmit = async (eventAttributes: EventAttributes): Promise<void> => {
    try {
      const res = await axios.post<Event>("/Info", eventAttributes);
      onAddEvent(res.data);
			closeModal();
    } catch(err) {
      console.log(err);
    }
	};

	const back = () => {
		setEventCategory(-1);
	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={EventSchema}
		>
			<Form>
				{eventCategory !== -1
				? <EventAttributesForm category={eventCategory} back={back}/>
				: <SelectEventCategory onSelectCategory={setEventCategory} closeModal={closeModal}/>}
			</Form>
		</Formik>
	)
});

export default AddEventForm;
