import React from 'react';
import '../sass/MessageToolbar.scss';

// components
import Feedback from './Feedback';

const MessageToolbar = ({ feedback }) => {
	const expandToolbar = () => console.log('expand toolbar');
	const openEmojis = () => console.log('open emojis');
	const openMenu = () => console.log('open menu');

	return (
		<div className="channel__message-toolbar">
			<div className="message-toolbar__buttons">
				<input onClick={() => expandToolbar()} value="..." type="button" />
				<input onClick={() => openEmojis()} value=":)" type="button" />
				<input onClick={() => openMenu()} value="=" type="button" />
			</div>
			<Feedback feedback={feedback} />
		</div>
	);
};

export default MessageToolbar;
