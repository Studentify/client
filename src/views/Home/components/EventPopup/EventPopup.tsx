import React from 'react'
import { Event } from '../../Home';

import { Container, SeeMoreButton, Link } from './EventPopup-style';
import Typography from "@material-ui/core/Typography";


const EventPopup = React.forwardRef<HTMLDivElement | null, { event?: Event}>((props, ref) => {
  const { event } = props;

  return (
    <Container ref={ref} elevation={5}>
      <Typography variant="h6" style={{ fontSize: '1rem' }}>{props.event?.name}</Typography>
      <Typography style={{ fontSize: '0.8rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, iste!</Typography>
      <Link to={`/home/${event?.eventType.toLocaleLowerCase()}/${event?.id}`}>
        <SeeMoreButton color="primary" size="small" variant="contained">See more</SeeMoreButton>
      </Link>
    </Container>
  )
});

export default EventPopup;
