import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import moviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';

export default function Movies({ 
  loggedIn, savedMovies, onSave, onDelete,
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
      setIsErrorMessage('Ничего не найдено.');
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
        .catch(() => {
          setIsErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
          );
        })
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
              onDelete={onDelete}
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