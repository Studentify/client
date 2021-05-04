import React from "react";

import { Switch, Route } from "react-router-dom";

import { Home, Login, Register } from "views";
// import { ProtectedRoute } from "components/ProtectedRoute";
import { GlobalStyles, Layout } from "./App.css";

const App = () => {
	return (
		<Layout>
			<GlobalStyles />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/" exact component={Home} />

				{/* <ProtectedRoute
					isAuthenticated={false}
					path="/"
					exact
					component={Home}
				/> */}
			</Switch>
		</Layout>
	);
};

export default App;
