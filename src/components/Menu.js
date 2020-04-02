import React, { useState } from 'react';
import '../sass/Menu.scss';

// libraries
import { Redirect, useLocation } from 'react-router-dom';

const Menu = ({ setShowMenu }) => {
	const [redirection, setRedirection] = useState('');

	const redirect = async (route) => {
		setRedirection(route);
	};

	// needs better authentication configuration
	if (redirection) {
		return <Redirect to={{ pathname: redirection, state: { authenticated: false } }} />;
	}

	return (
		<div className="navigation__menu">
			<button onClick={() => setShowMenu(false)}>Hide</button>
			<h2>Menu</h2>
			<button onClick={() => redirect('/preferences')}>Preferences</button>
			<button onClick={() => redirect('/login')}>Sign out</button>
		</div>
	);
};
export default Menu;
