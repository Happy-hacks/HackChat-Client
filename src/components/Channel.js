import React, { useState, useEffect } from 'react';

import MessageForm from './MessageForm';
import Messages from './Messages';

import '../sass/App.scss';
import io from 'socket.io-client';

const socketHost = 'http://localhost:4000';
let socket = io(socketHost);

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

	return (
		<div className="app">
			<h2>Hack Chat</h2>
			<Messages content={messages} feedback={feedback} />
			<MessageForm socket={socket} />
		</div>
	);
};

export default Channel;
