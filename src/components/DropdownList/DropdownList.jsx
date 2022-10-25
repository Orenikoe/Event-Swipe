import React, { useState } from 'react';
import './DropdownList.css';

const DropdownList = ({ data }) => {
	// const[isSelected, setIsSelected] = useState({})

	return (
		<div className="dropdown">
			<button className="dropbtn">{data.title}</button>
			<div className="dropdown-content">
				{data.options.map((option) => {
					return <div>{option}</div>;
				})}
			</div>
		</div>
	);
};

export default DropdownList;
