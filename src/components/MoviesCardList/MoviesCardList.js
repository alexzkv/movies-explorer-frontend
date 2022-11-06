import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import movieImages from '../../utils/MovieImg.js';

export default function MoviesCardList({ place, isSavedMoviesPage }) {
  const savedMovieImages = [...movieImages];
  
  return (
    <>
      {(place === 'movies') && <ul className='movies-list'>
        {movieImages.map((item, index) => (
          <li key={index}>
            <MoviesCard
              movie={item}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          </li>
        ))}
      </ul>}
      {(place === 'saved-movies') && <ul className='movies-list'>
        {savedMovieImages.map((item, index) => (
          <li key={index}>
            <MoviesCard
              movie={item}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          </li>
        ))}
      </ul>}
        {(place !== 'saved-movies') && <div className='movies__more-box'>
          <button type='button' className='movies__more'>Ещё</button>
        </div>}
    </>
  );
}