import React from 'react';

// libraries
import { Switch, Route } from 'react-router-dom';

// components
import Login from './Login';
import Channel from './Channel';
import Preferences from './Preferences';

const Routes = () => (
	<Switch>
		<Route exact path="/" children={<Channel />} />
		<Route path="/login" children={<Login />} />
		<Route path="/preferences" children={<Preferences />} />
		<Route path="*" children={<h2>error</h2>} />
	</Switch>
);

export default Routes;
