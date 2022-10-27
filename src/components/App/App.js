import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';

export default function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={ <Main /> }
      />
      <Route 
        path='/movies'
        element={ <Movies /> }
      />
    </Routes>
  );
}