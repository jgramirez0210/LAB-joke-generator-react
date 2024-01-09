import React, { useEffect } from 'react';
import getJoke from '../api/jokeData';

export default function GetJoke() {
  const [joke, setJoke] = React.useState('');

  useEffect(() => {
    fetch(getJoke)
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  }, []);

  return (
    <div>
      {joke}
    </div>
  );
}
