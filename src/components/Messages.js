import React from 'react';

const Messages = ({ content, feedback }) => {
	const messages = content.map(({ handle, message }, index) => (
		<Message key={index} handle={handle} message={message} />
	));

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			{feedback && <Feedback handle={feedback} />}
		</div>
	);
};

const Message = ({ handle, message }) => (
	<p>
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
