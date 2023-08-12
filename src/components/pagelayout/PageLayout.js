import React from 'react';

import { cn as bem } from '@bem-react/classname';

const PageLayout = React.memo(function PageLayout({ head, children }) {

	const cn = bem('PageLayout');

	return (
		<div className={cn()}>
			<div className={cn('head')}>
				{head}
			</div>
			<div className={cn('center')}>
				{children}
			</div>
		</div>
	);
});

export { PageLayout };