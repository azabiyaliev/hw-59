import MovieItem from './MovieItem.tsx';
import { IMovie } from '../../types';
import React from 'react';

interface Props {
  movies: IMovie[];
}


const Movies: React.FC<Props> = ({movies}) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie}/>
      ))}
    </>
  );
};

export default Movies;