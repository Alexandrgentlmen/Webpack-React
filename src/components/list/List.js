import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { Card } from '../card/Card';

const List = ({ lunchesData }) => {

	const cn = bem('List');

	return (
		<ul className={`${cn()} ${cn('reset')}`}>
			{lunchesData.docs.map((item) => (
				<li className={cn('item')} key={crypto.randomUUID()}>
					<Card luncheDetails={item} />
				</li>
			))}
		</ul>
	);
};
export { List };
