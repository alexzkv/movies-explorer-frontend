import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ place, isSavedMoviesPage, movies }) {
  
  return (
    <>
      {(place === 'movies') && <ul className='movies-list'>
        {movies.map((item) => (
          <li key={item.id}>
            <MoviesCard
              movie={item}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          </li>
        ))}
      </ul>}
      {/* {(place === 'saved-movies') && <ul className='movies-list'>
        {savedMovieImages.map((item, index) => (
          <li key={index}>
            <MoviesCard
              movie={item}
              isSavedMoviesPage={isSavedMoviesPage}
            />
          </li>
        ))}
      </ul>} */}
        {(place !== 'saved-movies') && <div className='movies__more-box'>
          <button type='button' className='movies__more'>Ещё</button>
        </div>}
    </>
  );
}