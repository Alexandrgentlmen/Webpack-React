import React from 'react';
import { Card } from './../card/Card';

import { cn as bem } from '@bem-react/classname';

const List = React.memo(function List(props) {

	const cn = bem('List');

	return (
		<ul className={`${cn()} ${cn('reset')}`}>
			{props.launchesData.docs.map((item) => (
				<li className={cn('item')} key={crypto.randomUUID()}>
					<Card launchDetails={item} />
				</li>
			))}
		</ul>
	);
});
export { List };
