import React, { useEffect } from 'react';

const Messages = ({ content, feedback }) => {
	const messages = content.map(({ handle, message }, index) => (
		<Message key={index} handle={handle} message={message} />
	));

	useEffect(() => {
		const feedbackLoop = setInterval(() => {
			if (new Date().getTime() - feedback.time > 3000) {
				console.log('reset feedback here...'); // RESET FEEDBACK HERE
				clearInterval(feedbackLoop);
			}
		});

		return () => {
			clearInterval(feedbackLoop);
		};
	});

	return (
		<div className="chat-window">
			<div className="chat-window__output">{messages}</div>
			{feedback && <Feedback data={feedback.handle} />}
		</div>
	);
};

const Message = ({ handle, message }) => (
	<p>
		<strong> {handle} :</strong>
		<span>{message}</span>
	</p>
);

const Feedback = ({ data }) => (
	<div className="chat-window__feedback">
		<p>
			<em> {data} is typing a message.. </em>
		</p>
	</div>
);

export default Messages;
