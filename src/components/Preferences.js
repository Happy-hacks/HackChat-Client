import React, { useContext } from 'react';
import '../sass/Preferences.scss';

// context
import { AppContext } from './App';

const Preferences = () => (
	<div className="app__preferences">
		<h2>preferences</h2>
		<ThemeSelector />
	</div>
);

const ThemeSelector = () => {
	const { config } = useContext(AppContext);

	return (
		<div className="preferences__theme-selector">
			<h3>theme selector</h3>
			<button onClick={() => config.handleTheme().dark()}>dark</button>
			<button onClick={() => config.handleTheme().light()}>light</button>
			<button onClick={() => config.handleTheme().system()}>system</button>
		</div>
	);
};

export default Preferences;
