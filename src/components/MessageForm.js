import React, { useState } from 'react';

const MessageForm = ({ socket }) => {
	const [handle, setHandle] = useState('');
	const [message, setMessage] = useState('');

	const setValues = (event) => {
		if (event.target.name === 'handle') setHandle(event.target.value);
		else if (event.target.name === 'message') setMessage(event.target.value);
	};

	const onClick = (event, handle, message) => {
		event.preventDefault();
		socket.emit('chat', { message, handle, id: socket.id });
	};

	const onTyping = () => {
		socket.emit('typing', handle);
	};

	return (
		<form className="chat-input">
			<input
				className="chat-input__handle"
				placeholder="Handle"
				name="handle"
				onChange={(event) => setValues(event)}
			/>
			<input
				className="chat-input__message"
				placeholder="Message"
				name="message"
				onChange={(event) => setValues(event)}
				onKeyPress={() => onTyping()}
				value={message}
			/>
			<input
				className="chat-input__submit"
				type="submit"
				value="send"
				onClick={(event) => {
					onClick(event, handle, message);
					setMessage('');
				}}
			/>
		</form>
	);
};

export default MessageForm;
