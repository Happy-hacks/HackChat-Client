import React, { useState, useEffect, createContext } from 'react';
import '../sass/App.scss';

// libraries
import io from 'socket.io-client';
import { useCookies } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Routes from './Routes';

// scripts
import env from '../scripts/environment';

const App = () => {
	const [menu, setMenu] = useState(false);
	const [socket, setSocket] = useState(null);
	const [cookies, setCookie] = useCookies(['handle', 'authenticated', 'io', 'theme']);

	const initializeSocket = () => {
		setSocket(
			io(env.SOCKET_HOST, {
				query: { handle: cookies.handle },
			})
		);
	};

	useEffect(() => {
		if (cookies.authenticated) setCookie('io', socket.id, { path: '/', maxAge: 3600 });
	}, [socket]);

	const initializeApplication = () => {
		setSocket((socket) => socket.disconnect() && null);
		setMenu(false);
	};

	if (cookies.authenticated === 'true' && !socket) {
		initializeSocket();
	} else if (cookies.authenticated === 'false' && socket) {
		initializeApplication();
	}

	const showMenu = () => setMenu(true);
	const hideMenu = () => setMenu(false);

	const appContext = {
		config: { menu, showMenu, hideMenu },
		socket,
	};

	// <THEME SECTION>
	const getTheme = () => {
		if (cookies.theme === 'system') return setSystemTheme();
		else return cookies.theme || setDefaultTheme();
	};

	const setSystemTheme = () => {
		if (window.matchMedia) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return 'dark';
			} else return 'light';
		}
	};

	const setDefaultTheme = () => {
		setCookie('theme', 'dark', { path: '/', maxAge: 2592000 }); // expires in 30 days
		return 'dark';
	};
	// </ THEME SECTION>

	return (
		<AppContext.Provider value={appContext}>
			<div className={`app theme-${getTheme()}`}>
				<Router>
					<Navigation />
					<Routes />
				</Router>
			</div>
		</AppContext.Provider>
	);
};

// context
export const AppContext = createContext();
export default App;
