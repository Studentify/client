import { Redirect, Route, RouteProps } from "react-router";

export type ProtectedRouteProps = {
	isAuthenticated: boolean;
} & RouteProps;

const ProtectedRoute = ({
	isAuthenticated,
	...routeProps
}: ProtectedRouteProps) => {
	return isAuthenticated ? (
		<Route {...routeProps} />
	) : (
		<Redirect to={"/login"} />
	);
};

export default ProtectedRoute;
