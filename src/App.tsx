import MovieTask from './containers/MovieTask/MovieTask.tsx';
import JokesTask from './containers/JokesTask/JokesTask.tsx';
import { useState } from 'react';

const App = () => {

  const [page, setPage] = useState<boolean>(false);

  return (
    <>
      <div className="container text-center mt-5">
        <button onClick={() => setPage(!page)} type='button' className='btn btn-outline-primary'>Change task</button>
        {page ? <MovieTask/> : <JokesTask/>}
      </div>
    </>
  )
};

export default App
