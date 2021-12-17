import React from 'react';

export default function GifList({ gifs }) {
  const gifsToDisplay = gifs.map(gif => {
    const url = gif.images.original.url;
    const title = gif.title;
    return (
      <li key={url}>
        <img src={url} alt={title} />
      </li>
    );
  });

  return <ul>{gifsToDisplay}</ul>;
}
