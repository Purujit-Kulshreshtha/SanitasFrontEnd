import React from 'react';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import Medow from '../../images/Medow.png';

import "./join.css"

const Join = () => {

	return(
		<>
			<div id="join">

				<div className="join-container">

					<div className="join-images">
						<img src={Medow} className="join-image" alt=""/>
					</div>

					<div className="join-content">
						<h1 className="join-heading">Join Now!</h1>

						<p className="join-text">Join and use for free.</p>

						<div className="btn-container">

							<LinkR to="singup">
								<button className="btn-primary">Sign Up</button>
							</LinkR>

							<LinkS to="game"
							spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}><button className="btn-secondary">Demo The Game</button></LinkS>

						 </div>

						<p className="join-subtext">Already a member? <LinkR className="signin-link" to="signin">Sign In</LinkR></p>

					</div>

				</div>


			</div>
		</>
		)
}

export default Join;