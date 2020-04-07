import React from 'react';

// libraries
import { useCookies } from 'react-cookie';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import Login from './Login';
import Channel from './Channel';
import Preferences from './Preferences';

const Routes = () => {
	const [cookies] = useCookies(['authenticated']);

	const authenticate = (component) => {
		if (cookies.authenticated === 'true') {
			return component;
		} else return <Redirect to="/login" />;
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
