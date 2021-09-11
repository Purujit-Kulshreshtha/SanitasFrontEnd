import React from 'react';
import {tree, water, bush} from '../Game/images'
import {FaTimes} from 'react-icons/fa'

const Modal = ({message, setMessage}) => {

	console.log("aaa")

	let src;
	if (message === "tree") {
		src = tree
	} else if (message === "water-block") {
		src = water
	} else if (message === "grass-block") {
		src = bush
	}

	return(
		<>
			<div className="hero" onClick={() => setMessage(null)}>
				<div className="modal">

					<img src={src} alt={message} />
					<h1 className="modal-text">You have won a {message}! </h1>
					<FaTimes className="close-button"/>

				</div>
			</div>
		</>
		)
}

export default Modal