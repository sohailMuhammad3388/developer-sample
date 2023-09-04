import React, { useState} from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const [userName, setUserName] = useState('');
	const [password, setpassword] = useState('');

	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login: userName,
			password: password,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input value={userName} type="text" id="name" />
			<label htmlFor="password">Password</label>
			<input value={password} type="password" id="password" />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;
