import { IMovie } from '../../types';
import React, { useEffect } from 'react';

interface Props {
  movie: IMovie,
  onChangeMovie: (e:React.ChangeEvent<HTMLInputElement>, movieId: string) => void,
  deleteMovie: (movieId: string) => void,
}

const MovieItem:React.FC<Props> = React.memo(({movie, onChangeMovie, deleteMovie}) => {

  useEffect(() => {
  }, [movie]);

  return movie && (
    <div
      className="d-flex align-items-center w-50 pe-1 border border-gray-300 mt-5 mx-auto me-auto shadow-lg pb-4 rounded-3">
      <input
        value={movie.name}
        type="text"
        id={movie.id}
        name="name"
        className='form-control w-75 mx-auto mt-4'
        onChange={(e) => onChangeMovie(e, movie.id)}
      />
      <button onClick={() => deleteMovie(movie.id)} className='border-0 border-none bg-body mt-4 me-4'>
        <svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z"
            fill="blue"/>
        </svg>
      </button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.movie === nextProps.movie
});

export default MovieItem;