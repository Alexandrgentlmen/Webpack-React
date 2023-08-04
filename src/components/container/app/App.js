import React, { useEffect } from 'react';
import './App.css';
import { useGetAllLunchesQuery, useGetLunchesMutation } from '../../../store/services/spacexApi';


function App() {
	const [loadLunchesData, result] = useGetLunchesMutation();
	const { data: lunches, isLoading, isFetching, isError } = useGetAllLunchesQuery();

	useEffect(() => {
		loadLunchesData()
	}, []);

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">SpaceX project</h1>
			<ul>
				{
					lunches?.map(item => (
						<li key={crypto.randomUUID()} >
							{item.details}
						</li>
					))
				}
			</ul>
		</div >
	);
}

export default App;

