import React, { useEffect, useState } from 'react';
import { useGetSpacexdataMutation } from '../../store';
import './App.css';

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function App() {
	const [loadLunchesData, result] = useGetSpacexdataMutation();
	console.log(result);

	const handleLoadLunches = async () => {
		await loadLunchesData().unwrap();
	}

	useEffect(() => {
		handleLoadLunches()
	}, [])


	return (
		<div className="App">
			<h1>SpaceX project</h1>
			<ul>
				{result.map(item => {
					<li key={getRandomArbitrary(1, 1000)}>
						{item}
					</li>
				})}
			</ul>
		</div>
	);
}

export default App;