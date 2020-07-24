import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResult = (props) => {
  const query = useQuery();

  const [campus, setCampus] = useState({
    id: '',
    name: '',
  });

  useEffect(() => {
    const currentCampusArr = props.campi.filter((campus) =>
      campus.name.toLowerCase().includes(query.get('term').toLowerCase())
    );

    if (currentCampusArr[0]) {
      setCampus(currentCampusArr[0]);
    }
  }, []);

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

export default SearchResult;
