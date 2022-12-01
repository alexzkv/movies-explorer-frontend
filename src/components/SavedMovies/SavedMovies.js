import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { filterSavedMovies } from '../../utils/utils';
import { MESSAGE_NOT_FOUND } from '../../utils/erorrs';

export default function SavedMovies({
  loggedIn, savedMovies, onDelete,
  isErrorMessage, setIsErrorMessage,
}) {
  const [isSavedMovies, setIsSavedMovies] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showMovies = () => {
    setIsLoading(false);
    const serchedMovies = filterSavedMovies(savedMovies);
    if (serchedMovies.length === 0) {
      setIsSearching(false);
      setIsErrorMessage(MESSAGE_NOT_FOUND);
    } else {
      setIsSearching(true);
      setIsSavedMovies(serchedMovies);
    }
  }

  const handleSearch = (keyWordBySaved, shortMovieFilter) => {
    localStorage.setItem('shortMovieFilter', shortMovieFilter);
    localStorage.setItem('keyWordBySaved', keyWordBySaved);
    showMovies();
  }

  useEffect(() => {
    showMovies(savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main>
        <SearchForm
          onSearch={handleSearch}
          showMovies={showMovies}
        />
        {isLoading 
          ? ( <Preloader /> )
          : isSearching
          ? (<MoviesCardList
              place='saved-movies'
              onDelete={onDelete}
              movies={isSavedMovies}
            />)
          : (
              isErrorMessage && (
                <p className='search__not-found'>{isErrorMessage}</p>
              )
            )
        }
      </main>
      <Footer />
    </>
  )
}