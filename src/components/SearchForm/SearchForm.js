import './SearchForm.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__input-box'>
          <input
            type='text'
            placeholder='Фильм'
            required
            className='search__input'
          />
          <button type='submit' className='search__btn'>Поиск</button>
        </div>
        <div className='search__checkbox'>
          <FilterCheckbox />
          <p className='search__checkbox-label'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}