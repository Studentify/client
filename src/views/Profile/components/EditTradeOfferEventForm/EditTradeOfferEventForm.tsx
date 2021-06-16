import React, { useState, useEffect } from "react";
import axios from "api/axiosInstance";
import { useFormikContext, Field, Formik } from "formik";
import * as yup from "yup";
import * as ol from "ol";
import * as proj from "ol/proj";

import { Map } from "components";
import {
	Form,
	Col,
	Row,
	FlexRow,
	AddressInformation,
	ErrorMessage,
	Controls,
} from "./EditTradeOfferEventForm-style";
import { Typography, Button, TextField, LinearProgress } from "@material-ui/core";
import LocationCityIcon from "@material-ui/icons/LocationCity";

import { getAddressFromLonLat } from "utils/map";

import { TradeOfferEventAttributes, EditTradeOfferEventFormProps, TradeOfferEvent } from "./types";

const TradeOfferEventSchema = yup.object().shape({
	name: yup
		.string()
		.required("Event name is required")
		.min(5, "Minimum 5 characters")
		.max(50, "Maximum 50 characters"),
	expiryDate: yup.date().required("Expiry date is required"),
	longitude: yup.number().required("Longitude is required").min(-180).max(180),
	latitude: yup.number().required("Latitude is required").min(-180).max(180),
	description: yup
		.string()
		.required("Description name is required")
		.min(20, "Minimum 20 characters"),
	price: yup.string().required("Price is required").min(5, "Minimum 5 characters"),
	offer: yup.string().required("Offer subject is required").min(5, "Minimum 5 characters"),
});

interface Address {
	country?: string;
	town?: string;
	postalCode?: string;
	street?: string;
	houseNumber?: string;
}

const TradeOfferAttributesEventForm: React.FC<{ goBack: () => void; currentAddress: Address }> = ({
	goBack,
	currentAddress,
}) => {
	const [placeName, setPlaceName] = useState(
		`${currentAddress.street || ""} ${currentAddress.houseNumber || ""}, ${currentAddress.town} ${
			currentAddress.postalCode
		}`
	);
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
	};

	return (
		<Form>
			<Col>
				<Typography variant="h5">Add information about Event:</Typography>
				<FlexRow>
					<Field
						required
						autoComplete="off"
						name="name"
						style={{ flex: 2 }}
						as={TextField}
						variant="outlined"
						label="Event title"
						helperText={<ErrorMessage name="name" />}
					/>
					<Field
						required
						autoComplete="off"
						name="expiryDate"
						style={{ flex: 1 }}
						as={TextField}
						type="date"
						variant="outlined"
						label="Expiry date"
						helperText={<ErrorMessage name="expiryDate" />}
					/>
				</FlexRow>
				<Field
					required
					autoComplete="off"
					name="description"
					as={TextField}
					multiline
					rows={5}
					variant="outlined"
					label="Description"
					helperText={<ErrorMessage name="description" />}
				/>
				<FlexRow>
					<Field
						required
						autoComplete="off"
						name="offer"
						fullWidth
						as={TextField}
						variant="outlined"
						label="What are you offering?"
						helperText={<ErrorMessage name="offer" />}
					/>
					<Field
						required
						autoComplete="off"
						name="price"
						fullWidth
						as={TextField}
						variant="outlined"
						label="What do you want to receive?"
						helperText={<ErrorMessage name="price" />}
					/>
				</FlexRow>
				<AddressInformation>
					<LocationCityIcon />
					{placeName || "(Choose point from map)"}
				</AddressInformation>
			</Col>
			<Col>
				<Typography variant="h5">Choose Event location:</Typography>
				<Map onClick={handleChooseLocation} />
			</Col>
			<Row>
				<Controls>
					<Button variant="contained" color="primary" onClick={goBack}>
						back
					</Button>
					<Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">
						Edit event
					</Button>
				</Controls>
			</Row>
		</Form>
	);
};

const EditTradeOfferEventForm: React.FC<EditTradeOfferEventFormProps> = ({
	onEditEvent,
	closeModal,
	goBack,
	toEditEvent,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [initialValues, setInitialValues] = useState<TradeOfferEventAttributes>({
		name: "",
		expiryDate: "",
		description: "",
		longitude: 0,
		latitude: 0,
		address: {},
		offer: "",
		price: "",
	});

	useEffect(() => {
		fetchInfoEvent(toEditEvent.id);

		async function fetchInfoEvent(eventId: number) {
			setIsLoading(true);
			try {
				const { data } = await axios.get<TradeOfferEvent>(`/TradeOffers/${eventId}`);

				setInitialValues({
					name: data.name,
					expiryDate: getFormatedExpiryDate(data.expiryDate),
					description: data.description,
					longitude: data.location.coordinates.longitude,
					latitude: data.location.coordinates.latitude,
					address: data.location.address,
					offer: data.offer,
					price: data.price,
				});

				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
	}, [toEditEvent]);

	function getFormatedExpiryDate(toFormatDate: string) {
		return toFormatDate.split("T")[0];
	}

	const handleSubmit = async (values: TradeOfferEventAttributes) => {
		await axios.patch<TradeOfferEvent>(`/TradeOffers/${toEditEvent.id}`, values);

		const res = await axios.get<TradeOfferEvent>(`/TradeOffers/${toEditEvent.id}`);
		onEditEvent(res.data);
		closeModal();
	};

	return (
		<>
			{isLoading ? (
				<LinearProgress />
			) : (
				<Formik
					initialValues={initialValues}
					validationSchema={TradeOfferEventSchema}
					onSubmit={handleSubmit}
				>
					<TradeOfferAttributesEventForm goBack={goBack} currentAddress={initialValues.address} />
				</Formik>
			)}
		</>
	);
};

export default EditTradeOfferEventForm;
