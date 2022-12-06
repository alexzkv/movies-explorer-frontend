import { useState, useEffect } from 'react';

import './MoviesCard.css';

import { TIME_DURATION } from '../../utils/constants';

export default function MoviesCard({ place, movie, savedMovies, onSave, onDelete }) {
  const [isSaved, setIsSaved] = useState(false);

  const hours = (movie.duration / TIME_DURATION).toString().slice(0, 1);
  const minutes = (movie.duration % TIME_DURATION);
  const url = 'https://api.nomoreparties.co/';
  const buttonClassName = isSaved ? 'card__btn card__btn_type_active' : 'card__btn';

  useEffect (() => {
    if(place !== 'saved-movies') {
      setIsSaved(savedMovies.some(item => item.movieId === movie.id));
    }    
  }, [place, savedMovies, movie.id]);

  const handleSave = () => {
    const movieInfo = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration,
      year: movie.year || 'unknown',
      description: movie.description || 'unknown',
      image: url + movie.image.url,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU || 'unknown',
      nameEN: movie.nameEN || 'unknown',
      thumbnail: url + movie.image.formats.thumbnail.url,
      movieId: movie.id,
    }
    onSave(movieInfo, setIsSaved);
  }

  const handleDelete = () => {
    if (place === 'saved-movies') {
      onDelete(movie._id);
    }
  }

  const handleClick = () => {
    isSaved
    ? handleDelete()
    : handleSave()
  }

  return (
    <article className='card'>
      {(place === 'movies')
      ? (<button
            type='button'
            aria-label='Кнопка фильм сохранён'
            className={buttonClassName}
            onClick={handleClick}
          >
          {!isSaved && 'Сохранить'}
        </button>)
      : (<button
          type='button'
          aria-label='Кнопка удаления'
          className='card__btn card__btn_type_remove'
          onClick={handleDelete}
        />)
      }
      <a
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
        className='card__link'
      >
        <img 
          alt={movie.nameRU}
          src={place === 'saved-movies' ? movie.image : url + movie.image.url}
          className='card__img' />
        <div className='card__box'>
          <h2 className='card__title'>{movie.nameRU}</h2>
          <p className='card__duration'>{hours}ч {minutes}м</p>
        </div>
      </a>
    </article>
  );
}