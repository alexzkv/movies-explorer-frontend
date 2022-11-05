import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <>
      <ul className='movies-list'>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
        <li className='movies__list-item'>
          <MoviesCard />
        </li>
      </ul>
      <div className='movies__more-box'>
        <button type='button' className='movies__more'>Ещё</button>
      </div>
    </>
  );
}