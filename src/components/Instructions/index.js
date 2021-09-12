import React from 'react';
import { tree, water, bush } from "../Game/images"
import Medow from "../../images/Medow.png"
import Empty from "../../images/Empty.png"
import './instructions.css'

const Instructions = () => {
	return(
		<>
			<div className="instructions-container">
				<h1 className="instructions-heading">Instructions</h1>

				<p className="instructions-running">Working out regularly is an important aspect of leading a healthy lifestyle. Unfortunately, it can be difficult to find consistent motivation. The game keeps you motivated by initiaiting a rewards system. </p>

				<h3 className="instructions-subheading">How To Play</h3>
				<p className="instructions-running"> The goal is to turn the empty grassland into a medow using trees, water blocks and grass. You start with three trees, one water-block and one grass-block. Each time you make an entry in the Work-Out tracker, you will be rewarded with a random asset which you can place on the gameboard. Your inventory shows the type and the number of assets you have.</p>

				<h3 className="instructions-subheading">Placing Assets</h3>
				<p className="instructions-running"> To place an asset, select a block by clicking on it, then click on the asset you want to place there. All items are stackable, you can place all three at the same block OR, select an asset already on the board to place another one on top of it (go creative with it). If you do not currently have an asset, it will be disabled in the inventory. Work out to get more assets.</p>

				<p className="error-message">IT IS IMPORTANT TO CLICK 'Save Progress' BUTTON AFTER MAKING CHANGES. Autosave has been disabled to avoid confusion. </p>
				<p className="tip">Tip: Place water-blocks next to each other to make a river.</p>

				<h3 className="instructions-subheading">Deleting Assets</h3>
				<p className="instructions-running">To remove an asset from where it's placed, select the asset by clicking on it and click the delete button in the inventory. The item will be added back to your inventory. </p>

				<div className="showcase">
					<div className="showcase-card">
						<img src={Empty} className="join-image" />
						<h3 className="tip center">Where You Start</h3>
					</div>
					<div className="showcase-card">
						<img src={Medow} className="join-image" />
						<h3 className="tip center">Where You Want To Be</h3>
					</div>
				</div>

			</div>
		</>
		)
}

export default Instructions