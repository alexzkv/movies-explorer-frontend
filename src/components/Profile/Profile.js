import './Profile.css';

import Header from '../Header/Header';

export default function Profile({ loggedIn }) {
  return (
    <>
      <Header place='profile' loggedIn={loggedIn}/>
      <main className='profile'>
        <h1 className='profile__title'>Привет, Александр</h1>
        <div className='profile__data'>
          <p className='profile__label'>Имя</p>
          <p className='profile__value'>Александр</p>
        </div>
        <div className='profile__data'>
          <p className='profile__label'>E-mail</p>
          <p className='profile__value'>pochta@yandex.ru</p>
        </div>
        <button
          type='button'
          className='profile__btn'
        >Редактировать</button>
        <button
          type='button'
          className='profile__btn profile__btn_type_signout'
        >Выйти из аккаунта</button>
      </main>
    </>
  );
}