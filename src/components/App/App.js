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
        localStorage.setItem('loggedIn', true);
        navigate('/movies');
      })
        // .then(() => getProfileData())
        .catch(err => setInfoMessage(err));
  }

  // const getProfileData = () => {
  //   mainApi.getUserInfo()
  //     .then(res => setCurrentUser(res))
  //     .catch(err => setInfoMessage(err));
  // }

  useEffect(() => {
    mainApi.getUserInfo()
      .then((user) => {
        setCurrentUser(user.data);
        setLoggedIn(true);
        localStorage.setItem('loggedIn', true);
      })
      .catch((err) => {
        console.log(err)
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
      });
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
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
            loggedIn
            ? <Navigate to='/' replace/>
            : <Login onLogin={handleLogin} /> 
          }
        />
        <Route 
          path='/profile'
          element={ 
            <ProtectedRoute
              component={Profile}
              loggedIn={loggedIn}
            />
          }
        />
        <Route 
          path='/'
          element={ <Main loggedIn={loggedIn}/> }
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
      </Routes>
    </CurrentUserContext.Provider>
  );
}