import React, { useState, useEffect } from 'react';
import '../sass/Login.scss';

// libraries
import { Redirect } from 'react-router-dom';

// components
import Messages from './Messages';

const Login = () => {
	const [messages, setMessages] = useState([{ handle: 'HackChat', message: 'Welcome HackChat...', id: 'HackChat' }]);
	const [feedback, setFeedback] = useState('');

	const handleError = (error) => {
		setMessages((messages) => [...messages, error]);
	};

	// should be and separated function
	useEffect(() => {
		setTimeout(() => {
			setFeedback('HackChat');

			setTimeout(() => {
				const message = {
					handle: 'HackChat',
					message: 'Type our credentials to access the features',
					id: 'HackChat'
				};
				setMessages((messages) => [...messages, message]);
				setFeedback('');
			}, 2000);
		}, 3000);
	}, []);

	return (
		<div className="login">
			<h2>HackChat</h2>
			<Messages content={messages} feedback={feedback} />
			<LoginForm handleError={handleError} />
		</div>
	);
};

const LoginForm = ({ handleError }) => {
	const [handle, setHandle] = useState('');
	const [password, setPassword] = useState('');
	const [authenticated, setAuthenticated] = useState(false);

	const setValues = (event) => {
		if (event.target.name === 'handle') setHandle(event.target.value);
		else if (event.target.name === 'password') setPassword(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		// error objects should be inside a meta object
		// validate username and password
		if (handle === 'error') {
			const error = {
				error: 'Authentication Error',
				message: 'No access for this Username and Password'
			};

			handleError(error);
		} else if (!handle || !password) {
			const error = {
				error: 'Input Error',
				message: 'Username and Password are required'
			};

			handleError(error);
		} else setAuthenticated(true);
	};

	if (authenticated) return <Redirect to={{ pathname: '/', state: { authenticated, handle } }} />;

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

export default Login;
