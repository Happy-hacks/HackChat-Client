import React from 'react';
import '../sass/MessageToolbar.scss';

// components
import Feedback from './Feedback';
import { ToolbarIcon, EmojiIcon } from './Icons';

const MessageToolbar = ({ feedback, toggleEmojis }) => {
	const expandToolbar = () => console.log('expand toolbar');

	return (
		<div className="channel__message-toolbar">
			<div className="message-toolbar__buttons">
				<ToolbarIcon onClick={() => expandToolbar()} />
				<EmojiIcon onClick={() => toggleEmojis()} />
			</div>
			<Feedback feedback={feedback} />
		</div>
	);
};

export default MessageToolbar;
