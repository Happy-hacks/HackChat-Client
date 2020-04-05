import React, { useState, useContext } from 'react';

// libraries
import { Redirect } from 'react-router-dom';

// context
import { AppContext } from './App';

const LoginForm = ({ handleError }) => {
	const [handle, setHandle] = useState('');
	const [password, setPassword] = useState('');

	const context = useContext(AppContext);

	const setValues = (event) => {
		if (event.target.name === 'handle') setHandle(event.target.value);
		else if (event.target.name === 'password') setPassword(event.target.value);
	};

	const ERROR = {
		authentication: { error: 'Authentication Error', message: 'No access for this Username and Password' },
		input: { error: 'Input Error', message: 'Username and Password are required' },
		connection: { error: 'Connection Error', message: 'Cant connect to Servers' }
	};

	// needs refracturing
	const onSubmit = (event) => {
		event.preventDefault();

		if (handle && !password) event.target.form.password.focus();
		else if (!handle || !password) handleError(ERROR.input);
		else if (handle === 'error') handleError(ERROR.authentication);
		else context.auth.signIn(handle);
	};

	if (context.auth.authenticated) return <Redirect to="/" />;

	return (
		<form className="login__form">
			<input
				className="login__handle"
				placeholder="handle"
				name="handle"
				autoFocus
				onChange={(event) => setValues(event)}
			/>

			<input
				className="login__password"
				placeholder="password"
				type="password"
				name="password"
				onChange={(event) => setValues(event)}
				value={password}
			/>

			<input className="login__submit" type="submit" value="enter" onClick={(event) => onSubmit(event)} />
		</form>
	);
};

export default LoginForm;
