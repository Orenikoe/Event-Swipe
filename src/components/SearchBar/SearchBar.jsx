import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

	return (
		<div className="search-bar-banner">
			<Box
				sx={{
					width: '50%',
					maxWidth: '100%',
					backgroundColor: 'white',
				}}
			>
				<TextField
                    onChange={(e) => {props.state(e.target.value.toLocaleLowerCase())}}
					placeholder="Justin Biber Live at Central Park, NY"
					fullWidth
					label="Search Event"
					id="fullWidth"
				/>
			</Box>
		</div>
	);
}
