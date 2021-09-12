import React, {useState} from 'react';
import {Link as LinkR, useHistory} from 'react-router-dom';
import {signinRequest} from '../../api';

import './login.css'

const Login = () => {

	const history = useHistory()

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [errorMessage, setErrorMessage] = useState();

	const login = async (e) => {
		e.preventDefault()

		const formData = { email, password}

		try {
			const { data } = await signinRequest(formData)
			localStorage.setItem('profile', JSON.stringify({ ...data?.result }))
			setErrorMessage(null)

			history.push('/')

		} catch (error) {
			setErrorMessage("Invalid Credentials.")
		}

	}

	return(
		<>
			<div className="login-container">

				<div className="login-modal shadow">

					<h1 className="login-heading">Login</h1>


						<form onSubmit={login} className="form-container">

							<input type="text" className="login-input" placeholder="Email ID" onChange={(e) => {
								setEmail(e.target.value)
								setErrorMessage(null)}} />

							<input type="password" className="login-input" placeholder="Password" onChange={(e) => {
								setPassword(e.target.value)
								setErrorMessage(null)}} />

							{errorMessage ? <p className="error-message">{errorMessage}</p> : null}

							<button className="btn-primary" type="submit">Sign In</button>

						</form>


					<p className="login-text">Don't have an account? <LinkR className="login-link" to="/signup">Sign Up.</LinkR></p>
					<LinkR to="/forgotpassword" className="login-link">Forgot Password?</LinkR>

				</div>

			</div>
		</>
		)
}

export default Login;