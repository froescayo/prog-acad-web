import React from "react";
import { Redirect, Route } from "react-router-dom"

function PrivateRoute({ children, ...rest }) {
	let auth = { authenticated: false };
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth.authenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;