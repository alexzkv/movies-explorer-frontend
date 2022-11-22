import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ loggedIn, savedMovies, onDelete }) {
  return (
    <>
      <Header place='saved-movies' loggedIn={loggedIn}/>
      <main>
        <SearchForm place='saved-movies' />
        <MoviesCardList
          place='saved-movies'
          onDelete={onDelete}
          movies={savedMovies}
        />
      </main>
      <Footer />
    </>
  )
}