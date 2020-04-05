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
			<button onClick={() => context.config.showMenu()}>menu</button>
		</div>
	);
};

export default Navigation;
