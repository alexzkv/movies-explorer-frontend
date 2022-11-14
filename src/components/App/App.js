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

export default function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isErrorMessage, setIsErrorMessage] = useState('');
  const [isReady, setReady] = useState(null);

  const handleRegister = ({ name, email, password }) => {
    mainApi.register({ name, email, password })
      .then(() => {
        setIsErrorMessage('Вы успешно зарегистрировались!');
        handleLogin({ email, password });
      })
      .catch(err => {
        err.status !== 400
        ? setIsErrorMessage('Пользователь с таким email уже существует.')
        : setIsErrorMessage('При регистрации пользователя произошла ошибка.');
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
        err.includes(401)
        ? setIsErrorMessage('Вы ввели неправильный логин или пароль.')
        : setIsErrorMessage('При авторизации произошла ошибка.');
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
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch(err => setIsErrorMessage(err));
  }

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
            />
          }
        />
        <Route 
          path='/movies'
          element={ 
            <ProtectedRoute
              component={Movies}
              loggedIn={loggedIn}
            />
          }
        />
        <Route 
          path='/saved-movies'
          element={
            <ProtectedRoute
              component={SavedMovies}
              loggedIn={loggedIn}
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