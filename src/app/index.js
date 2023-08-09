import React, { useEffect, useState } from 'react';
import { useUpdateLunchesMutation } from '../store/services/spacexApi';
import Head from '../components/head/Head';
import { List } from './../components/list/List';
import { Loading } from './../components/loading/Loading';
import { Pagination } from './../components/pagination/Pagination';
import { SortForm } from './../components/sort-form/SortForm';
import './App.css';

function App() {
	const [selectedSort, setSelectedSort] = useState('desc');
	const [page, setPage] = useState(1);
	const [loadLunchesData, { data }] = useUpdateLunchesMutation();

	const changePaginate = page => setPage(page);
	useEffect(() => {
		loadLunchesData({ page: page, sort: selectedSort })
	}, [page]);

	return (
		<>
			<Head title="SpaceX" />
			< SortForm
				loadLunchesData={loadLunchesData}
				changeSelected={setSelectedSort}
				valueSelected={selectedSort}
				currentPage={data?.page}
			/>
			{data ? < List lunchesData={data} /> : < Loading />}
			<Pagination
				changePaginate={changePaginate}
				currentPage={data?.page}
				countPages={data?.totalPages}
			/>
		</ >
	);
}

export default App;

