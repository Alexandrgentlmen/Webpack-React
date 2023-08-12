import React, { useState } from 'react';

import { cn as bem } from '@bem-react/classname';

const Pagination = React.memo(function Pagination({ countPages }) {
	const [page, setPage] = useState(1);
	const cn = bem('Pagination');
	const pageNumbers = [];
	for (let i = 1; i <= countPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<ul className={`${cn()} ${cn('resetList')}`}>
				{pageNumbers.map((number) => {
					if (page !== number) {
						return (
							<li className={cn('pageItem')} key={number}>
								<button
									className={`${cn('page')} ${cn('btnReset')}`}
									onClick={() => setPage(number)}
								>
									{number}
								</button>
							</li>
						);
					} else {
						return (
							<li className={cn('pageItem')} key={number}>
								<button
									className={`${cn('page')} ${cn('btnReset')} ${cn('active')}`}
								>
									{number}
								</button>
							</li>
						);
					}
				})}
			</ul>
		</>
	);
});
export { Pagination };
