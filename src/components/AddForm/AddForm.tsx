import { useState } from 'react';
import { IMovie } from '../../types';
import * as React from 'react';

interface IProps {
  addMovies: (IMovie:IMovie) => void;
}


const AddForm:React.FC<IProps> = ({addMovies}) => {

  const [movies, setMovies] = useState<IMovie>({
    name: '',
    id: ''
  });

  const changeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovies(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    addMovies({
      ...movies,
    });
  };

  return (
    <div className="w-50 pe-1 border border-gray-300 mt-5 mx-auto me-auto shadow-lg pb-4 rounded-3">
      <h3 className='text-center text-primary mt-4'>Add movie</h3>
      <form onSubmit={onSubmit} className="d-flex justify-content-around mt-4">
        <input
          type="text"
          id="name"
          name={"name"}
          value={movies.name}
          className="form-control w-75 mx-auto"
          onChange={changeMovie}
        />
        <button className="btn btn-outline-primary me-auto">Add</button>
      </form>
    </div>
  );
};

export default AddForm;