import React, {useContext} from 'react';

import {BoardContext} from "./boardContext"
import "./game.css"
import Tile from './Tile'

const Board = () => {

	const {boardData} = useContext(BoardContext)

	return(
		<>
			<div className="board-container">		

			{boardData.map((tile) => {

					return(
						<Tile key={tile.id} id={tile.id} tileType={tile.type} x={tile.x} y={tile.y} />
						)
				})}

			</div>
		</>
		)
}

export const BoardTwo = ({passedBoardData}) => {

	return(
		<>
			<div className="board-container">		

			{passedBoardData.map((tile) => {

					return(
						<Tile key={tile.id} id={tile.id} tileType={tile.type} x={tile.x} y={tile.y} />
						)
				})}

			</div>
		</>
		)
}

export default Board;