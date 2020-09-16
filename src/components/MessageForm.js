import React, { useState, useContext } from 'react';

// libraries
import { useCookies } from 'react-cookie';

// components
import EmojiSelector from './EmojiSelector';
import { SendIcon } from './Icons';

// context
import { AppContext } from './App';

// scripts
import setEmojis from '../scripts/setEmojis';

const MessageForm = ({ showEmojis }) => {
	const [message, setMessage] = useState('');
	const context = useContext(AppContext);
	const [cookies] = useCookies(['handle']);

	const onSubmit = (event) => {
		event.preventDefault();
		if (!message) return;

		const transformedMessage = setEmojis(message);
		context.socket.emit('chat', {
			message: transformedMessage,
			handle: cookies.handle,
			id: context.socket.id,
		});
		setMessage('');
	};

	const onTyping = (event) => {
		setMessage(setEmojis(message));
		const keyCode = window.event.keyCode;

		if (keyCode === 13 && event.shiftKey) setMessage(message);
		else if (keyCode === 13) return onSubmit(event);
		context.socket.emit('typing', cookies.handle);
	};

	const appendEmoji = (emoji) => {
		setMessage((message) => message + emoji);
	};

	return (
		<form className="chat-input">
			<div className="chat-input__message">
				<textarea
					className="chat-input__message"
					placeholder={`message... \nshift + enter for newline`}
					name="message"
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) => onTyping(event)}
					value={message}
					autoFocus
				/>
				<SendIcon className="chat-input__submit" onClick={(event) => onSubmit(event)} />
			</div>
			{showEmojis && <EmojiSelector appendEmoji={appendEmoji} />}
		</form>
	);
};

export default MessageForm;
