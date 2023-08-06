import React from 'react';
import { useGetImgRocketQuery } from '../../../store/services/spacexApi';
import { Loading } from '../loading/Loading.jsx';
import { dateEditer } from '../../../lib/utils';

const Card = ({ luncheDetails }) => {
  const { details, name, date_local, rocket } = luncheDetails;
  const { data = [], isLoading } = useGetImgRocketQuery(rocket);
  const dateLunche = dateEditer(date_local);

  if (isLoading) return <Loading />;

  return (
    <>
      {luncheDetails && (
        <img className="image" src={data.flickr_images[1]} alt="rocket image" />
      )}
      <ul className="list-reset">
        <li className="paragraph centered">
          <h2>{name}</h2>
        </li>
        <li className="paragraph">
          <span className="paragraph">
            <b>Day: </b>
            {dateLunche[0]}
          </span>

          <span className="paragraph">
            <b> at </b>
            {dateLunche[1]}
          </span>
        </li>
        <li className="paragraph">
          <h3>{details}</h3>
        </li>
      </ul>
    </>
  );
};
export { Card };
