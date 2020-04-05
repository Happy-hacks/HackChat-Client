import React, { useState, useEffect, useContext } from 'react';
import '../sass/Channel.scss';

// components
import MessageForm from './MessageForm';
import Messages from './Messages';
import MessageToolbar from './MessageToolbar';

// context
import { AppContext } from './App';

const Channel = () => {
	const [messages, setMessages] = useState([]);
	const [feedback, setFeedback] = useState('');
	const [showEmojis, setShowEmojis] = useState(false);

	const context = useContext(AppContext);

	useEffect(() => {
		context.socket.on('chat', (message) => setMessages((messages) => [...messages, message]));
		return () => context.socket.off('chat', console.log('stopping chat'));
	}, [context.socket]);

	useEffect(() => {
		context.socket.on('typing', (data) => {
			setFeedback(data);

			setTimeout(() => {
				setFeedback(undefined);
			}, 1000);
		});
	}, [context.socket]);

	const toggleEmojis = () => setShowEmojis((state) => !state);

	if (!context.socket) return <h2>loading...</h2>;

	return (
		<div className="channel">
			<h2>main channel</h2>
			<Messages content={messages} socketId={context.socket.id} />
			<MessageToolbar feedback={feedback} toggleEmojis={toggleEmojis} />
			<MessageForm showEmojis={showEmojis} />
		</div>
	);
};

export default Channel;
