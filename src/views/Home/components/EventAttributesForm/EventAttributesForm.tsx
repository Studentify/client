import React, { useEffect, useState } from "react";
import { useFormikContext, Field } from "formik";
import * as ol from "ol";
import * as proj from "ol/proj";

import { Typography, Button, TextField } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Map } from "components";
import { Col, Row, Controls, ErrorMessage, AddressInformation } from "./EventAttributesForm-style";

import { getAddressFromLonLat } from "utils/map";

interface EventAttributesFormProps {
	category: number;
	back(): void;
}


// TODO Implement putting marker on map when user choose location
const EventAttributesForm: React.FC<EventAttributesFormProps> = ({ category, back }) => {
	const [placeName, setPlaceName] = useState("");
	const { dirty, isValid, setFieldValue } = useFormikContext<{expiryDate: string, name: string}>();

	useEffect(() => {
		setFieldValue("category", category)
	}, [setFieldValue, category])

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
		<>
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
					<Button variant="contained" color="primary" onClick={back}>back</Button>
					<Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">Add event</Button>
				</Controls>
			</Row>
		</>
    )
};

export default EventAttributesForm;