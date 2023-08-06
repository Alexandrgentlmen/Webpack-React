import React, { useEffect, useState } from 'react';
import './App.css';
import { useUpdateLunchesMutation } from '../store/services/spacexApi';
import { List } from './components/list/List.jsx';
import { Loading } from './components/loading/Loading.jsx';
import { Pagination } from './components/pagination/Pagination.jsx';
import { SortForm } from './components/sort-form/SortForm.jsx';


function App() {
	const [selectedSort, setSelectedSort] = useState('desc');
	const [loadLunchesData, { data }] = useUpdateLunchesMutation();
	// const [loadLunchesData, { data }] = useUpdateLunchesMutation();
	// const { data: lunches, isLoading, isFetching, isError } = useGetAllLunchesQuery();

	useEffect(() => {
		loadLunchesData({ page: 1, sort: selectedSort })
	}, []);

	console.log('App', data);
	return (
		<div className="App site-container">
			<h1 className="centered">SpaceX</h1>
			< SortForm
				loadLunchesData={loadLunchesData}
				changeSelected={setSelectedSort}
				valueSelected={selectedSort}
				currentPage={data?.page}
			/>
			{data ? < List lunchesData={data} /> : < Loading />}
			{/* <Pagination currentPage={data?.page}  countPages={data?.totalPages} /> */}
		</div >
	);
}

export default App;

