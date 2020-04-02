import React, { useState } from 'react';

// libraries
import { useLocation } from 'react-router-dom';

// components
import EmojiSelector from './EmojiSelector';

// scripts
import setEmojis from '../scripts/setEmojis';

const MessageForm = ({ socket, showEmojis, setShowEmojis }) => {
	const [message, setMessage] = useState('');
	const handle = useLocation().state.handle;

	const onSubmit = (event) => {
		event.preventDefault();
		const transformedMessage = setEmojis(message);
		if (message) socket.emit('chat', { message: transformedMessage, handle, id: socket.id });
		setMessage('');
	};

	const onTyping = (event) => {
		setMessage(setEmojis(message));
		const keyCode = window.event.keyCode;

		if (keyCode === 13 && event.shiftKey) setMessage(message);
		else if (keyCode === 13) return onSubmit(event);
		socket.emit('typing', handle);
	};

	return (
		<form className="chat-input">
			<div className="chat-input__message">
				<textarea
					className="chat-input__message"
					placeholder="message... shift + enter for newline"
					name="message"
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) => onTyping(event)}
					value={message}
					autoFocus
				/>
				{showEmojis && (
					<EmojiSelector message={message} setMessage={setMessage} setShowEmojis={setShowEmojis} />
				)}
			</div>
			<input className="chat-input__submit" type="submit" value="send" onClick={(event) => onSubmit(event)} />
		</form>
	);
};

export default MessageForm;
