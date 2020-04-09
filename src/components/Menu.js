import React, { useContext } from 'react';
import '../sass/Menu.scss';

// libraries
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// components
import { MenuIcon } from './Icons';

// context
import { AppContext } from './App';

const Menu = () => {
	const context = useContext(AppContext);

	const [, , removeCookie] = useCookies(['authenticated']);

	const signOut = () => {
		removeCookie('authenticated');
	};

	return (
		<div className="navigation__menu">
			<div className="menu__navigation">
				<MenuIcon onClick={() => context.config.hideMenu()} />
			</div>

			<h2>menu</h2>
			<div className="menu__links">
				<Link to={{ pathname: '/', state: { authenticated: true } }} onClick={() => context.config.hideMenu()}>
					<LinkLabel title="Chat" icon={undefined} />
				</Link>
				<Link to={'/preferences'} onClick={() => context.config.hideMenu()}>
					<LinkLabel title="Preferences" icon={undefined} />
				</Link>
				<Link to={'/login'} onClick={() => signOut()}>
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
