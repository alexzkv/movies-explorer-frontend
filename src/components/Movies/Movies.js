import { useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

export default function Movies({ loggedIn, movies }) {
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
            isSavedMoviesPage={false}
            movies={movies}
          />
        } 
      </main>
      <Footer />
    </>
  )
}