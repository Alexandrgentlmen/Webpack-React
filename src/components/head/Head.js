import React from 'react';
import { cn as bem } from '@bem-react/classname';

function Head({ title }) {

	const cn = bem('Head');
	return (
		<div className={cn()}>
			<h1 className={`${cn('title')} ${cn('centered')}`}>{title}</h1>
		</div>
	)
}


export default Head;