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
	<svg width="500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => onClick()} className="icon">
		<circle cx="50" cy="50" fill="#616161" r="40" />
		<ellipse cx="35" cy="40" rx="10" ry="12" fill="#818181" />
		<ellipse cx="65" cy="40" rx="10" ry="12" fill="#818181" />
		<path d="M25,60 a1,1 0 0,0 50,0" fill="#818181" />
	</svg>
);

export { MenuIcon, BackIcon, EmojiIcon };
