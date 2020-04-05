import React from 'react';
import '../sass/MessageToolbar.scss';

// components
import Feedback from './Feedback';

const MessageToolbar = ({ feedback, toggleEmojis }) => {
	const expandToolbar = () => console.log('expand toolbar');

	return (
		<div className="channel__message-toolbar">
			<div className="message-toolbar__buttons">
				<input onClick={() => expandToolbar()} value="..." type="button" />
				<input onClick={() => toggleEmojis()} value=":)" type="button" />
			</div>
			<Feedback feedback={feedback} />
		</div>
	);
};

export default MessageToolbar;
