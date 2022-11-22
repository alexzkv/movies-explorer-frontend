import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

export default function Movies({ loggedIn, movies, savedMovies, onSave, onDelete }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Header place='movies' loggedIn={loggedIn}/>
      <main>
        <SearchForm
          place='movies'
          setIsLoading={setIsLoading}
        />
        {isLoading && <Preloader />}
        { !isLoading &&
          <MoviesCardList
            place='movies'
            movies={movies}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
          />
        } 
      </main>
      <Footer />
    </>
  )
}