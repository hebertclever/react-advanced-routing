import React from 'react';
import { Link } from 'react-router-dom';

function AllCampi(props) {
  return (
    <div>
      <ul>
        {props.campi.map((campus, i) => (
          <li key={i}>
            <Link to={`/campus/${campus.id}`}>{campus.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllCampi;
