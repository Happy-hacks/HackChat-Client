import React from 'react';
import '../sass/app.scss';

function App() {
	return (
		<div className="app">
			<h2>Hack Chat</h2>
			<div className="chat-window">
				<div className="chat-window__output"></div>
				<div className="chat-window__feedback"></div>
			</div>

			<form className="chat-input">
				<input className="chat-input__handle" type="test" placeholder="Handle" />
				<input className="chat-input__message" type="text" placeholder="Message" />
				<input className="chat-input__submit" type="submit" value="send" />
			</form>
		</div>
	);
}

export default App;
