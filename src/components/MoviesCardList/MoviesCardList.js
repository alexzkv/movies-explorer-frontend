import { useState, useEffect } from'react';

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

    if (screenWidth <= 480) {
      setShownMovies(5);
      setShowMoreMovies(5);
    } else if (
      screenWidth <= 768 &&
      screenWidth > 480
    ) {
      setShownMovies(8);
      setShowMoreMovies(2);
    } else if (
      screenWidth <= 1280 &&
      screenWidth > 768
    ) {
      setShownMovies(12);
      setShowMoreMovies(3);
    } else {
      setShownMovies(12);
      setShowMoreMovies(3);
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