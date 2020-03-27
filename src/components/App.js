import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Channel from './Channel';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" children={<Channel />} />
				<Route path="/login" children={<h2>login</h2>} />
				<Route path="/channels" children={<h2>channels</h2>} />
				<Route path="/settings" children={<h2>settings</h2>} />
				<Route path="*" children={<h2>error</h2>} />
			</Switch>
		</Router>
	);
};

export default App;
