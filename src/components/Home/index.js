import React, {useContext} from 'react';
import {Link as LinkS} from 'react-scroll';
import {UserContext} from "../../context/userContext";
import "./home.css"

import health1 from '../../images/home/1.svg';
import health2 from '../../images/home/2.svg';
import health3 from '../../images/home/3.svg';
import health4 from '../../images/home/4.svg';

const Content = () => {
	const {user, setUser} = useContext(UserContext)

	if (!user) {
		return(
				<>
					<h1 className="home-heading">
						Sanitas
					</h1>
					<h4 className="home-subheading">
						Your GAME to motivate your way into a healthier lifestyle. 
					</h4>
				</>
			)
	} else {
		return(
				<>
					<h1 className="home-heading">
						Sanitas
					</h1>
					<h4 className="home-subheading">
						Welcome back! Hope you're ready to work out.
					</h4>
				</>
			)
	}
}

const Home = () => {
	const {user, setUser} = useContext(UserContext)

	return(
		<>
			<div className="home-container" id="home">
				<div className="home-illustrations">
					<img src={health1} width="250px" className="health-image" alt=""/>
					<img src={health2} width="250px" className="health-image" alt=""/>
					<img src={health3} width="250px" className="health-image" alt=""/>
					<img src={health4} width="250px" className="health-image" alt=""/>
				</div>

				<div className="home-content">
				
					<Content />

					<LinkS to={user ? 'tracker' : 'join'}
				    spy={true}
				    smooth={true}
				    offset={-80}
				    duration={500}>
						<button className="btn-primary shadow">{user ? "Continue" : "Start Now"}</button>
					</LinkS>
				</div> 
			</div>
		</>
		)
}

export default Home;