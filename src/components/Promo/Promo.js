import './Promo.css';
import ball from '../../images/ball.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__info'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img src={ball} alt='шар из слов' className='promo__img' />
    </section>
  );
}