import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__box'>
        <p className='footer__date'>&#169; {new Date().getFullYear()}</p>
        <ul className='footer__list'>
          <li>
            <a
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >Яндекс.Практикум</a>
          </li>
          <li>
            <a
              href='https://github.com'
              target='_blank'
              rel='noreferrer'
              className='footer__link'
            >Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}