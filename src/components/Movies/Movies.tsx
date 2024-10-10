import MovieItem from './MovieItem.tsx';
import { IMovie } from '../../types';
import React from 'react';

interface Props {
  movies: IMovie[];
  onChangeMovieName: (e:React.ChangeEvent<HTMLInputElement>, movieId: string) => void,
  onDeleteMovie: React.MouseEventHandler<HTMLButtonElement>
}

const Movies: React.FC<Props> = ({movies, onChangeMovieName, onDeleteMovie}) => {



  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onChangeMovie={onChangeMovieName} deleteMovie={onDeleteMovie}/>
      ))}
    </>
  );
};

export default Movies;