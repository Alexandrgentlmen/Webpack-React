import React from 'react';
import { useGetImgRocketQuery } from '../../store/services/spacexApi.js';
import { Loading } from './../loading/Loading';

import { cn as bem } from '@bem-react/classname';
import { dateEditor } from './../../lib/utils';

const Card = React.memo(function Card(props) {

	const { data = [], isLoading } = useGetImgRocketQuery(props.launchDetails.rocket);
	const dateLaunch = dateEditor(props.launchDetails.date_local);
	const cn = bem('Card');

	if (isLoading) return <Loading />;

	return (
		<div className={cn()}>
			{launchDetails && (
				<img
					className={cn('image')}
					src={data.flickr_images[1]}
					alt="rocket image"
				/>
			)}
			<ul className={cn('resetList')}>
				<li className={`${cn('paragraph')} ${cn('centered')}`}>
					<h2>{props.launchDetails.name}</h2>
				</li>
				<li className={cn('paragraph')}>
					<span className={cn('paragraph')}>
						<b>Day: </b>
						{props.launchDetails.dateLaunch[0]}
					</span>

					<span className={cn('paragraph')}>
						<b> at </b>
						{dateLaunch[1]}
					</span>
				</li>
				<li className={cn('paragraph')}>
					<h3>{props.launchDetails.details}</h3>
				</li>
			</ul>
		</div>
	);
});

export { Card };
