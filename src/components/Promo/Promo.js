import './Promo.css';

export default function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <h2 className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
      <img alt='шар из слов' className='promo__img' />
    </section>
  );
}