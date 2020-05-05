import React, { useState, useEffect } from 'react';
import { Sunrise, Sunset } from 'react-feather';
import './theme.scss';

const lightTheme: any = {
	'--text': '#000',
	'--subtext': '#222',
	'--background': '#EEE',
	'--accent': '#00b0ff',
	'--link': '#004666',
	'--box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
};

const darkTheme: any = {
	'--text': '#FFF',
	'--subtext': '#DDD',
	'--background': '#111',
	'--accent': '#004666',
	'--link': '#00b0ff',
	'--box-shadow': '0 2px 2px 0 rgba(120, 120, 120, 0.14), 0 3px 1px -2px rgba(120, 120, 120, 0.12), 0 1px 5px 0 rgba(120, 120, 120, 0.2)',
};

const initTheme = (): string => {
	// First we check localstorage to see if they have already chosen a theme.
	const lsTheme = window.localStorage.getItem('theme');
	if (lsTheme !== null) {
		return lsTheme;
	}
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}
	// Either they have chosen dark as a theme or they haven't chosen a theme. So dark mode it is :)
	return 'dark';
};

const applyTheme = (t: string): void => {
	const newTheme = t === 'dark' ? darkTheme : lightTheme;
	window.localStorage.setItem('theme', t);
	Object.keys(newTheme).forEach((key: string) => {
		const value = newTheme[key];
		document.documentElement.style.setProperty(key, value);
	});
};

const ThemeControl = () => {
	const [theme, setTheme] = useState(initTheme);
	const [isDark, setIsDark] = useState(true);

	useEffect(() => {
		applyTheme(theme);
		setIsDark(theme === 'dark');
	}, [theme]);

	return (
		<button
			className={`theme-btn ${isDark ? ' dark' : ' light'}`}
			title={isDark ? 'enable light theme mode' : 'enable dark theme mode'}
			aria-label={isDark ? 'enable light theme mode' : 'enable dark theme mode'}
			onClick={() => setTheme(isDark ? 'light' : 'dark')}>
			{isDark ? <Sunrise className="theme-icon" /> : <Sunset className="theme-icon" />}
		</button>
	);
};

export default ThemeControl;
