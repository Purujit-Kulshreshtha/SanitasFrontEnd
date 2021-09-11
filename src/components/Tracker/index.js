import React, {useContext, useState, useEffect} from 'react';
import {UserContext} from "../../context/userContext";
import {FaTrash} from 'react-icons/fa'
import {updateUser, getUser} from "../../api";
import Modal from './Modal'
import "./tracker.css"

const Tracker = () => {

	const {user, setUser} = useContext(UserContext)

	const foodData = user.foodData
	const workData = user.workData

	const [foodTableData, setFoodTableData] = useState([])
	const [workTableData, setWorkTableData] = useState([])

	const [foodTimeOfCon, setFoodTimeOfCon] = useState();
	const [foodItem, setFoodItem] = useState();
	const [foodCalories, setFoodCalories] = useState();

	const [message, setMessage] = useState();

	const [workTime, setWorkTime] = useState();
	const [workItem, setWorkItem] = useState();
	const [workDuration, setWorkDuration] = useState();
	const [workCalories, setWorkCalories] = useState();

	const resetValues = (e) => {
		e?.preventDefault()
		setFoodTimeOfCon("")
		setFoodItem("")
		setFoodCalories("")
		setWorkTime("")
		setWorkItem("")
		setWorkDuration("")
		setWorkCalories("")

	}

	const changeFoodData = async (e) => {
		e.preventDefault()

		const id = user.foodData.length
		const newFoodEntry = {foodTimeOfCon, foodItem, foodCalories, id}

		foodData.push(newFoodEntry)

		const data = { ...user, foodData}
		const newUser = await updateUser(data, user._id)

		localStorage.setItem('profile', JSON.stringify(newUser.data))
		setUser(newUser.data)

		resetValues()
	}

	const changeWorkData = async (e) => {
		e.preventDefault()

		const newWorkEntry = {workTime, workItem, workDuration, workCalories}

		workData.push(newWorkEntry)

		const gameData = user.gameData
		const random = Math.floor(Math.random() * 3);

		if (random === 0) {
			gameData.inventory.tree = gameData.inventory.tree + 1
			setMessage("tree")
		} else if (random === 1 ) {
			gameData.inventory.water = gameData.inventory.water + 1
			setMessage("water-block")
		} else if (random === 2) {
			gameData.inventory.grass = gameData.inventory.grass + 1
			setMessage("grass-block")
		}


		const data = { ...user, workData, gameData}
		const newUser = await updateUser(data, user._id)

		localStorage.setItem('profile', JSON.stringify(newUser.data))
		setUser(newUser.data)

		resetValues()

	}

	const deleteFood = async (id) => {

		const index = foodData.findIndex((entry) => entry.id === id)
		foodData.splice(index, 1)

		const data = {...user, foodData}

		const newUser = await updateUser(data, user._id)

		localStorage.setItem('profile', JSON.stringify(newUser.data))
		setUser(newUser.data)

	}

	const deleteWork = async (id) => {
		const index = workData.findIndex((entry) => entry.id === id)
		workData.splice(index, 1)

		const data = {...user, workData}

		const newUser = await updateUser(data, user._id)

		localStorage.setItem('profile', JSON.stringify(newUser.data))
		setUser(newUser.data)
		
	}

	useEffect(() => {
		const getData = async () => {
			const userData = await getUser(user._id)
			setFoodTableData(userData.data.foodData)
			setWorkTableData(userData.data.workData)
		}
		getData()
	}, [foodData])

	const showModal = () => {
		if (message) {
			return(
				<Modal message={message} setMessage={setMessage} />
				)
		} else {
			return(
				<>
				</>
				)
		}
	}

	return(
		<>
			{showModal()}
			<div id="tracker" className="tracker-contianer">

				<h1 className="tracker-heading">Health Tracker</h1>
				<p className="tracker-subheading">Keep track of your calory intake and workout sessions here.</p>

				<div className="data-container">

					<div className="table-container">
						<h3 className="table-heading">Calory Intake</h3>

					{/*time of consumption*/}
					{/*food item*/}
					{/*caolries (est*/}

					<form className="tracker-form" onSubmit={changeFoodData} onReset={resetValues}>

							<input value={foodTimeOfCon} className="tracker-input" placeholder="Time of consumption..." onChange={(e) => setFoodTimeOfCon(e.target.value)} />
							<input value={foodItem} className="tracker-input" placeholder="Consumed item..." onChange={(e) => setFoodItem(e.target.value)} />
							<input value={foodCalories} className="tracker-input" placeholder="Estimated number of calories..." onChange={(e) => setFoodCalories(e.target.value)} />

							<div className="btn-container">
								<button className="btn-primary" type="submit">Update</button>
								<button className="reset-button" type="reset">Clear</button>
							</div>

						</form>

						<div className="form-table">

							<table className="table">

								<thead>
									<tr>
										<th>Time</th>
										<th>Food Item</th>
										<th>Calories (Est.)</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
								{foodTableData.map((item) => {
									return(
										<tr>
											<td>{item.foodTimeOfCon}</td>
											<td>{item.foodItem}</td>
											<td>{item.foodCalories}</td>
											<td><FaTrash className="trash-table" onClick={() => deleteFood(item.id)}/></td>
										</tr>

										)
								})}
								</tbody>
								

							</table>


						

						</div>
					</div>
					
					<div className="table-container">
						<h3 className="table-heading">Workout History</h3>

					{/*time of workout*/}
					{/*type of exersize*/}
					{/*duration*/}
					{/*calories burnt (est*/}
					<form className="tracker-form" onSubmit={changeWorkData}>

							<input value={workTime} className="tracker-input" placeholder="Time of workout..." onChange={(e) => setWorkTime(e.target.value)} />
							<input value={workItem} className="tracker-input" placeholder="Tyoe of workout..." onChange={(e) => setWorkItem(e.target.value)} />
							<input value={workDuration} className="tracker-input" placeholder="Workout duration..." onChange={(e) => setWorkDuration(e.target.value)} />
							<input value={workCalories} className="tracker-input" placeholder="Estimated number of calories burnt..." onChange={(e) => setWorkCalories(e.target.value)} />

							<div className="btn-container">
								<button className="btn-primary" type="submit">Update</button>
								<button className="reset-button" type="reset">Clear</button>
							</div>

						</form>

						<div className="form-table">


							<table className="table">

								<thead>
									<tr>
										<th>Time</th>
										<th>Food Item</th>
										<th>Duration</th>
										<th>Calories (Est.)</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
								{workTableData.map((item) => {
									return(
										<tr>
											<td>{item.workTime}</td>
											<td>{item.workItem}</td>
											<td>{item.workDuration}</td>
											<td>{item.workCalories}</td>
											<td><FaTrash className="trash-table" onClick={() => {deleteWork(item.id)}}/></td>
										</tr>

										)
								})}
								</tbody>

							</table>


						
						</div>

					</div>

				</div>

			</div>
		</>
		)
}

export default Tracker;