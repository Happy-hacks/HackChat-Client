import React from 'react';
import '../sass/Navigation.scss';

const Navigation = ({ setShowMenu }) => {
	const redirectBack = () => console.log('redirect back');

	return (
		<div className="app__navigation">
			<button onClick={() => redirectBack()}>back</button>
			<button onClick={() => setShowMenu(true)}>menu</button>
		</div>
	);
};

export default Navigation;
