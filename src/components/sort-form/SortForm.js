import React from 'react';

import { cn as bem } from '@bem-react/classname';

const SortForm = React.memo(function SortForm({
	loadLaunchesData,
	// changeSelected,
	// valueSelected,
	currentPage,
}) {
	const [selectedSort, setSelectedSort] = useState('desc');
	const cn = bem('SortForm');

	const handleSubmit = (e) => {
		e.preventDefault();
		loadLaunchesData({ page: currentPage, sort: selectedSort });
	};

	return (
		<form className={cn()} onSubmit={handleSubmit}>
			<label className={cn('label')}>
				Сортировка по:&nbsp;
				<select
					name="selectSort"
					value={valueSelected}
					onChange={(e) => setSelectedSort(e.target.value)}
				>
					<option className={cn('option')} value="desc">
						убыванию
					</option>
					<option className={cn('option')} value="asc">
						возростанию
					</option>
				</select>
			</label>
			<button className={cn('submit')} type="submit">
				OK
			</button>
		</form>
	);
});
export { SortForm };
