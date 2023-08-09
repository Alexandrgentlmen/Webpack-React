import React from 'react';

import { cn as bem } from '@bem-react/classname';

const SortForm = ({
	loadLunchesData,
	changeSelected,
	valueSelected,
	currentPage,
}) => {

	const cn = bem('SortForm');

	const handleSubmit = (e) => {
		e.preventDefault();
		loadLunchesData({ page: currentPage, sort: valueSelected });
	};

	return (
		<form className={cn()} onSubmit={handleSubmit}>
			<label className={cn('label')}>
				Сортировка по:&nbsp;
				<select
					name="selectSort"
					value={valueSelected}
					onChange={(e) => changeSelected(e.target.value)}
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
};
export { SortForm };
