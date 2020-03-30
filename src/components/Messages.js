import React, { useEffect, useRef } from 'react';

const Messages = ({ content, feedback, socket }) => {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	let previousHandle = '';
	const messages = content.map(({ handle, message, id }, index) => {
		const showHandle = !(handle === previousHandle);
		previousHandle = handle;

		if (socket.id === id) return <Forwarded key={index} message={message} />;
		else return <Received key={index} handle={showHandle ? handle : undefined} message={message} />;
	});

	useEffect(scrollToBottom, [messages]);

	return (
		<div className="chat-window">
			<div className="chat-window__output" ref={messagesEndRef}>
				{messages}
			</div>
			{feedback && <Feedback handle={feedback} />}
		</div>
	);
};

const Received = ({ handle, message }) => (
	<div className="output__message received-message">
		{handle && <label>{handle}</label>}
		{handle && <br />}

		<p>{message}</p>
	</div>
);

const Forwarded = ({ message }) => (
	<div className="output__message forwarded-message">
		<p>{message}</p>
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
