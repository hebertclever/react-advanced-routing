import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Campus = (props) => {
  const { id } = useParams();

  const [campus, setCampus] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    const currentCampusArr = props.campi.filter(
      (campus) => campus.id === parseInt(id)
    );

    setCampus(currentCampusArr[0]);
  }, [props]);

  return (
    <div>
      <div>
        <strong>Campus: </strong> <span>{campus.name}</span>
      </div>
      <div>
        <strong>Campus ID: </strong> <span>{campus.id}</span>
      </div>
    </div>
  );
};

export default Campus;
