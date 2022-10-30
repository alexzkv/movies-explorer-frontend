import './AboutMe.css';
import Photo from '../../images/student.png';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='section__title'>Студент</h2>
      <div className='about-me__box'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Александр Захаров</h3>
          <p className='about-me__profession'>Фронтенд-разработчик, 31 год</p>
          <p className='about-me__description'>Я родился и живу в Пензе, закончил технологический факультет ПГСХА. У меня есть чудесные жена и дочь. Люблю спорт и слушать музыку. С 2016 года работал в компании ПАО «Вымпелком». Недавно начал кодить и познавать тайны чистого кода.</p>
          <ul className='about-me__list'>
            <li>
              <a 
                href='https://github.com/alexzkv'
                target='_blank'
                rel='noreferrer'
                className='about-me__social-network'
              >Github</a>
            </li>
            <li>
              <a 
                href='https://www.linkedin.com/mwlite/in/alexzkv' 
                target='_blank'
                rel='noreferrer'
                className='about-me__social-network'
              >Linkedin</a>
            </li>
            <li>
              <a 
                href='https://vk.com/alexzkv'
                target='_blank'
                rel='noreferrer'
                className='about-me__social-network'
              >Vk</a>
            </li>
          </ul>
        </div>
        <img src={ Photo } alt='фото студента' className='about-me__photo'></img>
      </div>
    </section>
  );
}