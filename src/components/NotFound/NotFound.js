import { useNavigate } from 'react-router-dom';

import './NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  return(
    <section class='not-found'>
      <h1 class='not-found__code'>404</h1>
      <p class='not-found__text'>Страница не найдена</p>
      <button className='not-found__back' onClick={()=>navigate(-1)}>Назад</button>
    </section>
  );
}