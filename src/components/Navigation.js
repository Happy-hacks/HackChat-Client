import React, { useState } from 'react';
import '../sass/Navigation.scss';

// libraries
import { useLocation } from 'react-router-dom';

//components
import Menu from './Menu';

const Navigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	if (useLocation().pathname === '/login') {
		return <div className="app__navigation" />;
	}

	const redirectBack = () => console.log('redirect back');

	if (showMenu) return <Menu setShowMenu={setShowMenu} />;

	return (
		<div className="app__navigation">
			<button onClick={() => redirectBack()}>back</button>
			<button onClick={() => setShowMenu(true)}>menu</button>
		</div>
	);
};

export default Navigation;
