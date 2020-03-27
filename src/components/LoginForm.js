import React, { useState } from 'react';

// libraries
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
	const [handle, setHandle] = useState('');
	const [password, setPassword] = useState('');
	const [authenticated, setAuthenticated] = useState(false);

	const setValues = (event) => {
		if (event.target.name === 'handle') setHandle(event.target.value);
		else if (event.target.name === 'password') setPassword(event.target.value);
	};

	const onClick = (event) => {
		event.preventDefault();

		console.log('handle', handle, 'password', password);

		// validate username and password
		setAuthenticated(true);
	};

	if (authenticated) return <Redirect to={{ pathname: '/', state: { authenticated, handle } }} />;

	return (
		<form className="">
			<input className="" placeholder="handle" name="handle" required onChange={(event) => setValues(event)} />
			<input
				className=""
				placeholder="password"
				type="password"
				name="password"
				required
				onChange={(event) => setValues(event)}
				value={password}
			/>
			<input className="" type="submit" value="send" onClick={(event) => onClick(event)} />
		</form>
	);
};

export default LoginForm;
