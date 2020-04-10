import React from 'react';
import '../sass/Icons.scss';

const MenuIcon = ({ onClick }) => (
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<g fill="none" stroke="black" strokeWidth="15">
			<line x1="20" y1="35" x2="80" y2="35" stroke="black" strokeLinecap="round" />
			<line x1="50" y1="75" x2="80" y2="75" stroke="black" strokeLinecap="round" />
		</g>
	</svg>
);

const BackIcon = ({ onClick }) => (
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<g fill="none" stroke="black" strokeWidth="15">
			<line x1="20" y1="50" x2="50" y2="20" stroke="black" strokeLinecap="round" />
			<line x1="50" y1="50" x2="80" y2="20" stroke="black" strokeLinecap="round" />
			<line x1="20" y1="50" x2="50" y2="80" stroke="black" strokeLinecap="round" />
			<line x1="50" y1="50" x2="80" y2="80" stroke="black" strokeLinecap="round" />
		</g>
	</svg>
);

const EmojiIcon = ({ onClick }) => (
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<circle cx="50" cy="50" fill="#616161" r="40" />
		<ellipse cx="35" cy="40" rx="10" ry="12" fill="#818181" />
		<ellipse cx="65" cy="40" rx="10" ry="12" fill="#818181" />
		<path d="M25,60 a1,1 0 0,0 50,0" fill="#818181" />
	</svg>
);

const ToolbarIcon = ({ onClick }) => (
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<circle cx="20" cy="50" fill="#616161" r="10" />
		<circle cx="50" cy="50" fill="#616161" r="10" />
		<circle cx="80" cy="50" fill="#616161" r="10" />
	</svg>
);

const PreferencesIcon = ({ onClick }) => (
	<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<circle cx="50" cy="50" stroke="#616161" strokeWidth="20" r="25" />
		<g transform="translate(37.5, 10) rotate(0)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(70, 12) rotate(45)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(90, 37.5) rotate(90)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(87.5, 70) rotate(135)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(62.5, 90) rotate(180)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(30, 87.5) rotate(225)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(10, 62.5) rotate(270)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
		<g transform="translate(12.5, 30) rotate(315)">
			<polygon points="5,0 0,10 25,10 20,0" fill="#616161" />
		</g>
	</svg>
);

const SendIcon = ({ onClick }) => (
	<svg width="500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<g stroke="black" strokeWidth="10">
			<line x1="20" y1="50" x2="50" y2="20" stroke="black" strokeLinecap="round" />
			<line x1="50" y1="20" x2="80" y2="50" stroke="black" strokeLinecap="round" />
			<line x1="50" y1="20" x2="50" y2="80" stroke="black" strokeLinecap="round" />
		</g>
	</svg>
);

export { MenuIcon, BackIcon, EmojiIcon, ToolbarIcon, PreferencesIcon, SendIcon };
