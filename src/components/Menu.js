import React from 'react';
import '../sass/Menu.scss';

// libraries
import { Link } from 'react-router-dom';

// assets
//import test from '../assets/x.png';

const Menu = ({ setShowMenu }) => (
	<div className="navigation__menu">
		<div className="menu__navigation">
			<button onClick={() => setShowMenu(false)}>Hide</button>
		</div>

		<h2>menu</h2>
		<div className="menu__links">
			<Link to={{ pathname: '/', state: { authenticated: true } }} onClick={() => setShowMenu(false)}>
				<LinkLabel title="Chat" icon={undefined} />
			</Link>
			<Link to={'/preferences'} onClick={() => setShowMenu(false)}>
				<LinkLabel title="Preferences" icon={undefined} />
			</Link>
			<Link to={'/login'} onClick={() => setShowMenu(false)}>
				<LinkLabel title="Sign out" icon={undefined} />
			</Link>
		</div>
	</div>
);

const LinkLabel = ({ title, icon }) => (
	<div className="menu__link">
		<label>{title}</label>
		<img src={icon} alt={`${title} icon`} />
	</div>
);

export default Menu;
