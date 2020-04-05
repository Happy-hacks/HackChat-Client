import React, { useContext } from 'react';
import '../sass/Menu.scss';

// libraries
import { Link } from 'react-router-dom';

// context
import { AppContext } from './App';

const Menu = () => {
	const context = useContext(AppContext);

	return (
		<div className="navigation__menu">
			<div className="menu__navigation">
				<button onClick={() => context.config.hideMenu()}>Hide</button>
			</div>

			<h2>menu</h2>
			<div className="menu__links">
				<Link to={{ pathname: '/', state: { authenticated: true } }} onClick={() => context.config.hideMenu()}>
					<LinkLabel title="Chat" icon={undefined} />
				</Link>
				<Link to={'/preferences'} onClick={() => context.config.hideMenu()}>
					<LinkLabel title="Preferences" icon={undefined} />
				</Link>
				<Link to={'/login'} onClick={() => context.auth.signOut()}>
					<LinkLabel title="Sign out" icon={undefined} />
				</Link>
			</div>
		</div>
	);
};

const LinkLabel = ({ title, icon }) => (
	<div className="menu__link">
		<label>{title}</label>
		<img src={icon} alt={`${title} icon`} />
	</div>
);

export default Menu;
