import React from 'react';
import { Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = () => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <div>Loading .....</div>;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivetRoute;
