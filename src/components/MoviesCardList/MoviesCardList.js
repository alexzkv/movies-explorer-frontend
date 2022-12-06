import { useState, useEffect } from'react';
import {
  LARGE_SCREEN_SIZE,
  MEDIUM_SCREEN_SIZE,
  SMALL_SCREEN_SIZE,
  CARDS_FOR_LARGE_SIZE,
  CARDS_FOR_MEDIUM_SIZE,
  CARDS_FOR_SMALL_SIZE,
  CARDS_ADD_LARGE,
  CARDS_ADD_MEDIUM,
} from '../../utils/constants';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ place, movies, savedMovies, onSave, onDelete }) {
  const [shownMovies, setShownMovies] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showMoreMovies, setShowMoreMovies] = useState(0);

  const handleAddShownMovies = () => {
    setShownMovies(movies => movies + showMoreMovies);
  }

  useEffect(() => {
    const handleChangeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    if (screenWidth <= SMALL_SCREEN_SIZE) {
      setShownMovies(CARDS_FOR_SMALL_SIZE);
      setShowMoreMovies(CARDS_FOR_SMALL_SIZE);
    } else if (
      screenWidth <= MEDIUM_SCREEN_SIZE &&
      screenWidth > SMALL_SCREEN_SIZE
    ) {
      setShownMovies(CARDS_FOR_MEDIUM_SIZE);
      setShowMoreMovies(CARDS_ADD_MEDIUM);
    } else if (
      screenWidth <= LARGE_SCREEN_SIZE &&
      screenWidth > MEDIUM_SCREEN_SIZE
    ) {
      setShownMovies(CARDS_FOR_LARGE_SIZE);
      setShowMoreMovies(CARDS_ADD_LARGE);
    } else {
      setShownMovies(CARDS_FOR_LARGE_SIZE);
      setShowMoreMovies(CARDS_ADD_LARGE);
    }

    window.addEventListener('resize', handleChangeWidth);

    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    }
  }, [screenWidth]);

  return (
    <>
      {<ul className='movies-list'>
        {movies.slice(0, shownMovies).map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            place={place}
            movie={movie}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
          />
        ))}
      </ul>}
      {<div className='movies__more-box'>
        <button
          type='button'
          className={
            shownMovies >= movies.length 
            ? 'movies__more_type_hidden'
            : 'movies__more'
          }
          onClick={handleAddShownMovies}
        >Ещё</button>
      </div>}
    </>
  );
}