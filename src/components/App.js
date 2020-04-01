import React, { useState } from 'react';
import '../sass/App.scss';

// libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Channel from './Channel';
import LoginForm from './Login';
import Menu from './Menu';

const App = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="app">
			<Navigation setShowMenu={setShowMenu} />
			{showMenu && <Menu setShowMenu={setShowMenu} />}
			<Router>
				<Switch>
					<Route exact path="/" children={<Channel />} />
					<Route path="/login" children={<LoginForm />} />
					<Route path="/channels" children={<h2>channels</h2>} />
					<Route path="/settings" children={<h2>settings</h2>} />
					<Route path="*" children={<h2>error</h2>} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
