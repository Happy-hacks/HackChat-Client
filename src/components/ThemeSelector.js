import React, { useState, useEffect } from 'react';
import '../sass/ThemeSelector.scss';

// libraries
import { useCookies } from 'react-cookie';

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
					if (theme === 'system')
						return <ThemePreviewSystem setTheme={setTheme} key={key} selected={theme === cookies.theme} />;
					else
						return (
							<ThemePreview
								theme={theme}
								setTheme={setTheme}
								key={key}
								selected={theme === cookies.theme}
							/>
						);
				})}
			</div>
		</div>
	);
};

const ThemePreview = ({ theme, setTheme, selected }) => {
	const setClass = () => {
		if (selected) return 'theme-previews__theme-preview-wrapper selected';
		else return 'theme-previews__theme-preview-wrapper';
	};

	return (
		<div className={setClass()} onClick={() => setTheme(theme)}>
			<label className="theme-previews__theme">{theme}</label>
			<div className={`theme-preview-wrapper__theme-preview ${theme}-theme`}>
				<div className="theme-preview__navigation">
					<span className="navigation__red" />
					<span className="navigation__yellow" />
					<span className="navigation__green" />
				</div>

				<div className="theme-preview__message message-1" />
				<div className="theme-preview__message message-2" />
				<div className="theme-preview__message message-3" />
				<div className="theme-preview__message message-4" />
				<div className="theme-preview__message message-5" />
			</div>
		</div>
	);
};

const ThemePreviewSystem = ({ setTheme, selected }) => {
	const setClass = () => {
		if (selected) return 'theme-previews__theme-preview-wrapper selected';
		else return 'theme-previews__theme-preview-wrapper';
	};

	return (
		<div className={setClass()} onClick={() => setTheme('system')}>
			<label className="theme-previews__theme">system</label>

			<div className="theme-preview-wrapper__theme-preview dark-theme">
				<div className="theme-preview__navigation">
					<span className="navigation__red" />
					<span className="navigation__yellow" />
					<span className="navigation__green" />
				</div>

				<div className="theme-preview__message message-1" />
				<div className="theme-preview__message message-2" />

				<div className="theme-preview-wrapper__theme-preview light-theme">
					<div className="theme-preview__navigation">
						<span className="navigation__red" />
						<span className="navigation__yellow" />
						<span className="navigation__green" />
					</div>

					<div className="theme-preview__message message-1" />
					<div className="theme-preview__message message-2" />
				</div>
			</div>
		</div>
	);
};

export default ThemeSelector;
