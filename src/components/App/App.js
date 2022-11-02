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
        exact path='/profile'
        element={ <Profile loggedIn={'loggedIn'} /> }
      />
      <Route 
        exact path='/signup'
        element={ 
          <Register 
            signError={'signError'}
          /> 
        }
      />
      <Route 
        exact path='/signin'
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