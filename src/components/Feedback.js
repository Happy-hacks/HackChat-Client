import React from 'react';
import '../sass/Feedback.scss';

const Feedback = ({ feedback }) => {
	if (feedback) return <span className="message-toolbar__feedback">{feedback} is typing a message...</span>;
	else return <span className="message-toolbar__feedback"></span>;
};

export default Feedback;
