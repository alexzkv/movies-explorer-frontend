import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';
import { MESSAGE_NOT_FOUND, MESSAGE_REQUEST_ERROR } from '../../utils/constants';

export default function Movies({ 
  loggedIn, savedMovies, onSave,
  isErrorMessage, setIsErrorMessage,
}) {

  const [movies, setMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showMovies = () => {
    setIsLoading(false);
    const serchedMovies = filterMovies();
    if (serchedMovies.length === 0) {
      setIsSearching(false);
      setIsErrorMessage(MESSAGE_NOT_FOUND);
    } else {
      setIsSearching(true);
      setMovies(serchedMovies);
    }
  }

  const handleSearch = (keyWord, shortMovieFilter) => {
    setIsLoading(true);
    setIsErrorMessage(false);
    localStorage.setItem('keyWord', keyWord);
    localStorage.setItem('shortMovieFilter', shortMovieFilter);
    if (movies.length === 0) {
      moviesApi.getMovies()
        .then((res) => {
          localStorage.setItem('searchMoviesResult', JSON.stringify(res));
          showMovies();
        })  
        .catch(() => setIsErrorMessage(MESSAGE_REQUEST_ERROR))
        .finally(() => setIsLoading(false));
    } else showMovies();
  }

  useEffect(() => {
    if (localStorage.searchMoviesResult) {
      setIsLoading(true);
      showMovies();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm
          place='movies'
          onSearch={handleSearch}
          showMovies={showMovies}
        />
        {isLoading
          ? ( <Preloader /> )
          : isSearching
          ? (<MoviesCardList
              place='movies'
              movies={movies}
              savedMovies={savedMovies}
              onSave={onSave}
            />)
          : ( isErrorMessage && (
              <p className='search__not-found'>{isErrorMessage}</p>
            ))
        }
      </main>
      <Footer />
    </>
  )
}