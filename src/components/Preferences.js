import React from 'react';
import '../sass/Preferences.scss';

// components
import ThemeSelector from './ThemeSelector';

const Preferences = () => (
	<div className="app__preferences">
		<h2>preferences</h2>
		<ThemeSelector />
	</div>
);

export default Preferences;
