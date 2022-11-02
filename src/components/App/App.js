import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function App() {
  return (
    <Routes>
      <Route 
        exact path='/'
        element={ <Main /> }
      />
      <Route 
        exact path='/movies'
        element={ <Movies loggedIn={'loggedIn'} /> }
      />
      <Route 
        exact path='/saved-movies'
        element={ <SavedMovies loggedIn={'loggedIn'} /> }
      />
      <Route 
        path='/'
        element={ <NotFound /> }
      />
    </Routes>
  );
}