import AddForm from './components/AddForm/AddForm.tsx';
import Movies from './components/Movies/Movies.tsx';
import React, { useState } from 'react';
import { IMovie } from './types';

const App = () => {

  const [newMovies, setNewMovies] = useState<IMovie[] | []>([]);

  const addNewMovie = (newMovie: IMovie) => {
    setNewMovies(prevState => [...prevState, newMovie]);
  }

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>, movieId: string) => {
    e.preventDefault();
    setNewMovies(prevState =>
      prevState.map(movie =>
        movie.id === movieId
          ? { ...movie, [e.target.name]: e.target.value }
          : movie
      )
    );
  };

  const deleteMovie = (id: string) => {
    const removeMovie = newMovies.filter(remove => remove.id !== id);
    setNewMovies(removeMovie)
  }

  return (
    <>
      <div className="container">
        <AddForm addMovies={addNewMovie} />
      </div>
      <div className="container">
        <Movies movies={newMovies} onChangeMovieName={changeMovie} onDeleteMovie={deleteMovie}/>
      </div>
    </>
  )
};

export default App
