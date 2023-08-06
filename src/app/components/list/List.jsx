import React from 'react';
import { Card } from '../card';

const List = ({ lunchesData }) => {
  return (
    <ul className="list-reset lunches">
      {lunchesData.docs.map((item) => (
        <li className="list-item" key={crypto.randomUUID()}>
          <Card luncheDetails={item} />
        </li>
      ))}
    </ul>
  );
};
export { List };
