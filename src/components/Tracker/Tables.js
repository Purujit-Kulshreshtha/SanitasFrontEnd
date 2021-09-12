import React from 'react';

export const FoodTable = ({item}) => {
	return(
			<tr>
				<td>{item.foodTimeOfCon}</td>
				<td>{item.foodItem}</td>
				<td>{item.foodCalories}</td>
			</tr>
		)
}

export const WorkTable = () => {
	return(
		<>
		</>
		)
}