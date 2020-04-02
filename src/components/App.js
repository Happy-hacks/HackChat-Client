import React from 'react';
import '../sass/App.scss';

// libraries
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Routes from './Routes';

const App = () => {
	return (
		<div className="app">
			<Router>
				<Navigation />
				<Routes />
			</Router>
		</div>
	);
};

export default App;
