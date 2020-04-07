import React from 'react';
import '../sass/Preferences.scss';

// libraries
import { useCookies } from 'react-cookie';

const Preferences = () => (
	<div className="app__preferences">
		<h2>preferences</h2>
		<ThemeSelector />
	</div>
);

const ThemeSelector = () => {
	const [, setCookie] = useCookies(['theme']);

	const setTheme = {
		dark: () => setCookie('theme', 'dark', { path: '/', maxAge: 3600 }),
		light: () => setCookie('theme', 'light', { path: '/', maxAge: 3600 }),
		system: () => setCookie('theme', 'system', { path: '/', maxAge: 3600 }),
	};

	return (
		<div className="preferences__theme-selector">
			<h3>theme selector</h3>
			<button onClick={() => setTheme.dark()}>dark</button>
			<button onClick={() => setTheme.light()}>light</button>
			<button onClick={() => setTheme.system()}>system</button>
		</div>
	);
};

export default Preferences;
