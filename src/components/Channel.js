import React, { useState, useEffect } from 'react';

// libraries
import { Redirect, useLocation } from 'react-router-dom';
import io from 'socket.io-client';

// components
import MessageForm from './MessageForm';
import Messages from './Messages';

// should be used as hook, so it want try to connect before this component
import env from '../scripts/environment';
const socket = io(env.SOCKET_HOST);

const Channel = () => {
	const [messages, setMessages] = useState([]);
	const [feedback, setFeedback] = useState('');

	useEffect(() => {
		socket.on('chat', (message) => setMessages((messages) => [...messages, message]));
	}, []);

	useEffect(() => {
		socket.on('typing', (data) => {
			setFeedback(data);

			setTimeout(() => {
				setFeedback(undefined);
			}, 1000);
		});
	}, []);

	try {
		if (!useLocation().state.authenticated) return <Redirect to="/login" />;
	} catch {
		return <Redirect to="/login" />;
	}

	return (
		<div className="channel">
			<h2>main channel</h2>
			<Messages content={messages} feedback={feedback} socket={socket} />
			<MessageForm socket={socket} />
		</div>
	);
};

export default Channel;
