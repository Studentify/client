import React, { useState } from "react";
import axios from 'api/axiosInstance';
import { useFormikContext, Field, Formik } from "formik";
import * as yup from "yup";
import * as ol from "ol";
import * as proj from "ol/proj";

import { Map } from "components";
import { Form, Col, Row, AddressInformation, ErrorMessage, Controls } from "./AddMeetingEventForm-style";
import { Typography, Button, TextField } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";

import { getAddressFromLonLat } from "utils/map";

import { MeetingEventAttributes, AddMeetingEventFormProps } from './types'


const initialValues: MeetingEventAttributes = {
	name: "",
	expiryDate: new Date().toISOString().substring(0, 10),
	longitude: 19.916,
	latitude: 50.067,
  description: "",
  maxNumberOfParticipants: 0,
};

const MeetingEventSchema = yup.object().shape({
  name: yup.string()
    .required("Event name is required")
		.min(5, "Minimum 5 characters")
		.max(50, "Maximum 50 characters"),
	expiryDate: yup.date()
		.required("Expiry date is required"),
	longitude: yup.number()
    .required("Longitude is required")
		.min(-180)
		.max(180),
	latitude: yup.number()
    .required("Latitude is required")
		.min(-180)
		.max(180),
  description: yup.string()
    .required("Description name is required")
		.min(20, "Minimum 20 characters"),
  maxNumberOfParticipants: yup.number()
    .min(2, "At least 2 participants required")
});


const MeetingEventAttributesForm: React.FC<{ goBack: () => void }> = ({ goBack }) => {
  const [placeName, setPlaceName] = useState("");
  const { dirty, isValid, setFieldValue } = useFormikContext();

	const handleChooseLocation = async (e: ol.MapBrowserEvent) => {
		const [lon, lat] = proj.toLonLat(e.coordinate);
		const address = await getAddressFromLonLat({ lon, lat });

		if (address) {
			const { coords, city, street, houseNumber, postalCode } = address;

			setFieldValue("longitude", coords.lon);
			setFieldValue("latitude", coords.lat);
			setFieldValue("address", { town: city, street, houseNumber, postalCode });

			const place = `${street || ""} ${houseNumber || ""}, ${city} ${postalCode}`;
			setPlaceName(place);
		}
	}

  return (
    <Form>
      <Col>
        <Typography variant="h5">Add information about Event:</Typography>
        <Field
          required
          autoComplete="off"
          name="name"
          as={TextField}
          variant="outlined"
          label="Event title"
          helperText={<ErrorMessage name="name"/>}
        />
        <Field
          required
          autoComplete="off"
          name="description"
          as={TextField}
          multiline
          rows={5}
          variant="outlined"
          label="Description"
          helperText={<ErrorMessage name="description"/>}
        />
        <Field
          required
          autoComplete="off"
          name="maxNumberOfParticipants"
          type="number"
          as={TextField}
          variant="outlined"
          label="Number of participants"
          helperText={<ErrorMessage name="maxNumberOfParticipants"/>}
        />
        <Field
          required
          autoComplete="off"
          name="expiryDate"
          as={TextField}
          type="date"
          variant="outlined"
          label="Expiry date"
          helperText={<ErrorMessage name="expiryDate"/>}
        />
        <AddressInformation>
          <LocationCityIcon />
          {placeName || "(Choose point from map)"}
        </AddressInformation>
      </Col>
      <Col>
        <Typography variant="h5">Choose Event location:</Typography>
        <Map onClick={handleChooseLocation}/>
      </Col>
			<Row>
				<Controls>
					<Button variant="contained" color="primary" onClick={goBack}>back</Button>
					<Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">Add event</Button>
				</Controls>
			</Row>
    </Form>
  )
}


const AddMeetingEventForm: React.FC<AddMeetingEventFormProps> = ({ onAddEvent, closeModal, goBack }) => {
  const handleSubmit = async (values: MeetingEventAttributes) => {
    const res = await axios.post<StudentifyEvent>('/Meetings', values);
    onAddEvent(res.data);
    closeModal();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={MeetingEventSchema}
      onSubmit={handleSubmit}
    >
      <MeetingEventAttributesForm goBack={goBack}/>
    </Formik>
  )
}

export default AddMeetingEventForm;
