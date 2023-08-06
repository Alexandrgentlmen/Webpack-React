import React, { useEffect, useState } from 'react';
import { useUpdateLunchesMutation } from '../store/services/spacexApi';
import { List } from './components/list/List.jsx';
import { Loading } from './components/loading/Loading.jsx';
import { Pagination } from './components/pagination/Pagination.jsx';
import { SortForm } from './components/sort-form/SortForm.jsx';
import './App.css';
function App() {
	const [selectedSort, setSelectedSort] = useState('desc');
	const [page, setPage] = useState(1);
	const [loadLunchesData, { data }] = useUpdateLunchesMutation();
	// const [loadLunchesData, { data }] = useUpdateLunchesMutation();
	// const { data: lunches, isLoading, isFetching, isError } = useGetAllLunchesQuery();
	const changePaginate = page => setPage(page);
	useEffect(() => {
		loadLunchesData({ page: page, sort: selectedSort })
	}, [page]);

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
			<Pagination
				changePaginate={changePaginate}
				valueSelected={selectedSort}
				currentPage={data?.page}
				countPages={data?.totalPages}
				limit={data?.limit}
				totalDocs={data?.totalDocs}
			/>
		</div >
	);
}

export default App;

