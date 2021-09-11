import React, {useState} from 'react';
import {Link as LinkR, useHistory} from 'react-router-dom';
import {signupRequest} from '../../api';
import {initialBoardData as boardData} from '../Game/boardData'

import './signup.css'

const Signup = () => {

	const history = useHistory()

	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();

	const [errorMessage, setErrorMessage] = useState();

	const signup = async (e) => {

		e.preventDefault()

		if (!email.includes('@')) {
			setErrorMessage('Please enter a valid email.')
		} else if (password.length < 8){
			setErrorMessage('Password must be eight at least characters long.')
		} else if (password !== confirmPassword) {
			setErrorMessage('Passwords do not match')
		} else {
			setErrorMessage(null)
			const inventory = {
				tree: 3,
				water: 1,
				grass: 1
			}
			const formData = {username, email, password, boardData, inventory}

			const { data } = await signupRequest(formData)

			localStorage.setItem('profile', JSON.stringify({ ...data?.result }))

			history.push('/')
		}

	}

	return(
		<>
			<div className="signup-container">

					<div className="signup-modal shadow">

						<h1 className="signup-heading">Sign Up</h1>

						<form onSubmit={signup} className="form-container">

							<input type="text" className="signup-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />

							<input type="text" className="signup-input" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} />

							<input type="password" className="signup-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

							<input type="password" className="signup-input" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />

							{errorMessage ? <p className="error-message">{errorMessage}</p> : null}

							<button type="submit" className="btn-primary">Sign Up</button>

						</form>


						<p className="signup-text">Already have an account? <LinkR className="signup-link" to="/signin">Sign In.</LinkR></p>

					</div>

				</div>
		</>
		)
}

export default Signup;