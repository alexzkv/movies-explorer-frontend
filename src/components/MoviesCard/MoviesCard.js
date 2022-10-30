import './MoviesCard.css';

import CardImg from '../../images/pics/pic.png';

export default function MoviesCard() {
  return (
    <a 
      href='/trailerLink' 
      target='_blank'
      rel='noreferrer'
      className='card'
    >
      <button type='button' className='card__btn'>Сохранить</button>
      {/* <button type='button' className='card__btn card__btn_type_save' /> */}
      {/* <button type='button' className='card__btn card__btn_type_remove' /> */}
      <img 
        alt='Иллюстрация к фильму'
        src={CardImg}
        className='card__img' />
      <div className='card__box'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </a>
  );
}