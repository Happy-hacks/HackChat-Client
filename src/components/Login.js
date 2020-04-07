import React, { useState, useEffect } from 'react';
import '../sass/Login.scss';

// components
import Messages from './Messages';
import Feedback from './Feedback';
import LoginForm from './LoginForm';

const Login = () => {
	const [feedback, setFeedback] = useState('');
	const [messageIndex, setMessageIndex] = useState(0);
	const [messages, setMessages] = useState([
		{ handle: 'HackChat', message: 'Welcome to HackChat...', id: 'HackChat' },
	]);

	const handleError = (error) => {
		setMessages((messages) => [...messages, error]);
	};

	const messageEffect = () => {
		const message = MESSAGES[messageIndex].message;
		const feedbackDelay = MESSAGES[messageIndex].feedbackDelay;
		const responseDelay = MESSAGES[messageIndex].responseDelay;

		// defining the intervals
		let feedbackInterval;
		let responseInterval;

		feedbackInterval = setTimeout(() => {
			// sending feedback
			setFeedback('HackChat');

			// sending message
			responseInterval = setTimeout(() => {
				setMessages((messages) => [...messages, { message, handle: 'HackChat', id: 'HackChat' }]);
				setFeedback('');
			}, responseDelay);

			// iterate to next message
			setMessageIndex(messageIndex === MESSAGES.length - 1 ? 0 : messageIndex + 1);
		}, feedbackDelay);

		return [feedbackInterval, responseInterval];
	};

	useEffect(() => {
		const [feedbackInterval, responseInterval] = messageEffect();

		// stopping the intervals
		return () => {
			clearInterval(feedbackInterval);
			clearInterval(responseInterval);
		};
	});

	return (
		<div className="login">
			<h2>HackChat</h2>
			<Messages content={messages} />
			<Feedback feedback={feedback} />
			<LoginForm handleError={handleError} />
		</div>
	);
};

const MESSAGES = [
	{
		message: `Type our credentials and access the features`,
		feedbackDelay: 15000,
		responseDelay: 3000,
	},
	{
		message: `You see those input felids?...
	Type your username and password instead of waiting😃`,
		feedbackDelay: 15000,
		responseDelay: 3000,
	},
	{
		message: `What can you share and yet keep at the same time?🤔`,
		feedbackDelay: 15000,
		responseDelay: 3000,
	},
	{
		message: `...A STD.😐`,
		feedbackDelay: 4000,
		responseDelay: 2000,
	},
];

export default Login;
