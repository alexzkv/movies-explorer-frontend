import { useState, useEffect } from 'react';

import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm({ place, showMovies, onSearch }) {
  const [search, setSearch] = useState('');
  const [isСheckbox, setIsСheckbox] = useState(false);
  const [serchError, setSearchError] = useState('');

  const searchErrorVisible = serchError ? 'search__error search__error_active' : 'search__error';

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      setSearchError('Нужно ввести ключевое слово.');
      setTimeout(() => {
        setSearchError('');
      }, 3000);
    } else
    onSearch(search, isСheckbox);
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setSearchError('');
  }

  const handleCheckboxClick = (shortMovieFilter) => {
    localStorage.setItem('shortMovieFilter', shortMovieFilter);
    showMovies();
  }

  useEffect(() => {
    if (place === 'movies') {
      const keyWord = localStorage.keyWord;
      const shortMovieFilter = localStorage.shortMovieFilter;
      if (keyWord && shortMovieFilter) {
        setSearch(keyWord);
        shortMovieFilter === 'true'
        ? setIsСheckbox(true)
        : setIsСheckbox(false);
      }
    } else {
      localStorage.setItem('keyWordBySaved', '');
      localStorage.setItem('shortMovieFilter', 'false');
      setIsСheckbox(false);
    }
  }, [place]);

  return (
    <section className='search'>
      <form noValidate className='search__form' onSubmit={handleSearch}>
        <div className='search__input-box'>
          <input
            name='movie'
            type='text'
            placeholder='Фильм'
            required
            className='search__input'
            value={search}
            onChange={handleInputChange}
          />
          {<span className={searchErrorVisible}>{serchError}</span>}
          <button
            type='submit'
            className='search__btn'
          >Поиск</button>
        </div>
        <div className='search__checkbox'>
          <FilterCheckbox
            onClick={handleCheckboxClick}
            isСheckbox={isСheckbox}
            setIsСheckbox={setIsСheckbox}
          />
          <p className='search__checkbox-label'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}