import AddForm from './components/AddForm/AddForm.tsx';
import Movies from './components/Movies/Movies.tsx';
import React, { useState } from 'react';
import { IMovie } from './types';

const App = () => {

  const [newMovies, setNewMovies] = useState<IMovie[] | []>([]);

  console.log('State ' + newMovies);

  const addNewMovie = (newMovie: IMovie) => {
    setNewMovies(prevState => [...prevState, newMovie]);
  }

  console.log(newMovies);

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


  // const deleteProductButton = ((productsName: string, productPrice: number) => {
  //   setCount(prevState => prevState.map(item => {
  //     return item.name === productsName ? {
  //       ...item,
  //       count: (item.count) - item.count,
  //       price: (item.price - productPrice),
  //     } : item;
  //   }));
  // });

  const deleteMovie = () => {
    // setNewMovies(prevState => prevState.map(item => {
    //   console.log(item);
    // }));
    console.log('btn clicked');
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
