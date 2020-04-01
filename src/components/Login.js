import React, { useState, useEffect } from 'react';
import '../sass/Login.scss';

// components
import Messages from './Messages';
import Feedback from './Feedback';
import LoginForm from './LoginForm';

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
			<Messages content={messages} />
			<Feedback feedback={feedback} />
			<LoginForm handleError={handleError} />
		</div>
	);
};

export default Login;
