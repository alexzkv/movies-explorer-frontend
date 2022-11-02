import { Link } from 'react-router-dom';

import './NotFound.css';

export default function NotFound() {
  return(
    <section class='not-found'>
        <h2 class='not-found__code'>404</h2>
        <p class='not-found__text'>Страница не найдена</p>
        <Link to='/' class='not-found__link'>Назад</Link>
    </section>
  );
}