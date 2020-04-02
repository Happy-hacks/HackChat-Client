import React from 'react';
import '../sass/EmojiSelector.scss';

// scripts
import { emojis } from '../scripts/setEmojis';

const EmojiSelector = ({ message, setMessage, setShowEmojis }) => {
	const appendEmoji = (emoji) => {
		setMessage(`${message}${emoji}`);
	};

	return (
		<div className="message__emoji-view">
			<button onClick={() => setShowEmojis(false)}>close</button>
			<div className="emoji-view__emoji-selector">
				{Object.keys(emojis).map((key) => (
					<div className="emoji-selector__emoji" key={key} onClick={() => appendEmoji(emojis[key].icon)}>
						<span className="emoji__icon">{emojis[key].icon}</span>
						<span className="emoji__code">{key}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default EmojiSelector;
