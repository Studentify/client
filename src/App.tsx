import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { Navigation } from "components";
import { Home, Landing, Login, Messages, Profile, Register } from "views";
import { PageContent, PageWrapper } from "styles/ContentWrapper";
import { GlobalStyles, Layout } from "./App.css";

const App = () => {
	const auth = true;

	const userRoutes = [
		<Route path="/home" component={Home} key="Home" />,
		<Route path="/threads" exact component={Messages} key="Messages" />,
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
				{auth ? (
					<PageWrapper>
						<Navigation />
						<PageContent>{userRoutes}</PageContent>
						<Route strict exact path="/">
							<Redirect to="/home" />
						</Route>
					</PageWrapper>
				) : (
					<div>{unauthorizedRoutes}</div>
				)}
			</Switch>
		</Layout>
	);
};

export default App;
