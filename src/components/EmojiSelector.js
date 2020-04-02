import React from 'react';

// scripts
import { emojis } from '../scripts/setEmojis';

const EmojiSelector = ({ message, setMessage, setShowEmojis }) => {
	const appendEmoji = (emoji) => {
		setMessage(`${message}${emoji}`);
	};

	return (
		<div>
			<button onClick={() => setShowEmojis(false)}>close</button>
			<div>
				{Object.keys(emojis).map((key) => (
					<span key={key} onClick={() => appendEmoji(emojis[key].icon)}>
						<span>{emojis[key].icon}</span>
						<span>{key}</span>
					</span>
				))}
			</div>
		</div>
	);
};

export default EmojiSelector;
