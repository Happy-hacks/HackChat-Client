import React from 'react';

const setClass = (selected) => {
	return selected ? 'theme-preview-container theme-selected' : 'theme-preview-container';
};

const ThemePreviewCustom = ({ theme, setTheme, selected }) => {
	return (
		<div className={setClass(selected)} onClick={() => setTheme()}>
			<label className="theme-preview-label">{theme}</label>
			<svg viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-preview">
				{/* background */}
				<rect width="100%" height="100%" rx="20" fill="#17212C" className={`theme-preview-fill-${theme}`} />

				{/* navigation */}
				<g transform="translate(20, 15)">
					<circle cx="0" cy="0" fill="#FF5E5E" r="3" />
					<circle cx="10" cy="0" fill="#FFE03C" r="3" />
					<circle cx="20" cy="0" fill="#39FF35" r="3" />
				</g>

				{/* messages */}
				<rect x="25" y="50" width="100" height="30" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="100" width="30" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="140" width="60" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="180" width="80" height="30" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="230" width="40" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="270" width="70" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />

				{/* gradient */}
				<linearGradient id="gradient_fill" x1="0" y1="0" x2="1" y2="0">
					<stop stopColor="#00A3FF" />
					<stop offset="100%" stopColor="#0057FF" />
				</linearGradient>

				{/* glow filter */}
				<filter id="glow_filter" width="200%" height="200%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="2" />
					<feOffset dx="1" dy="1" />
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.8" />
					</feComponentTransfer>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</svg>
		</div>
	);
};

const ThemePreviewSystem = ({ theme, setTheme, selected }) => {
	return (
		<div className={setClass(selected)} onClick={() => setTheme()}>
			<label className="theme-preview-label">{theme}</label>
			<svg viewBox="0 0 200 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="theme-preview">
				{/* background */}
				<rect width="100%" height="100%" rx="20" fill="#17212C" className="theme-preview-fill-dark" />
				<rect y="150" width="100%" height="200" rx="20" fill="#fff" className="theme-preview-fill-light" />

				{/* navigation top */}
				<g transform="translate(20, 15)">
					<circle cx="0" cy="0" fill="#FF5E5E" r="3" />
					<circle cx="10" cy="0" fill="#FFE03C" r="3" />
					<circle cx="20" cy="0" fill="#39FF35" r="3" />
				</g>

				{/* navigation bottom */}
				<g transform="translate(20, 165)">
					<circle cx="0" cy="0" fill="#FF5E5E" r="3" />
					<circle cx="10" cy="0" fill="#FFE03C" r="3" />
					<circle cx="20" cy="0" fill="#39FF35" r="3" />
				</g>

				{/* messages */}
				<rect x="25" y="50" width="100" height="30" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="100" width="30" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="180" width="80" height="30" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="230" width="40" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />
				<rect x="25" y="270" width="70" height="20" rx="10" fill="url(#gradient_fill)" filter="url(#glow_filter)" />

				{/* gradient */}
				<linearGradient id="gradient_fill" x1="0" y1="0" x2="1" y2="0">
					<stop stopColor="#00A3FF" />
					<stop offset="100%" stopColor="#0057FF" />
				</linearGradient>

				{/* shadow filter */}
				<filter id="glow_filter" width="200%" height="200%">
					<feGaussianBlur in="SourceGraphic" stdDeviation="2" />
					<feOffset dx="1" dy="1" />
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.8" />
					</feComponentTransfer>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</svg>
		</div>
	);
};

export { ThemePreviewCustom, ThemePreviewSystem };
