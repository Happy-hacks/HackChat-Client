import React, { useState } from 'react';

// libraries
import { useLocation } from 'react-router-dom';

const MessageForm = ({ socket }) => {
	const [message, setMessage] = useState('');
	const handle = useLocation().state.handle;

	const onClick = (event) => {
		event.preventDefault();
		socket.emit('chat', { message, handle, id: socket.id });
	};

	const onTyping = () => {
		socket.emit('typing', handle);
	};

	return (
		<form className="chat-input">
			<span className="chat-input__handle">{useLocation().state.handle}</span>
			<input
				className="chat-input__message"
				placeholder="Message"
				name="message"
				required
				onChange={(event) => setMessage(event.target.value)}
				onKeyPress={() => onTyping()}
				value={message}
			/>
			<input
				className="chat-input__submit"
				type="submit"
				value="send"
				onClick={(event) => {
					onClick(event);
					setMessage('');
				}}
			/>
		</form>
	);
};

export default MessageForm;
