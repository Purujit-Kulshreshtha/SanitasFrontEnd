import React from 'react';
import "./about.css"

const About = () => {
	return(
		<>
			<div id="about">

				<h1 className="about-heading">About Sanitas</h1>

				<div className="about-container">

					<div className="about-card">
						<h1 className="card-heading">What is Sanitas?</h1>
						<p className="card-text">Sanitas is a platform intended to assist you in leading a healthy lifestyle by helping you keep track of your work-outs and playfuly motivating you to KEEP GOING.  </p>
					</div>

					<div className="about-card">
						<h1 className="card-heading">How it works?</h1>
						<p className="card-text">The tracking system lets you make entries for your calory consumption and work out. Where Sanitas thrives is in motivation. It instigates a simple reward system in the form of a game. Share progress with your friends and family for an extra dose of motivation in the form of competition.</p>
					</div>

					<div className="about-card">
						<h1 className="card-heading">How the game works?</h1>
						<p className="card-text">You start with an empty forest. As you meet your daily (or hourly) health goals, you're given more and more resources such as trees, rivers and more, in order to turn your forest into the medow of your dreams.</p>
					</div>
				</div>

			</div>
		</>
		)
}

export default About;