import React from 'react';
import { SunspotLoader } from 'react-awesome-loaders';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		<SunspotLoader
			gradientColors={['#6366F1', '#E0E7FF']}
			shadowColor={'#3730A3'}
			desktopSize={'128px'}
			mobileSize={'100px'}
		/>;
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
