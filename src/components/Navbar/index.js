import React, {useState, useEffect, useContext} from 'react';
import {Link as LinkR, useHistory} from 'react-router-dom';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';
import {FaBars} from 'react-icons/fa'

import {UserContext} from "../../context/userContext"
import "./navbar.css"

const Navbar = () => {

	const history = useHistory()
	const {user, setUser} = useContext(UserContext)

	const [sidebar, setSidear] = useState(false)
	const [transparent, setTransparent] = useState(true)

	const toggleSidebar = () => {
		setSidear(!sidebar)
	}

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setTransparent(false)
		} else {
			setTransparent(true)
		}
	}

	const backToTop = () => {
	   	 scroll.scrollToTop();
	}	

	const logOut = () => {
		localStorage.clear()
		setUser(null)
		history.push('/')
	}


	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])

	if (!user) {
		return(
			<>
				<nav className={transparent ? "transparent" : "shadow"}>
				{/*<nav>*/}

					<label className={transparent ? "logo-transparent" : "logo"} onClick={backToTop}>Sanitas</label>

					<ul type="none">

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="home"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>Home</li>
						</LinkS>

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="about"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>About</li>
						</LinkS>

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="join"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>Join</li>
						</LinkS>

					</ul>

					<div className="nav-btn-container">
							<LinkR to="/signup"><button className="btn-primary shadow">Sign Up </button></LinkR>
							<LinkR to="/signin"><button className="btn-secondary shadow">Sign In </button></LinkR>
					</div>

					<FaBars className="bars" onClick={toggleSidebar} />

				</nav>

				{/*sidebar for smaller screens*/}
					<div className={sidebar ? "sidebar" : "hidden-sidebar"} id="sidebar" onClick={toggleSidebar}>

						<ul type="none" className="sidebar-ul">

							<LinkS className="sidebar-scroll-link" to="home"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>Home</li>
							</LinkS>

							<LinkS className="sidebar-scroll-link" to="about"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>About</li>
							</LinkS>

							<LinkS className="sidebar-scroll-link" to="join"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>Join</li>
							</LinkS>

						</ul>

						<div className="btn-container">
							<LinkR to="/signup"><button className="btn-primary shadow">Sign Up </button></LinkR>
							<LinkR to="/signin"><button className="btn-secondary shadow">Sign In </button></LinkR>
						</div>
						

					</div>
			</>
			)
	} else {
		return(
			<>

				<nav className={transparent ? "transparent" : "shadow"}>
				{/*<nav>*/}

					<label className={transparent ? "logo-transparent" : "logo"} onClick={backToTop}>Sanitas</label>

					<ul type="none">

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="home"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>Home</li>
						</LinkS>

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="tracker"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>Tracker</li>
						</LinkS>

						<LinkS className={transparent ? "nav-scroll-link-transparent" : "nav-scroll-link"} to="game"
						activeClass="active"
					    spy={true}
					    smooth={true}
					    offset={-80}
					    duration={500}>
							<li>Game</li>
						</LinkS>

					</ul>

					<div className="nav-btn-container">

							<div className="profile-circle">
								<p>{user.username[0].toUpperCase()}</p>
							</div>

							<LinkR to=""><button className="btn-primary shadow" onClick={logOut}>Sign Out </button></LinkR>

					</div>

					<FaBars className="bars" onClick={toggleSidebar} />

				</nav>

				{/*sidebar for smaller screens*/}
					<div className={sidebar ? "sidebar" : "hidden-sidebar"} id="sidebar" onClick={toggleSidebar}>

						<ul type="none" className="sidebar-ul">

							<LinkS className="sidebar-scroll-link" to="home"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>Home</li>
							</LinkS>

							<LinkS className="sidebar-scroll-link" to="tracker"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>Tracker</li>
							</LinkS>

							<LinkS className="sidebar-scroll-link" to="game"
						    spy={true}
						    smooth={true}
						    offset={-80}
						    duration={500}
						    onClick={toggleSidebar}>
								<li>Game</li>
							</LinkS>

						</ul>

						<div className="btn-container">

							<LinkR to=""><button className="btn-primary shadow" onClick={logOut}>Sign Out </button></LinkR>

							<div className="profile-circle">
								<p>{user.username[0].toUpperCase()}</p>
							</div>

						</div>
						

					</div>

			</>
			)
	}

}

export default Navbar;