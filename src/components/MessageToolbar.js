import React from 'react';
import '../sass/MessageToolbar.scss';

// components
import Feedback from './Feedback';

const MessageToolbar = ({ feedback, setShowEmojis }) => {
	const expandToolbar = () => console.log('expand toolbar');

	return (
		<div className="channel__message-toolbar">
			<div className="message-toolbar__buttons">
				<input onClick={() => expandToolbar()} value="..." type="button" />
				<input onClick={() => setShowEmojis(true)} value=":)" type="button" />
			</div>
			<Feedback feedback={feedback} />
		</div>
	);
};

export default MessageToolbar;
