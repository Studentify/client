import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { StoreState } from "state/rootReducer";
import { Navigation } from "components";
import { Home, Landing, Login, Profile, Register } from "views";
import { PageContent, PageWrapper } from "styles/ContentWrapper";
import { GlobalStyles, Layout } from "./App.css";

const App = () => {
	const isAuthentificated = useSelector((state: StoreState) => state.auth.isAuthentificated);

	const userRoutes = [
		<Route path="/home" component={Home} key="Home" />,
		<Route path="/profile" component={Profile} key="Profile" />,
	];

	const unauthorizedRoutes = [
		<Route path="/" exact component={Landing} key="Landing" />,
		<Route path="/register" component={Register} key="Register" />,
		<Route path="/login" component={Login} key="Login" />,
	];

	return (
		<Layout>
			<GlobalStyles />
			<Switch>
				{isAuthentificated ? (
					<PageWrapper>
						<Navigation />
						<PageContent>{userRoutes}</PageContent>
						<Redirect strict exact from="/" to="/home" />
						<Redirect strict from="/login" to="/home" />
						<Redirect strict from="/register" to="/home" />
					</PageWrapper>
				) : (
					<div>{unauthorizedRoutes}</div>
				)}
			</Switch>
		</Layout>
	);
};

export default App;
