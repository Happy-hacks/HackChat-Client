import React, { useState } from 'react';
import '../sass/App.scss';

// libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Menu from './Menu';
import Navigation from './Navigation';
import Login from './Login';
import Channel from './Channel';
import Preferences from './Preferences';

const App = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="app">
			<Router>
				{showMenu && <Menu setShowMenu={setShowMenu} />}
				<Navigation setShowMenu={setShowMenu} />
				<Switch>
					<Route exact path="/" children={<Channel />} />
					<Route path="/login" children={<Login />} />
					<Route path="/preferences" children={<Preferences />} />
					<Route path="*" children={<h2>error</h2>} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
