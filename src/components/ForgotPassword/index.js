import React, {useState} from 'react';
import {Link as LinkR, useHistory} from 'react-router-dom'
import {forgotPasswordAPI} from '../../api'

const ForgotPassword = () => {

	const history = useHistory()

	const [email, setEmail] = useState();
	const [username, setUsername] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const [submitted, setSubmitted] = useState(false);

	const takeHome = () => {
		history.push('/')
	}

	const forgotPassword = async (e) => {
		e.preventDefault()

		if (!email || !email.includes('@')) {
			setErrorMessage("Please enter a valid email.")
		} else if (!username){
			setErrorMessage("Please enter a username.")
		} else {

			const formData = {email, username}

			const result = await forgotPasswordAPI(formData)
			setSubmitted(true)
		}
	}

	return(
		<>
			<div className="login-container">

				{submitted ? 
					<div className="login-modal shadow">
						<h1 className="login-heading">Thank You</h1>
						<p className="login-text">You will be contacted with steps to reset your password within 12 hours.</p>
						<button className="btn-primary" onClick={takeHome}>Back To Home</button>
					</div> : 

					<div className="login-modal shadow">

						<h1 className="login-heading">Forgot Password</h1>

							<form onSubmit={forgotPassword} className="form-container">

								<input type="text" className="login-input" placeholder="Email ID" onChange={(e) => {
									setEmail(e.target.value)
									setErrorMessage(null)}} />

								<input type="text" className="login-input" placeholder="Username" onChange={(e) => {
									setUsername(e.target.value)
									setErrorMessage(null)}} />

								{errorMessage ? <p className="error-message">{errorMessage}</p> : null}


								<button className="btn-primary" type="submit">Submit</button>

							</form>

						<LinkR to="/forgotpassword" className="login-link"></LinkR>

					</div>}

			</div>
		</>
		)
}

export default ForgotPassword