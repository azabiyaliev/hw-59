import AddForm from './components/AddForm/AddForm.tsx';
import Movies from './components/Movies/Movies.tsx';
import { useState } from 'react';
import { IMovie } from './types';


const App = () => {

  const [newMovies, setNewMovies] = useState<IMovie[]>([]);

  const addNewMovie = (newMovie: IMovie) => {
    setNewMovies(prevState => [...prevState, newMovie]);
  }

  return (
    <>
      <div className="container">
        <AddForm addMovies={addNewMovie} />
      </div>
      <div className="container">
        <Movies movies={newMovies} />
      </div>
    </>
  )
};

export default App
