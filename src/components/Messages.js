import React, { useEffect, useRef } from 'react';
import '../sass/Messages.scss';

const Messages = ({ content, feedback, socket }) => {
	const messagesEndRef = useRef(null);

	let previousHandle = '';
	const messages = content.map(({ handle, message, id, error }, index) => {
		const showHandle = !(handle === previousHandle);
		previousHandle = handle;

		if (error)
			return <Received key={index} handle={showHandle ? handle : undefined} message={message} error={error} />;
		if (socket && socket.id === id) return <Forwarded key={index} message={message} />;
		else return <Received key={index} handle={showHandle ? handle : undefined} message={message} />;
	});

	useEffect(() => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [content]);

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			<div ref={messagesEndRef} />
			{feedback && <Feedback handle={feedback} />}
		</div>
	);
};

const Received = ({ handle, message, error }) => {
	const className = error ? 'output__message error-message' : 'output__message received-message';
	return (
		<div className={className}>
			{handle && <label>{handle}</label>}
			{handle && <br />}

			<pre>{message}</pre>
		</div>
	);
};

const Forwarded = ({ message }) => (
	<div className="output__message forwarded-message">
		<pre>{message}</pre>
	</div>
);

const Feedback = ({ handle }) => (
	<div className="chat-window__feedback">
		<p>
			<em> {handle} is typing a message... </em>
		</p>
	</div>
);

export default Messages;
