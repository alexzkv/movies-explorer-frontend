import { useState } from 'react';

import './MoviesCard.css';

export default function MoviesCard({ movie, isSavedMoviesPage, savedMovies }) {
  const [savedMovie, setSavedMovie] = useState(null);

  return (
    <article className='card'
    >
      { !isSavedMoviesPage
        ? <button
            type='button'
            aria-label='Кнопка "фильм сохранён"'
            className={`card__btn card__btn_type_save ${savedMovie && 'card__btn_type_active'} `}
          >
            {!savedMovie && 'Сохранить'}
          </button>
        : <button type='button' className='card__btn card__btn_type_remove' />
      }
      <img 
        alt='Иллюстрация к фильму'
        src={movie}
        className='card__img' />
      <div className='card__box'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </article>
  );
}