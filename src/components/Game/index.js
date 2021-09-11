import React, {useContext, useState, useEffect} from 'react';

import { grass, grassselected, tree, treeselected, water, waterselected, bush, bushselected } from "./images"
import {BoardContext} from "./boardContext"
import {UserContext} from "../../context/userContext"
import Board from "./Board"
import {initialBoardData} from './boardData'
import {getUser, updateUser} from "../../api"

import {FaTrash} from 'react-icons/fa'

import "./game.css"

const Game = () => {
 
 	const {user, setUser} = useContext(UserContext)

	const [boardData, setBoardData] = useState(initialBoardData)
	const [inventory, setInventory] = useState({
		infinte: true,
	})
	const [selected, setSelected] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {

		const getGame = async () => {
			const data = await getUser(user._id)
			const tempUser = data.data
			const tempBoardData = tempUser.gameData.boardData
			const tempInventory = tempUser.gameData.inventory

			setBoardData(tempBoardData)
			setInventory(tempInventory)
		}

		

		if (user) {
			getGame()
		}

	}, [])

	const save = async () => {
			const newUser = {...user, gameData: {boardData, inventory}}
			const updatedUser = await updateUser(newUser, user._id)
			setUser(newUser)
			setBoardData(newUser.gameData.boardData)
			setInventory(newUser.gameData.inventory)

			localStorage.setItem('profile', JSON.stringify(newUser))
		}

	const placeTree = () => {

		if (!selected) {
			setErrorMessage("Please select a block before placing an item.")
		} else if (inventory.tree === 0){
			setErrorMessage("You do not have any trees in your inventory. WORK OUT to get more assets. ")
		} else {
			const index = selected-1

			const selectedY = parseInt(boardData[index].y.slice(0, boardData[index].y.length - 2))
			const selectedX = parseInt(boardData[index].x.slice(0, boardData[index].x.length - 2))

			const x = selectedX 
			const y = selectedY - 40

			const object = {
				type: "tree", x: `${x}px`, y: `${y}px`, id: boardData[boardData.length-1].id +1
			}
			setBoardData([...boardData, object])

			if (!inventory.infinte) {
				const newInventory = {...inventory, tree: inventory.tree-1}
				setInventory(newInventory)
			}

		}

		setSelected(null)

	}

	const placeWater = () => {

		if (!selected) {
			setErrorMessage("Please select a block before placing an item.")
		} else if (inventory.water === 0){
			setErrorMessage("You do not have any water-blocks in your inventory. WORK OUT to get more assets. ")
		} else {
			const index = selected-1

			let tempBoardData = boardData

			tempBoardData[index] = { ...tempBoardData[index], type: "water"}

			setBoardData(tempBoardData)

			if (!inventory.infinte) {
				const newInventory = {...inventory, water: inventory.water-1}
				setInventory(newInventory)
			}
		}

		setSelected(null)
		
	}

	const placeGrass = () => {

		if (!selected) {
			setErrorMessage("Please select a block before placing an item.")
		} else if (inventory.grass === 0){
			setErrorMessage("You do not have any grass in your inventory. WORK OUT to get more assets. ")
		} else {

			const index = selected-1

			const selectedY = parseInt(boardData[index].y.slice(0, boardData[index].y.length - 2))
			const selectedX = parseInt(boardData[index].x.slice(0, boardData[index].x.length - 2))

			const x = selectedX 
			const y = selectedY - 25

			const object = {
				type: "bush", x: `${x}px`, y: `${y}px`, id: boardData[boardData.length-1].id +1
			}
			setBoardData([...boardData, object])

			if (!inventory.infinte) {
				const newInventory = {...inventory, grass: inventory.grass-1}
				setInventory(newInventory)
			}

		}

		setSelected(null)

	}

	const deleteSelected = () => {
		const index = boardData.findIndex((tile) => tile.id === selected)
		setSelected(null)

		if (!inventory.infinte){
			if (boardData[index].type === "tree") {
				setInventory({...inventory, tree: inventory.tree + 1})
			} else if (boardData[index].type === "water") {
				setInventory({...inventory, water: inventory.water + 1})
			} else if (boardData[index].type === "bush") {
				setInventory({...inventory, grass: inventory.grass + 1})
			}
		}

		if (boardData[index].type === "water") {
			const newBoardData = boardData
			newBoardData[index].type = "grass"

			setBoardData(newBoardData)
		} else {
			const newBoardData = boardData
			newBoardData.splice(index, 1)

			setBoardData(newBoardData)
		}

	}

	const TreeCard = () => {
		if (inventory.tree === 0) {
			return(
				<div className="card-disabled" onClick={placeTree}>
					<img src={tree} />
					<h3 className="card-title">Tree</h3>
					<h6 className="card-title">x{inventory.tree}</h6>
				</div>
				)
		} else {
			return (
				<div className="card" onClick={placeTree}>
					<img src={tree} />
					<h3 className="card-title">Tree</h3>
					<h6 className="card-title">x{inventory.tree}</h6>
				</div>
				)
		}
	}

	const WaterCard = () => {
		if (inventory.water === 0) {
			return(
				<div className="card-disabled" onClick={placeWater}>
					<img src={water} />
					<h3 className="card-title">Water</h3>
					<h6 className="card-title">x{inventory.water}</h6>
				</div>
				)
		} else {
			return (
				<div className="card" onClick={placeWater}>
					<img src={water} />
					<h3 className="card-title">Water</h3>
					<h6 className="card-title">x{inventory.water}</h6>
				</div>
				)
		}
	}

	const GrassCard = () => {
		if (inventory.grass === 0) {
			return(
				<div className="card-disabled" onClick={placeGrass}>
					<img src={bush} />
					<h3 className="card-title">Grass</h3>
					<h6 className="card-title">x{inventory.grass}</h6>
				</div>
				)
		} else {
			return (
				<div className="card" onClick={placeGrass}>
					<img src={bush} />
					<h3 className="card-title">Grass</h3>
					<h6 className="card-title">x{inventory.grass}</h6>
				</div>
				)
		}
	}

	const DeleteCard = () => {
		const index = boardData.findIndex((tile) => tile.id === selected)
		if (selected && boardData[index].type !== "grass") {
			return(
				<div className="card delete" onClick={deleteSelected}>
					<FaTrash className="trash" />
					<h3 className="card-title">Delete</h3>
					<h6 className="card-title">x</h6>
				</div>
				)
		} else {
			return (
				<div className="card-disabled">
					<FaTrash className="trash" />
					<h3 className="card-title">Delete</h3>
					<h6 className="card-title">x</h6>
				</div>
				)
		}
	}


	return(
		<>
			<BoardContext.Provider value={{boardData, setBoardData, selected, 
				setSelected, setErrorMessage}} >

				<div className="game-container" id="game">

					<Board />


					<div className="control-panel">
					{errorMessage ? <p className="error-message">{errorMessage}</p> : null}
						<h1 className="control-heading">Inventory</h1>

						<div className="card-container">

							<TreeCard />

							<WaterCard />

							<GrassCard />

							<DeleteCard />

						</div>

						{user ? <button className="btn-primary" onClick={save}>Save Progress</button> : <></>}

					</div>

				</div>
			</BoardContext.Provider>
		</>
		)
}

export default Game;