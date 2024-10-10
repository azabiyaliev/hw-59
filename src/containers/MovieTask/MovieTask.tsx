import AddForm from '../../components/AddForm/AddForm.tsx';
import React, { useState } from 'react';
import Movies from '../../components/Movies/Movies.tsx';
import { IMovie } from '../../types';


const MovieTask = () => {

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
    <div>
      <AddForm addMovies={addNewMovie}/>
      {newMovies.length === 0 ? <h5 className='text-center text-primary mt-5'>Movies list empty</h5>:
      <Movies movies={newMovies} onChangeMovieName={changeMovie} onDeleteMovie={deleteMovie}/>}
    </div>
  );
};

export default MovieTask;