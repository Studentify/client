import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

import { Typography, Button, TextField, Grid } from "@material-ui/core";
import Slider from '@material-ui/core/Slider';
import { Map } from 'components';
import { Wrapper, Form, Controls } from "./EventsFilterForm-style";
import * as yup from "yup";

const FiltersSchema = yup.object().shape({
	date: yup.date(),
  category: yup.number(),
});

interface EventAttributes {
	date: string;
  category: number;
}

const initialValues: EventAttributes = {
	date: new Date().toISOString().substring(0, 10),
  category: 0,
};


interface EventsFilterFormProps {
  closeModal(): void;
}

const EventsFilterForm = React.forwardRef<HTMLDivElement | null, EventsFilterFormProps>((props, ref) => {
  const marks = [
    { value: 0, label: '0km'},
    { value: 1, label: '1km'},
    { value: 2, label: '2km'},
    { value: 3, label: '3km'},
    { value: 4, label: '4km'},
    { value: 5, label: '5km'},
    { value: 6, label: '6km'},
    { value: 7, label: '7km'},
    { value: 8, label: '8km'},
    { value: 9, label: '9km'},
    { value: 10, label: '10km'},
  ]
  const handleSubmit = () => {

  }
  return (
    <Wrapper ref={ref}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FiltersSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Grid container spacing={3} style={{ flexGrow: 1 }}>
              <Grid item xs={6}>
                <Typography variant="h5">Choose filters</Typography>
                <Field
                  required
                  autoComplete="off"
                  name="city"
                  as={TextField}
                  type="text"
                  variant="outlined"
                  label="City"
                  helperText={<ErrorMessage name="city"/>}
                />
                <Field
                  required
                  autoComplete="off"
                  name="date"
                  as={TextField}
                  type="date"
                  variant="outlined"
                  label="Date"
                  helperText={<ErrorMessage name="date"/>}
                />
              </Grid>
              <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h5">Choose point</Typography>
                <Map onClick={e => console.log(e)}/>
                <Typography id="discrete-slider-custom">Pick search radius</Typography>
                <Slider
                  defaultValue={20}
                  getAriaValueText={(value: number) => `${value} km`}
                  aria-labelledby="discrete-slider-custom"
                  step={0.1}
                  min={0}
                  max={10}
                  valueLabelDisplay="auto"
                  marks={marks}
                />
              </Grid>
            </Grid>
            <Controls>
              <Button variant="contained" color="secondary">Cancel</Button>
              <Button variant="contained" color="primary">Apply</Button>
            </Controls>
          </Form>        
        )}
      </Formik>
    </Wrapper>
  )
});

export default EventsFilterForm;
