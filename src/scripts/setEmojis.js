export default (message) => {
	const emojiCodes = Object.keys(emojis).map((target) => emojis[target].code);
	const regex = new RegExp(`(\\${emojiCodes.join('|\\')})`, 'g');

	return message.replace(regex, (str, match) => {
		return emojis[match].icon;
	});
};

const emojis = {
	// smileys
	':)': { code: ':\\)', icon: '🙂', category: 'smiley' },
	':D': { code: ':D', icon: '😃', category: 'smiley' },
	xD: { code: 'xD', icon: '😆', category: 'smiley' },
	':(': { code: ':\\(', icon: '🙁', category: 'smiley' },
	';(': { code: ';\\(', icon: '😉', category: 'smiley' },
	';I': { code: ';I', icon: '🤨', category: 'smiley' },
	':I': { code: ':I', icon: '😐', category: 'smiley' },
	':o': { code: ':o', icon: '😮', category: 'smiley' },
	':O': { code: ':O', icon: '😱', category: 'smiley' },
	':L': { code: ':L', icon: '🤔', category: 'smiley' },
	':P': { code: ':P', icon: '😛', category: 'smiley' },
	';P': { code: ';P', icon: '😜', category: 'smiley' },
	xP: { code: 'xP', icon: '😝', category: 'smiley' },
	'x=': { code: 'x\\=', icon: '🤮', category: 'smiley' },

	// gestures
	'\\like': { code: '\\like', icon: '👍', category: 'gestures' },
	'\\dislike': { code: '\\dislike', icon: '👎', category: 'gestures' },
	'\\fuck': { code: '\\fuck', icon: '🖕', category: 'gestures' },
	'\\rock': { code: '\\rock', icon: '🤘', category: 'gestures' },

	// objects
	'\\ghost': { code: '\\ghost', icon: '👻', category: 'objects' },
	'\\alien': { code: '\\alien', icon: '👽', category: 'objects' },
	'\\shit': { code: '\\shit', icon: '💩', category: 'objects' },
	'\\snowman': { code: '\\snowman', icon: '☃️', category: 'objects' },
	'\\quack': { code: '\\quack', icon: '🦆', category: '...' }
};

// resource:: https://getemoji.com/

export { emojis };
