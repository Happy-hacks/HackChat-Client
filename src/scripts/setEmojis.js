export default (message) => {
	const emojiCodes = Object.keys(emojis).map((target) => emojis[target].code);
	const regex = new RegExp(`(\\${emojiCodes.join('|\\')})`, 'g');

	return message.replace(regex, (str, match) => {
		return emojis[match].icon;
	});
};

const emojis = {
	// smileys
	':)': { code: ':\\)', icon: '🙂', name: 'smiley' },
	':D': { code: ':D', icon: '😃', name: '...' },
	xD: { code: 'xD', icon: '😆', name: '...' },
	':(': { code: ':\\(', icon: '🙁', name: '...' },
	';(': { code: ';\\(', icon: '😉', name: '...' },
	';I': { code: ';I', icon: '🤨', name: '...' },
	':I': { code: ':I', icon: '😐', name: '...' },
	':o': { code: ':o', icon: '😮', name: '...' },
	':O': { code: ':O', icon: '😱', name: '...' },
	':L': { code: ':L', icon: '🤔', name: '...' },
	':P': { code: ':P', icon: '😛', name: '...' },
	';P': { code: ';P', icon: '😜', name: '...' },
	xP: { code: 'xP', icon: '😝', name: '...' },
	'x=': { code: 'x\\=', icon: '🤮', name: '...' },

	// gestures
	'\\like': { code: '\\like', icon: '👍', name: '...' },
	'\\dislike': { code: '\\dislike', icon: '👎', name: '...' },
	'\\fuck': { code: '\\fuck', icon: '🖕', name: '...' },
	'\\rock': { code: '\\rock', icon: '🤘', name: '...' },

	// objects
	'\\ghost': { code: '\\ghost', icon: '👻', name: '...' },
	'\\alien': { code: '\\alien', icon: '👽', name: '...' },
	'\\shit': { code: '\\shit', icon: '💩', name: '...' },
	'\\snowman': { code: '\\snowman', icon: '☃️', name: '...' },

	// animal
	'\\quack': { code: '\\quack', icon: '🦆', name: '...' }
};

// resource:: https://getemoji.com/
