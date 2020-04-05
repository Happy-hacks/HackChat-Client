import React, { useState, createContext } from 'react';
import '../sass/App.scss';

// libraries
import io from 'socket.io-client';
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navigation from './Navigation';
import Routes from './Routes';

// scripts
import env from '../scripts/environment';

const App = () => {
	const [authenticated, setAuthentication] = useState(false);
	const [handle, setHandle] = useState('');
	const [menu, setMenu] = useState(false);
	const [socket, setSocket] = useState(null);
	const [theme, setTheme] = useState({ palette: 'dark', name: 'user-dark' });

	const systemTheme = () => {
		if (window.matchMedia) {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return { palette: 'dark', name: 'system-dark' };
			} else return { palette: 'light', name: 'system-light' };
		} else return theme;
	};

	const handleTheme = () => ({
		dark: () => setTheme({ palette: 'dark', name: 'user-dark' }),
		light: () => setTheme({ palette: 'light', name: 'user-light' }),
		system: () => setTheme(systemTheme())
	});

	const signIn = (handle) => {
		setSocket(io(env.SOCKET_HOST));
		setHandle(handle);
		setAuthentication(true);
	};

	const signOut = () => {
		setSocket((socket) => socket.disconnect());
		setMenu(false);
		setHandle('');
		setAuthentication(false);
	};

	const showMenu = () => setMenu(true);
	const hideMenu = () => setMenu(false);

	const appContext = {
		auth: { authenticated, signIn, signOut, handle },
		config: { theme, handleTheme, menu, showMenu, hideMenu },
		socket
	};

	return (
		<AppContext.Provider value={appContext}>
			<div className={`app theme-${theme.palette}`}>
				<Router>
					<Navigation />
					<Routes authenticated={authenticated} />
				</Router>
			</div>
		</AppContext.Provider>
	);
};

// context
export const AppContext = createContext();
export default App;
