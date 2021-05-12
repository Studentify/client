import React, { useState } from "react";

import { ContentWrapper } from "styles/ContentWrapper";
import { EventList, EventMap } from './components';


const Home: React.FC = () => {
	return (
		<ContentWrapper>
			<h1>Current Events:</h1>
			<EventList />
			<EventMap />
		</ContentWrapper>
	);
};

export default Home;
