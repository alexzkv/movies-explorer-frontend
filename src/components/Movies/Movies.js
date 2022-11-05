import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies({ loggedIn }) {
  return (
    <>
      <Header place='movies' loggedIn={loggedIn}/>
      <main>
        <SearchForm  place='movies' />
        <MoviesCardList
          place='movies'
          isSavedMoviesPage={false}
        />
      </main>
      <Footer />
    </>
  )
}