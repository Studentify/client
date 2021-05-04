import React from "react";

import { ContentWrapper } from "styles/ContentWrapper";
import { OrangeButton } from "styles/OrangeButton";
import { Link } from "styles/Link";

const Home: React.FC = () => {
	return (
		<ContentWrapper>
			<h1>Studentify</h1>
			<br />
			<br />
			<br />
			<OrangeButton component={Link} to="/register">
				<h3>Let's get started!</h3>
			</OrangeButton>
			<br />
			<br />
			<br />
			<h3>
				Already have an account? <Link to="/login">Login!</Link>
			</h3>
		</ContentWrapper>
	);
};

export default Home;
