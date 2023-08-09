import React from 'react';
import { cn as bem } from '@bem-react/classname';

const Pagination = ({ currentPage, countPages, changePaginate }) => {
	const cn = bem('Pagination');
	const pageNumbers = [];
	for (let i = 1; i <= countPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<>
			<ul className={`${cn()} ${cn('resetList')}`}>
				{pageNumbers.map((number) => {
					if (currentPage !== number) {
						return (
							<li className={cn('pageItem')} key={number}>
								<button
									className={`${cn('page')} ${cn('btnReset')}`}
									onClick={() => changePaginate(number)}
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
};
export { Pagination };
