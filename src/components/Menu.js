import React from 'react';
import '../sass/Menu.scss';

const Menu = ({ setShowMenu }) => {
	const openPreferences = console.log('Preferences is pressed');
	const signOut = console.log('You logged out');

	return (
		<div className="navigation__menu">
			<button onClick={() => setShowMenu(false)}>Hide</button>
			<span>Preferences</span>
			<span>Sign out</span>
		</div>
	);
};
export default Menu;
