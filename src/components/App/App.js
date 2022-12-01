import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import mainApi from '../../utils/MainApi';

import { ERROR_CODE_BAD_REQUEST, ERROR_CODE_UNAUTHORIZED} from '../../utils/constants';
import {
  ERROR_MESSAGE_EMAIL,
  ERROR_MESSAGE_REGISTRATION,
  ERROR_MESSAGE_INVALID,
  ERROR_MESSAGE_AUTHORIZATION,
  ERROR_MESSAGE_UPDATING_PROFILE,
} from '../../utils/erorrs';

export default function App() {
  const navigate = useNavigate();
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isReady, setReady] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState('');

  useEffect(() => {
    mainApi.getUserInfo()
      .then((user) => {
        setCurrentUser(user.data);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
      })
      .catch((err) => {
        setIsErrorMessage(err);
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
      })
      .finally(() => setReady({}));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then(movie => setSavedMovies(movie.data))
        .catch(err => console.log(err));
    }
  }, [loggedIn]);

  const handleRegister = ({ name, email, password }) => {
    mainApi.register({ name, email, password })
      .then(() => handleLogin({ email, password }))
      .catch((err) => {
        err !== ERROR_CODE_BAD_REQUEST
        ? setIsErrorMessage(ERROR_MESSAGE_EMAIL)
        : setIsErrorMessage(ERROR_MESSAGE_REGISTRATION);
      });
  }

  const handleLogin = ({ email, password }) => {
    mainApi.login({ email, password })
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user.data);
        localStorage.setItem('loggedIn', true);
        navigate('/movies');
      })
      .catch(err => {
        err.includes(ERROR_CODE_UNAUTHORIZED)
        ? setIsErrorMessage(ERROR_MESSAGE_INVALID)
        : setIsErrorMessage(ERROR_MESSAGE_AUTHORIZATION);
      });
  }

  const handleLogout = () => {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser(null);
        setIsErrorMessage('');
        navigate('/');
        localStorage.clear();
      })
      .catch(err => setIsErrorMessage(err));
  }

  const handleUpdateUser = ({ name, email }) => {
    mainApi.setUserInfo({ name, email })
      .then(user => setCurrentUser(user.data))
      .catch((err) => {
        err !== ERROR_CODE_BAD_REQUEST
        ? setIsErrorMessage(ERROR_MESSAGE_EMAIL)
        : setIsErrorMessage(ERROR_MESSAGE_UPDATING_PROFILE);
      });
  }

  const handleSaveMovie = (data) => {
    mainApi.saveMovie(data)
      .then(res => setSavedMovies([...savedMovies, res.data]))
      .catch(err => console.log(err));
  }

  const handleDeleteMovie = (id) => {
    mainApi.deleteMovie(id)
      .then((res) => {
        setSavedMovies((state) => {
          return state.filter(item => item._id !== res.data._id);
        })
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isReady && <Routes>
        <Route 
          path='/'
          element={ <Main loggedIn={loggedIn}/> }
        />
        <Route 
          path='/signup'
          element={
            loggedIn 
            ? <Navigate to='/' replace/> 
            : <Register 
                onRegister={handleRegister}
                message={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
              />
          }
        />
        <Route
          path='/signin'
          element={
            loggedIn
            ? <Navigate to='/' replace/>
            : <Login
                onLogin={handleLogin}
                message={isErrorMessage}
                setIsErrorMessage={setIsErrorMessage}
              /> 
          }
        />
        <Route 
          path='/profile'
          element={
            <ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onLogout={handleLogout}
              message={isErrorMessage}
              setIsErrorMessage={setIsErrorMessage}
            />
          }
        />
        <Route 
          path='/movies'
          element={ 
            <ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              isErrorMessage={isErrorMessage}
              setIsErrorMessage={setIsErrorMessage}
            />
          }
        />
        <Route 
          path='/saved-movies'
          element={
            <ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onDelete={handleDeleteMovie}
              isErrorMessage={isErrorMessage}
              setIsErrorMessage={setIsErrorMessage}
            />
          }
        />
        <Route 
          path='*'
          element={ <NotFound /> }
        />
      </Routes>}
    </CurrentUserContext.Provider>
  );
}