import './Movies.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList />
        <button type='button' className='movies__more'>Ещё</button>
      </main>
      <Footer />
    </>
  )
}