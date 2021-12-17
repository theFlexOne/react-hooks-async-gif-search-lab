import React, { useEffect, useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('puppies');

  const onSearch = text => {
    setQuery(text);
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(({ data }) => {
        setGifs(data.slice(0, 3));
      });
  }, [query]);

  console.log(gifs);

  return (
    <div className="gif-list-container">
      {gifs && <GifList gifs={gifs} />}
      <GifSearch onSearch={onSearch} />
    </div>
  );
}
