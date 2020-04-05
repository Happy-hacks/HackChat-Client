import React from 'react';
import '../sass/EmojiSelector.scss';

// scripts
import { emojis } from '../scripts/setEmojis';

// apply category separation
const EmojiSelector = ({ appendEmoji }) => {
	const emojiKeys = Object.keys(emojis);

	return (
		<div className="message__emoji-view">
			<div className="emoji-view__emoji-selector">
				{emojiKeys.map((key) => (
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
