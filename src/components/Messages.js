import React from 'react';

const Messages = ({ content, feedback, socket }) => {
	let previousHandle = '';
	const messages = content.map(({ handle, message, id }, index) => {
		if (handle === previousHandle) handle = false;

		previousHandle = handle;
		if (socket.id === id) return <Forwarded key={index} message={message} />;
		else return <Received key={index} handle={handle} message={message} />;
	});

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			{feedback && <Feedback handle={feedback} />}
		</div>
	);
};

const Received = ({ handle, message }) => (
	<div className="output__message received-message">
		{handle && <label>{handle}</label>}
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
