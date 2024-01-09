import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [jokeData, setJokeData] = useState(null);
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');
  const [buttonText, setButtonText] = useState('Get a Joke');

  const handleClick = async () => {
    if (buttonText === 'Get a Joke') {
      const jokeFromApi = await getJoke();
      setJokeData(jokeFromApi);
      setJoke(jokeFromApi.setup);
      setPunchline('');
      setButtonText('Get Punchline');
    } else if (buttonText === 'Get Punchline') {
      setPunchline(jokeData.delivery);
      setButtonText('Get Another Joke');
    } else if (buttonText === 'Get Another Joke') {
      setJokeData(null);
      setJoke('');
      setPunchline('');
      setButtonText('Get a Joke');
    }
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <button type="button" onClick={handleClick}>{buttonText}</button>
      <p>{joke}</p>
      {punchline && <p>{punchline}</p>}
    </div>
  );
}

export default Home;
