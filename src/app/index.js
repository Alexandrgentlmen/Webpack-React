import React, { useEffect } from 'react';
import { useUpdateLaunchesMutation } from '../store/services/spacexApi';
import { Head } from '../components/head/Head';
import { List } from './../components/list/List';
import { Loading } from './../components/loading/Loading';
import { Pagination } from './../components/pagination/Pagination';
import { SortForm } from './../components/sort-form/SortForm';
import './index.css';
import { PageLayout } from '../components/pagelayout/PageLayout';

function App() {
	// const [selectedSort, setSelectedSort] = useState('desc');
	// const [page, setPage] = useState(1);
	const [loadLaunchesData, { data }] = useUpdateLaunchesMutation();

	useEffect(() => {
		loadLaunchesData({ page: 1, sort: 'desc' })
	}, []);

	// const changePaginate = (page) => {
	// 	setPage(page)
	// };

	// const changeSelected = () => {
	// 	setSelectedSort()
	// };
	return (
		<PageLayout>
			<Head title="SpaceX" />
			< SortForm
				loadLaunchesData={loadLaunchesData}
				// changeSelected={setSelectedSort}
				// valueSelected={selectedSort}
				currentPage={data?.page}
			/>
			{data ? < List launchesData={data} /> : < Loading />}
			<Pagination
				// changePaginate={changePaginate}
				// currentPage={data?.page}
				countPages={data?.totalPages}
			/>
		</PageLayout>
	);
}

export default App;

