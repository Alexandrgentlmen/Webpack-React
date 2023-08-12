import React from 'react';

import { cn as bem } from '@bem-react/classname';

const Head = React.memo(function Head({ title }) {

	const cn = bem('Head');

	return (
		<div className={cn()}>
			<h1 className={`${cn('title')} ${cn('centered')}`}>{title}</h1>
		</div>
	)
});


export { Head };