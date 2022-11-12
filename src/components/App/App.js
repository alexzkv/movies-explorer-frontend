import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import mainApi from '../../utils/MainApi';

export default function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState('');

  const handleRegister = ({ name, email, password }) => {
    return mainApi.register({ name, email, password })
      .then(() => {
        setInfoMessage('Вы успешно зарегистрировались!')
        handleLogin({ email, password })
      })
      .catch(err => setInfoMessage(err));
  }

  const handleLogin = ({ email, password }) => {
    return mainApi.login({ email, password })
      .then(() => {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        navigate('/movies');
      })
        .then(() => getProfileData())
        .catch(err => setInfoMessage(err));
  }

  const getProfileData = () => {
    mainApi.getUserInfo()
      .then(res => setCurrentUser(res))
      .catch(err => setInfoMessage(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route 
          path='/'
          element={ <Main /> }
        />
        <Route 
          path='/movies'
          element={ 
            <Movies
              loggedIn={loggedIn}
            /> 
          }
        />
        <Route 
          path='/saved-movies'
          element={
            <SavedMovies
              loggedIn={loggedIn}
            />
          }
        />
        <Route 
          path='/profile'
          element={ 
            <Profile 
              loggedIn={loggedIn} 
            />
          }
        />
        <Route 
          path='/signup'
          element={
            loggedIn 
            ? <Navigate to='/' replace/> 
            : <Register 
                onRegister={handleRegister}
                message={infoMessage}
              /> 
          }
        />
        <Route 
          path='/signin'
          element={ 
            <Login /> 
          }
        />
        <Route 
          path='*'
          element={ <NotFound /> }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}