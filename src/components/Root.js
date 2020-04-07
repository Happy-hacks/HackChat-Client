import React from 'react';

// libraries
import { CookiesProvider } from 'react-cookie';

// components
import App from './App';

const Root = () => (
	<CookiesProvider>
		<App />
	</CookiesProvider>
);

export default Root;
