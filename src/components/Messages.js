import React from 'react';

const Messages = ({ content, feedback, socket }) => {
	const messages = content.map(({ handle, message, id }, index) => {
		const className = socket.id === id ? 'user' : 'friend';
		return <Message key={index} handle={handle} message={message} className={className} />;
	});

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			{feedback && <Feedback handle={feedback} />}
		</div>
	);
};

const Message = ({ handle, message, className }) => (
	<p className={className}>
		<strong> {handle} :</strong>
		<span>{message}</span>
	</p>
);

const Feedback = ({ handle }) => (
	<div className="chat-window__feedback">
		<p>
			<em> {handle} is typing a message.. </em>
		</p>
	</div>
);

export default Messages;
