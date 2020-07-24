import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchCampus = () => {
  const [term, setTerm] = useState('');
  let history = useHistory();

  function handleChange(event) {
    return setTerm(event.currentTarget.value);
  }

  return (
    <div>
      <input name="campusSearch" value={term} onChange={handleChange} />
      <button
        type="button"
        onClick={() => history.push(`/search-result?term=${term}`)}
      >
        Search!
      </button>
    </div>
  );
};

export default SearchCampus;
