import React, { useContext } from 'react';
import '../sass/Navigation.scss';

// libraries
import { useLocation } from 'react-router-dom';

//components
import Menu from './Menu';

// context
import { AppContext } from './App';

const Navigation = () => {
	const context = useContext(AppContext);

	if (useLocation().pathname === '/login') {
		return <div className="app__navigation" />;
	}

	const redirectBack = () => console.log('redirect back');

	if (context.config.menu) return <Menu />;

	return (
		<div className="app__navigation">
			<button onClick={() => redirectBack()}>back</button>
			<MenuBtn showMenu={() => context.config.showMenu()} />
		</div>
	);
};

const MenuBtn = ({ showMenu }) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 260 260"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		onClick={() => showMenu()}
	>
		<line x1="20" y1="85" x2="240" y2="85" stroke="#D7E0E9" strokeWidth="30" strokeLinecap="round" />
		<line x1="70" y1="185" x2="240" y2="185" stroke="#D7E0E9" strokeWidth="30" strokeLinecap="round" />
	</svg>
);

export default Navigation;
