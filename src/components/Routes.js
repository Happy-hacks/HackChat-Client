import React from 'react';

// libraries
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Login from './Login';
import Channel from './Channel';
import Preferences from './Preferences';

const Routes = ({ authenticated }) => {
	const authenticate = (component) => {
		return authenticated ? component : <Redirect to="/login" />;
	};

	return (
		<Switch>
			<Route path="/login" children={<Login />} />
			<Route exact path="/" children={authenticate(<Channel />)} />
			<Route path="/preferences" children={authenticate(<Preferences />)} />
			<Route path="*" children={authenticate(<h2>error</h2>)} />
		</Switch>
	);
};

export default Routes;
