import React, { useState, useEffect } from 'react';

import { FiltersContainer, EventTypes, EventTypeButton } from './EventFilters-style';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import { EventFiltersProps } from './types';


const EventFilters: React.FC<EventFiltersProps> = ({ onSetCity, onSetEventType }) => {
  const cities = ['Polska', 'Kraków', 'Warszawa', 'Wrocław', 'Gdańsk', 'Poznań'];
  const [city, setCity] = useState("Kraków");
  const [eventType, setEventType] = useState("ALL");

  useEffect(() => {
    onSetCity(city);
  }, [city, onSetCity])

  useEffect(() => {
    onSetEventType(eventType);
  }, [eventType, onSetEventType])

  return (
    <FiltersContainer>
      <Typography variant="h6">Current events</Typography>
      <EventTypes>
        {/* TODO: Refactor these buttons to hide some common props and styling logic */}
        <EventTypeButton 
          variant="contained" 
          _color={eventType === "ALL" ? "#535353" : "#a7a7a7"} 
          onClick={() => setEventType("ALL")}
        >
          all
        </EventTypeButton>
        <EventTypeButton 
          variant="contained" 
          _color={eventType === "INFO" ? "#3f51b5" : "#a7a7a7"}
          onClick={() => setEventType("INFO")}
        >
          info
        </EventTypeButton>
        <EventTypeButton 
          variant="contained" 
          _color={eventType === "MEETING" ? "#ebc634" : "#a7a7a7"}
          onClick={() => setEventType("MEETING")}
        >
          meeting
        </EventTypeButton>
        <EventTypeButton 
          variant="contained" 
          _color={eventType === "TRADEOFFER" ? "#3eb85f" : "#a7a7a7"}
          onClick={() => setEventType("TRADEOFFER")}
        >
          trade
        </EventTypeButton>
      </EventTypes>
      <FormControl>
        <InputLabel id="city">City</InputLabel>
        <Select
          style={{ width: '100px' }}
          labelId="city"
          value={city}
          onChange={e => setCity(e.target.value as string)}
        >
          {cities.map(city => (<MenuItem key={city} value={city}>{city}</MenuItem>))}
        </Select>
      </FormControl>
    </FiltersContainer>
  )
}

export default EventFilters;
