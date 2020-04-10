import React, { useState } from 'react';

// libraries
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// scripts
require('dotenv').config();

const LoginForm = ({ handleError }) => {
	const [cookies, setCookie] = useCookies(['handle', 'authenticated']);
	const [authenticated, setAuthenticated] = useState(false);
	const [password, setPassword] = useState('');
	const [handle, setHandle] = useState(cookies.handle || '');

	const setValues = (event) => {
		if (event.target.name === 'handle') setHandle(event.target.value);
		else if (event.target.name === 'password') setPassword(event.target.value);
	};

	const ERROR = {
		authentication: { error: 'Authentication Error', message: 'No access for this Username and Password' },
		input: { error: 'Input Error', message: 'Username and Password are required' },
		connection: { error: 'Connection Error', message: 'Cant connect to Servers' },
	};

	// needs refracturing
	const onSubmit = async (event) => {
		event.preventDefault();

		if (!handle || !password) handleError(ERROR.input);

		if (handle && !password) return event.target.form.password.focus();
		else if (!handle && password) return event.target.form.handle.focus();

		const options = (body) => ({
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		const response = await fetch(process.env.REACT_APP_SERVER_AUTH, options({ handle, password }));
		const json = await response.json();

		if (json.error) return handleError(ERROR.authentication);
		else {
			setCookie('handle', handle, { path: '/', maxAge: 2592000 }); // expires in 30 days
			setCookie('authenticated', true, { path: '/', maxAge: 1296000 }); // expires in 15 days
			setAuthenticated(true);
		}
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<form className="login__form">
			<input className="login__handle" placeholder="handle" name="handle" autoFocus onChange={(event) => setValues(event)} value={handle} />

			<input className="login__password" placeholder="password" type="password" name="password" onChange={(event) => setValues(event)} value={password} />

			<input className="login__submit" type="submit" value="➤" onClick={(event) => onSubmit(event)} />
		</form>
	);
};

export default LoginForm;
