const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MAIN_API_URL = 'https://api.bestmovie.nomoredomains.icu';

const filterMovies = () => {
  const searchMoviesResult = JSON.parse(localStorage.searchMoviesResult);
  const keyWord = localStorage.keyWord.toLowerCase();
  const shortMovieFilter = localStorage.shortMovieFilter;
  const searchedMovies = searchMoviesResult.filter(
    item => item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
  );
  
  if (shortMovieFilter && shortMovieFilter.toString() === 'true') {
    return searchedMovies.filter(item => item.duration < 40);
  }

  return searchedMovies;
}

const filterSavedMovies = (savedMovies) => {
  const keyWordBySaved = localStorage.keyWordBySaved.toLowerCase();
  const shortMovieFilter = localStorage.shortMovieFilter;
  const searchedMovies = savedMovies.filter(
    item => item.nameRU.toLowerCase().includes(keyWordBySaved.toLowerCase())
  );

  if (shortMovieFilter && shortMovieFilter.toString() === 'true') {
    return searchedMovies.filter(item => item.duration < 40);
  }

  return searchedMovies;
}

export {
  filterMovies,
  filterSavedMovies,
  MOVIES_API_URL,
  MAIN_API_URL,
}