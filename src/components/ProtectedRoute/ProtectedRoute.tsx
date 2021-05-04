import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
	isAuthenticated: boolean;
} & RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, ...routeProps }) => {
	return isAuthenticated ? <Route {...routeProps} /> : <Redirect to={"/login"} />;
};

export default ProtectedRoute;
