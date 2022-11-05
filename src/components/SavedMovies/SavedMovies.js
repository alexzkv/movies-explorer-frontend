import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies({ loggedIn }) {
  return (
    <>
      <Header place='saved-movies' loggedIn={loggedIn}/>
      <main>
        <SearchForm place='saved-movies' />
        <MoviesCardList
          place='saved-movies'
          isSavedMoviesPage={true}
        />
      </main>
      <Footer />
    </>
  )
}