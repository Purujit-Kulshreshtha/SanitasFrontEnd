import React, {useState} from 'react';

import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Join from '../components/Join'
import Footer from '../components/Footer'
import Tracker from '../components/Tracker'
import Game from '../components/Game'
import Instructions from '../components/Instructions'

//context import
import {UserContext} from "../context/userContext"
const HomePage = () => {


	const [user, setUser] = useState(localStorage.profile ? JSON.parse(localStorage.profile) : null);

	const JoinAndOrGame = () => {
		if (user) {
			return(
				<>
					<Game />
					<Instructions />
				</>
				)
		} else {
			return(
				<>
					<Join />
					<Game />
					<Instructions />
				</>
				)
		}
	}

	return(
		<>
			<UserContext.Provider value={{user, setUser}}>

				<Navbar />
				<Home />
				{user ? <Tracker /> : <About />}

				<JoinAndOrGame />	

				<Footer />	

			</UserContext.Provider>
		</>
		)
}

export default HomePage;