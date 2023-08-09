import React from 'react';
import { useGetImgRocketQuery } from '../../store/services/spacexApi.js';
import { Loading } from './../loading/Loading';
import { dateEditer } from './../../lib/utils';

import styles from './Card.module.scss';


const Card = ({ luncheDetails }) => {
	const { details, name, date_local, rocket } = luncheDetails;
	const { data = [], isLoading } = useGetImgRocketQuery(rocket);
	const dateLunche = dateEditer(date_local);

	if (isLoading) return <Loading />;

	return (
		<>
			{luncheDetails && (
				<img
					className={styles.image}
					src={data.flickr_images[1]}
					alt="rocket image"
				/>
			)}
			<ul className={styles.resetList}>
				<li className={`${styles.paragraph} ${styles.centered}`}>
					<h2>{name}</h2>
				</li>
				<li className={styles.paragraph}>
					<span className={styles.paragraph}>
						<b>Day: </b>
						{dateLunche[0]}
					</span>

					<span className={styles.paragraph}>
						<b> at </b>
						{dateLunche[1]}
					</span>
				</li>
				<li className={styles.paragraph}>
					<h3>{details}</h3>
				</li>
			</ul>
		</>
	);
};
export { Card };
