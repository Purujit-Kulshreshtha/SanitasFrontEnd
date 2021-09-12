import React, {useContext} from 'react';
import {BoardContext} from "./boardContext"
import { grass, grassselected, tree, treeselected, water, waterselected, bush, bushselected } from "./images"

const Tile = ({tileType, x, y, id}) => {

	const {boardData, setBoardData, selected, setSelected, setErrorMessage} = useContext(BoardContext)

	// const [tileNotSelected, setTileNotSelected] = useState(true);
	// const tileTexture = tileNotSelected ? tileType : `${tileType}selected`

	const isSelected = selected === id //checks if the CURRENT tile is selected
	const tileTexture = !isSelected ? tileType : `${tileType}selected`


	let src;
		if (tileTexture === "grass") {
			src = grass
		} else if (tileTexture === "grassselected") {
			src = grassselected
		} else if (tileTexture === "tree") {
			src = tree
		} else if (tileTexture === "treeselected") {
			src = treeselected
		} else if (tileTexture === "water") {
			src = water
		} else if (tileTexture === "waterselected") {
			src = waterselected
		} else if (tileTexture === "bush") {
			src = bush
		} else if (tileTexture === "bushselected") {
			src = bushselected
		}

	const selectTile = () => {
		if (isSelected){
			setSelected(null)
		} else {
			setSelected(id)
			setErrorMessage(null)
		}
	}

	return(
		<>
			<img className="tile" alt="" src={src} style={{left: x, top: y}} onClick={selectTile} />
		</>
		)
}

export default Tile