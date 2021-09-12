import React from 'react';
import {Link as LinkR, useHistory} from 'react-router-dom';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';
import {FaGithub, FaYoutube, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'

import "./footer.css"



const Footer = () => {
	const backToTop = () => {
	   	 scroll.scrollToTop();
	}	

	return(
		<>
			<div className="footer-container">
			<label className="back-to-top" onClick={backToTop}>Back To Top</label>
				<div className="footer-1">
					<div className="footer-card">
						<h1 className="footer-heading">Technologies Used</h1>
						<p className="footer-running"><a target="_blank" href="https://reactjs.org/">ReactJS</a></p>
						<p className="footer-running"><a target="_blank" href="https://reactrouter.com/">React Router</a></p>
						<p className="footer-running"><a target="_blank" href="https://www.npmjs.com/package/react-scroll">React Scroll</a></p>
						<p className="footer-running"><a target="_blank" href="https://www.w3schools.com/html/">HTML 5</a></p>
						<p className="footer-running"><a target="_blank" href="https://www.w3schools.com/css/">CSS 3</a></p>
						<p className="footer-running"><a target="_blank" href="https://www.mongodb.com/">MongoDB Atlas</a></p>
						<p className="footer-running"><a target="_blank" href="https://expressjs.com/">Express</a></p>
						<p className="footer-running"><a target="_blank" href="https://nodejs.org/en/">NodeJS</a></p>
						<p className="footer-running"><a target="_blank" href="https://jwt.io/">Json Web Token</a></p>
					</div>
					<div className="footer-card">
						<h1 className="footer-heading">Tools Used</h1>
						<p className="footer-running"><a target="_blank" href="https://undraw.co/">UnDraw</a></p>
						<p className="footer-running"><a target="_blank" href="https://react-icons.github.io/react-icons/">React-Icons</a></p>
						<p className="footer-running"><a target="_blank" href="https://fontawesome.com/">Font Awesome</a></p>
						<p className="footer-running"><a target="_blank" href="https://www.pixilart.com/draw">Pixart</a></p>
					</div>
				</div>

				<div className="footer-2">
					<label className="logo" onClick={backToTop}>Sanitas</label>

					<div className="social-icons">
						<a target="_blank" href="https://github.com/Purujit-Kulshreshtha"><FaGithub className="icon" /></a>
						<a target="_blank" href="https://www.linkedin.com/in/purujit-kulshreshtha-a149a11aa/"><FaLinkedin className="icon" /></a>
						<a target="_blank" href="https://www.youtube.com/channel/UCZJ8ejHCTVg20Qchx01UwAQ"><FaYoutube className="icon" /></a>
						<LinkR to="/twitter"><FaTwitterSquare className="icon" /></LinkR>
					</div>
				</div>
			</div>
		</>
		)
}

export default Footer;