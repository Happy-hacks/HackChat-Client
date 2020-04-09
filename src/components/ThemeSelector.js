import React, { useState, useEffect } from 'react';
import '../sass/ThemeSelector.scss';

// libraries
import { useCookies } from 'react-cookie';

// components
import { ThemePreviewCustom, ThemePreviewSystem } from './ThemePreviews';

const ThemeSelector = () => {
	const [themes, setThemes] = useState(['light', 'dark', 'system']);

	const focusTheme = {
		dark: () => setThemes(['light', 'dark', 'system']),
		light: () => setThemes(['dark', 'light', 'system']),
		system: () => setThemes(['dark', 'system', 'light']),
	};

	const [cookies, setCookie] = useCookies(['theme']);

	useEffect(() => {
		focusTheme[cookies.theme]();
	}, [cookies.theme]);

	const setTheme = (theme) => {
		setCookie('theme', theme, { path: '/', maxAge: 3600 });
		focusTheme[theme]();
	};

	return (
		<div className="preferences__theme-selector">
			<label className="theme-selector__label">theme</label>

			<div className="theme-selector__theme-previews">
				{themes.map((theme, key) => {
					if (theme === 'system') {
						return <ThemePreviewSystem theme={theme} setTheme={() => setTheme(theme)} selected={theme === cookies.theme} key={key} />;
					} else {
						return <ThemePreviewCustom theme={theme} setTheme={() => setTheme(theme)} key={key} selected={theme === cookies.theme} />;
					}
				})}
			</div>
		</div>
	);
};

export default ThemeSelector;
