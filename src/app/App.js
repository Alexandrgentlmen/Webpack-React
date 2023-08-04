import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLunches } from '../store/lunchesSlice';
// import { useGetAllLunchesQuery, useGetLunchesMutation } from '../store/services/spacexApi';


function App() {
	// const [loadLunchesData, result] = useGetLunchesMutation();
	// const { data: lunches, isLoading, isFetching, isError } = useGetAllLunchesQuery();
	const dispatch = useDispatch();
	const lunches = useSelector(state => state.lunches.lunches);
	console.log("state.lunches", lunches)
	useEffect(() => {
		dispatch(fetchLunches())
	}, [dispatch]);

	return (
		<div className="App">
			<h1>SpaceX project</h1>
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

