//package and module import
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages import
import HomePage from "./pages/home"

//components import
import Login from "./components/Login"
import Signup from "./components/Signup"
import Game from "./components/Game"
import Twitter from "./components/Twitter"
import ForgotPassword from "./components/ForgotPassword"
import ProfilePage from "./components/ProfilePage"

//css import
import "./App.css"

const App = () => {

	return(
		<>
			<Router>
				<Switch>

					<Route path="/signin">
						<Login />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>

					<Route path="/temp">
						<Game />
					</Route>

					<Route path="/twitter">
						<Twitter />
					</Route>

					<Route path="/forgotpassword">
						<ForgotPassword />
					</Route>
{/*
					<Route path="/:id">
						<ProfilePage />
					</Route>*/}

					<Route path="/">
						<HomePage />
					</Route>

				</Switch>
			</Router>



		</>
		)
};

export default App;