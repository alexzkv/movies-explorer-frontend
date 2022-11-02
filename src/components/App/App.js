import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';

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
        path='/'
        element={ <NotFound /> }
      />
    </Routes>
  );
}