import React, { useEffect, useRef } from 'react';
import '../sass/Messages.scss';

const Messages = ({ content, socketId }) => {
	const messagesEndRef = useRef(null);

	let previousHandle = '';

	const messages = content.map(({ handle, message, id, error }, index) => {
		const showLabel = !(handle === previousHandle || error === previousHandle);
		previousHandle = error || handle;

		if (error) return <Error key={index} message={message} error={showLabel ? error : undefined} />;
		if (socketId === id) return <Forwarded key={index} message={message} />;
		else return <Received key={index} handle={showLabel ? handle : undefined} message={message} />;
	});

	useEffect(() => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [content]);

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			<div ref={messagesEndRef} />
		</div>
	);
};

const Received = ({ handle, message }) => (
	<div className="output__message received-message">
		{handle && <h2>{handle}</h2>}
		<pre>{message}</pre>
	</div>
);

const Forwarded = ({ message }) => (
	<div className="output__message forwarded-message">
		<pre>{message}</pre>
	</div>
);

const Error = ({ error, message }) => (
	<div className="output__message error-message">
		{error && <h2>{error}</h2>}
		<pre>{message}</pre>
	</div>
);

export default Messages;
