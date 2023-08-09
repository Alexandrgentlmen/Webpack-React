import React from 'react';

import { cn as bem } from '@bem-react/classname';

const Loading = () => {
	const cn = bem('Loading');
	return (
		<div
			className={`${cn()} ${cn('loader')} ${cn('centered')}`}
		></div>
	);
};
export { Loading };
