import { useEffect, useState } from 'react';
import { IJoke } from '../../types';

const Jokes = () => {

  const jokesUrl = 'https://api.chucknorris.io/jokes/random';

  const [jokesFromUrl, setJokesFromUrl] = useState<IJoke>({
    value: ''
  });

  const generateJokes = async () => {
      const response = await fetch(jokesUrl);
      if (response.ok) {
       const randomJokes = await response.json() as IJoke;
        setJokesFromUrl(randomJokes)
      }
    };

  useEffect(() => {
  void generateJokes();
  }, [])

  return (
    <>
      <div className="col-2 w-50 pe-1 border border-gray-300 mt-5 mx-auto me-auto shadow-lg pb-4 rounded-3 text-center">
        <button onClick={generateJokes} className="btn btn-outline-primary mt-4 mb-4">Generate joke</button>
        <p>{jokesFromUrl.value}</p>
      </div>
    </>
  );
};

export default Jokes;