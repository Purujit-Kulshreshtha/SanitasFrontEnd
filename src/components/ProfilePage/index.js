import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getUser} from '../../api'
import {BoardTwo} from "../Game/Board"
import './profilepage.css'

const ProfilePage = () => {

	const {id} = useParams()
	const [profile, setProfile] = useState({username: "a", workData: [], foodData: [], gameData: {boardData: []}})

	useEffect(() => {
		console.log("use")

		const getUserData = async () => {
			const tempData = await getUser(id)
			setProfile(tempData.data)
			console.log(profile)
		}

		getUserData()

	}, [])

	return(
		<>
			<div className="profile-page-container">
				<div className="profile-page-cover shadow">
					<div className="profile-circle-big shadow">
						<p>{profile.username[0].toUpperCase()}</p>
					</div>
				</div>
				<h1 className="profile-page-username">{profile.username}</h1>

				<div className="data-container">

					<div className="table-container">
						<h3 className="table-heading">Calory Intake</h3>

						<div className="form-table">

							<table className="table">

								<thead>
									<tr>
										<th>Time</th>
										<th>Food Item</th>
										<th>Calories (Est.)</th>
									</tr>
								</thead>

								<tbody>
								{profile.foodData.map((item) => {
									return(
										<tr>
											<td>{item.foodTimeOfCon}</td>
											<td>{item.foodItem}</td>
											<td>{item.foodCalories}</td>
										</tr>

										)
								})}
								</tbody>
								

							</table>


						

						</div>
					</div>
					
					<div className="table-container">
						<h3 className="table-heading">Workout History</h3>

						<div className="form-table">


							<table className="table">

								<thead>
									<tr>
										<th>Time</th>
										<th>Food Item</th>
										<th>Duration</th>
										<th>Calories (Est.)</th>
									</tr>
								</thead>

								<tbody>
								{profile.workData.map((item) => {
									return(
										<tr>
											<td>{item.workTime}</td>
											<td>{item.workItem}</td>
											<td>{item.workDuration}</td>
											<td>{item.workCalories}</td>
										</tr>

										)
								})}
								</tbody>

							</table>


						
						</div>

					</div>

				</div>

				{/*----------Board-----------*/}

				<BoardTwo passedBoardData={profile.gameData.boardData} />

			</div>
		</>
		)

}

export default ProfilePage