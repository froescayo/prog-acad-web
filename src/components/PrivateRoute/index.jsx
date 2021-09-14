import React, { useContext } from "react";
import { GlobalStateContext } from "../../store";
import { Redirect, Route } from "react-router-dom"

function PrivateRoute({ children, ...rest }) {
	const [state, dispatch] = useContext(GlobalStateContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				state.auth.user ? (
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