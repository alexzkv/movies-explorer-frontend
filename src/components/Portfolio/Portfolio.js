import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a 
            href='https://alexzkv.github.io/how-to-learn/' 
            target='_blank' 
            rel='noreferrer' 
            className='portfolio__link'
          >
            Статичный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a 
            href='https://alexzkv.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'
          >
            Адаптивный сайт
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a 
            href='https://github.com/alexzkv/react-mesto-api-full' 
            target='_blank' 
            rel='noreferrer' 
            className='portfolio__link'
          >
            Одностраничное приложение
            <span className='portfolio__arrow'>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}