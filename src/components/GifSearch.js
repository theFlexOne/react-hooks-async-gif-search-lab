import React, { useState } from 'react';

export default function GifSearch({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter a Search Term</span>
          <input
            type="text"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </label>
        <button>Find Gifs</button>
      </form>
    </div>
  );
}
