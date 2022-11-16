import { useState } from 'react';

import './MoviesCard.css';

export default function MoviesCard({ movie, isSavedMoviesPage }) {
  const [savedMovie, setSavedMovie] = useState(null);

  return (
    <a
      href={movie.trailerLink}
      target='_blank'
      rel='noreferrer'
      className='card'
    >
      { !isSavedMoviesPage
        ? <button
            type='button'
            aria-label='Галка, подтверждающая сохранение фильма'
            className={`card__btn card__btn_type_save ${savedMovie && 'card__btn_type_active'} `}
          >
            {!savedMovie && 'Сохранить'}
          </button>
        : <button type='button' className='card__btn card__btn_type_remove' />
      }
      <img 
        alt={movie.nameRU}
        src={('https://api.nomoreparties.co/' + movie.image.url)}
        className='card__img' />
      <div className='card__box'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <p className='card__duration'>
          {(movie.duration / 60).toString().slice(0, 1)}ч {movie.duration % 60}м
        </p>
      </div>
    </a>
  );
}