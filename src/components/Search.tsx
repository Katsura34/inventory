import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Item to search"
      />
    </div>
  );
};

export default Search;
