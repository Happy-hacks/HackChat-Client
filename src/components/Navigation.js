import React from 'react';
import '../sass/Navigation.scss';

// libraries
import { useLocation } from 'react-router-dom';

const Navigation = ({ setShowMenu }) => {
	const route = useLocation().pathname;

	if (route === '/login') {
		return <div className="app__navigation" />;
	}

	const redirectBack = () => console.log('redirect back');

	return (
		<div className="app__navigation">
			<button onClick={() => redirectBack()}>back</button>
			<button onClick={() => setShowMenu(true)}>menu</button>
		</div>
	);
};

export default Navigation;
