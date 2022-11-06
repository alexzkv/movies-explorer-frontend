import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

export default function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={ <Main /> }
      />
      <Route 
        path='/movies'
        element={ <Movies loggedIn={'loggedIn'} /> }
      />
      <Route 
        path='/saved-movies'
        element={ <SavedMovies loggedIn={'loggedIn'} /> }
      />
      <Route 
        path='/profile'
        element={ <Profile loggedIn={'loggedIn'} /> }
      />
      <Route 
        path='/signup'
        element={ 
          <Register 
            signError={'signError'}
          /> 
        }
      />
      <Route 
        path='/signin'
        element={ 
          <Login 
            signError={'signError'}
          /> 
        }
      />
      <Route 
        path='/'
        element={ <NotFound /> }
      />
    </Routes>
  );
}